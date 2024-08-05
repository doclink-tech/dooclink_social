import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'

export async function POST(req: Request) {

  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`\n\n\nWebhook with and ID of ${id} and type of ${eventType}`)
  console.log('Webhook body:', body)

  if (eventType === 'user.created') {
    const userData = evt.data; // This should be replaced with actual property names based on your data structure
    const emailAddresses = evt.data.email_addresses; // Adjust according to your data structure
  
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clerkId: userData.id,
        username: userData.username, // Ensure these properties exist in your data structure
        email: emailAddresses[0].email_address // Ensure this array exists and has at least one element
      }),
    });
  }

  if (eventType === 'user.updated') {
    const userData = evt.data; // This should be replaced with actual property names based on your data structure
    const emailAddresses = evt.data.email_addresses; // Adjust according to your data structure
  
    const res = await fetch(`/api/user/${userData.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userData.username, // Ensure these properties exist in your data structure
        email: emailAddresses[0].email_address // Ensure this array exists and has at least one element
      }),
    });
  }

  if (eventType === 'user.deleted') {
    const userData = evt.data; // Adjust according to your data structure
  
    const res = await fetch(`/api/user/${userData.id}`, {
      method: "PUT"
    });
  }
  

  return new Response('', { status: 200 })
}