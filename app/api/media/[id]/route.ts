// app/api/media/[id].ts

import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/database';
import Media from '@/lib/models/Media';

export const GET = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const mediaFile = await Media.findById(params.id);
    if (mediaFile) {
      return NextResponse.json(mediaFile);
    } else {
      return NextResponse.json({ message: 'Media file not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const PUT = async ({ params, req }: { params: { id: string }; req: NextRequest }) => {
  await connectDB();
  const { uploadedBy, media, accessibleBy, type, views } = await req.json();

  try {
    const updatedMediaFile = await Media.findByIdAndUpdate(
      params.id,
      { uploadedBy, media, accessibleBy, type, views },
      { new: true }
    );

    if (updatedMediaFile) {
      return NextResponse.json({ message: 'Media file updated successfully', mediaFile: updatedMediaFile });
    } else {
      return NextResponse.json({ message: 'Media file not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const DELETE = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const result = await Media.findByIdAndDelete(params.id);

    if (result) {
      return NextResponse.json({ message: 'Media file deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Media file not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
