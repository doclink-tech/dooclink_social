// app/api/comment/route.ts

import { NextResponse } from 'next/server';
import Comment from '@/lib/models/Comment';
import { connectDB } from '@/lib/database';

export const GET = async () => {
  await connectDB();

  try {
    const comments = await Comment.find({});
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const POST = async (req: Request) => {
  await connectDB();

  try {
    const { postId, author, text } = await req.json();

    const newComment = new Comment({
      postId,
      author,
      text,
    });

    await newComment.save();

    return NextResponse.json({ message: 'Comment created successfully', comment: newComment });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
