// app/api/like/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Post from '@/lib/models/Post';
import { connectDB } from '@/lib/database';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    // Fetch all posts liked by the user
    const likedPosts = await Post.find({ likes: { $in: [params.id] } }).exec();

    return NextResponse.json(likedPosts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
