// app/api/community/index.ts

import { NextRequest, NextResponse } from 'next/server';
import Community from '@/lib/models/Community'; // Adjust the import path as necessary
import { connectDB } from '@/lib/database';

export const POST = async (req: NextRequest) => {
  await connectDB();

  try {
    const communityData = await req.json();
    const newCommunity = new Community(communityData);

    await newCommunity.save();

    return NextResponse.json(newCommunity);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const GET = async () => {
  await connectDB();

  try {
    const communities = await Community.find({});
    return NextResponse.json(communities);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
