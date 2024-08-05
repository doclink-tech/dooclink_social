// app/api/media/index.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Media from '@/lib/models/Media';

export const POST = async (req: NextRequest) => {
  await connectDB();

  try {
    const mediaData = await req.json();
    const newMediaFile = new Media(mediaData);

    await newMediaFile.save();

    return NextResponse.json(newMediaFile);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const GET = async () => {
  await connectDB();

  try {
    const mediaFiles = await Media.find({});
    return NextResponse.json(mediaFiles);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
