// app/api/messages/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Message from '@/lib/models/Message';
import { connectDB } from '@/lib/database';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const message = await Message.findById(params.id);
    if (message) {
      return NextResponse.json(message);
    } else {
      return NextResponse.json({ message: 'Message not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();
  const { sender, recipient, content } = await req.json();

  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      params.id,
      { sender, recipient, content },
      { new: true }
    );

    if (updatedMessage) {
      return NextResponse.json({ message: 'Message updated successfully', messages: updatedMessage });
    } else {
      return NextResponse.json({ message: 'Message not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const result = await Message.findByIdAndDelete(params.id);

    if (result) {
      return NextResponse.json({ message: 'Message deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Message not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
