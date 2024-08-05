// app/api/messages/route.ts

import { NextResponse } from 'next/server';
import Message from '@/lib/models/Message';
import { connectDB } from '@/lib/database';

export const GET = async () => {
  await connectDB();

  try {
    const messages = await Message.find({});
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const POST = async (req: Request) => {
  await connectDB();

  try {
    const { sender, recipient, content } = await req.json();

    const newMessage = new Message({
      sender,
      recipient,
      content,
    });

    await newMessage.save();

    return NextResponse.json({ message: 'Message created successfully', messages: newMessage });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
