// app/api/comment/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Comment from '@/lib/models/Comment';
import { connectDB } from '@/lib/database';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const comment = await Comment.findById(params.id);
    if (comment) {
      return NextResponse.json(comment);
    } else {
      return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();
  const { postId, author, text } = await req.json();

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      params.id,
      { postId, author, text },
      { new: true }
    );

    if (updatedComment) {
      return NextResponse.json({ message: 'Comment updated successfully', comment: updatedComment });
    } else {
      return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const result = await Comment.findByIdAndDelete(params.id);

    if (result) {
      return NextResponse.json({ message: 'Comment deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
