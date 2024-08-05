// app/api/post/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Post from '@/lib/models/Post';
import { connectDB } from '@/lib/database';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const post = await Post.findById(params.id);
    if (post) {
      return NextResponse.json(post);
    } else {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();
  const { title, content, author } = await req.json();

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      params.id,
      { title, content, author },
      { new: true }
    );

    if (updatedPost) {
      return NextResponse.json({ message: 'Post updated successfully', post: updatedPost });
    } else {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const result = await Post.findByIdAndDelete(params.id);

    if (result) {
      return NextResponse.json({ message: 'Post deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
