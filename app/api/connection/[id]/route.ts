// app/api/connection/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Connection from '@/lib/models/Connection'; // Ensure this imports your Connection model
import { connectDB } from '@/lib/database';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const connection = await Connection.findById(params.id);
    if (connection) {
      return NextResponse.json(connection);
    } else {
      return NextResponse.json({ message: 'Connection not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();
  const { fromUser, toUser, status } = await req.json();

  try {
    const updatedConnection = await Connection.findByIdAndUpdate(
      params.id,
      { fromUser, toUser, status },
      { new: true }
    );

    if (updatedConnection) {
      return NextResponse.json({ message: 'Connection updated successfully', connection: updatedConnection });
    } else {
      return NextResponse.json({ message: 'Connection not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const result = await Connection.findByIdAndDelete(params.id);

    if (result) {
      return NextResponse.json({ message: 'Connection deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Connection not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
