// app/api/community/[id].ts

import { NextRequest, NextResponse } from 'next/server';
import Community from '@/lib/models/Community'; // Adjust the import path as necessary
import { connectDB } from '@/lib/database';

export const GET = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const community = await Community.findById(params.id);
    if (community) {
      return NextResponse.json(community);
    } else {
      return NextResponse.json({ message: 'Community not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const PUT = async ({ params, req }: { params: { id: string }; req: NextRequest }) => {
  await connectDB();
  const { name, description, founder, members, createdAt, updatedAt } = await req.json();

  try {
    const updatedCommunity = await Community.findByIdAndUpdate(
      params.id,
      { name, description, founder, members, createdAt, updatedAt },
      { new: true }
    );

    if (updatedCommunity) {
      return NextResponse.json({ message: 'Community updated successfully', community: updatedCommunity });
    } else {
      return NextResponse.json({ message: 'Community not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const DELETE = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const result = await Community.findByIdAndDelete(params.id);

    if (result) {
      return NextResponse.json({ message: 'Community deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Community not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
