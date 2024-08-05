// app/api/post/route.ts

import { NextResponse } from 'next/server';
import Post from '@/lib/models/Post';
import { connectDB } from '@/lib/database';

export const GET = async () => {
  await connectDB();

  try {
    const posts = await Post.find({});
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const POST = async (req: Request) => {
  await connectDB();

  try {
    const { title, content, author } = await req.json();

    const newPost = new Post({
      title,
      content,
      author,
    });

    await newPost.save();

    return NextResponse.json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

{/**
  TODO:
    check post is alredy liked or saved  
*/}
