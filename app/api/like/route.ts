// app/api/like/route.ts

import { NextResponse } from 'next/server';
import Post from '@/lib/models/Post';
import { connectDB } from '@/lib/database';

export const POST = async (req: Request) => {
  await connectDB();

  try {
    const { userId, postId } = await req.json();

    // Find the post by ID
    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    // Check if the user has already liked the post
    const index = post.likes.indexOf(userId);

    if (index > -1) {
      // User has already liked the post, so we remove the like
      post.likes.splice(index, 1);
      await post.save();
      return NextResponse.json({ message: 'Unlike successful' });
    } else {
      // User hasn't liked the post yet, so we add the like
      post.likes.push(userId);
      await post.save();
      return NextResponse.json({ message: 'Like successful' });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
