import { NextResponse } from 'next/server';
import User from '@/lib/models/User';
import { connectDB } from '@/lib/database';

export const GET = async () => {
  await connectDB();

  try {
    const users = await User.find();    
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const POST = async (req: Request) => {
  await connectDB();

  try {
    const { clerkId, username, email } = await req.json();

    // Create new user document
    const newUser = new User({
      clerkId,
      username,
      email,
    });

    await newUser.save();

    return NextResponse.json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
