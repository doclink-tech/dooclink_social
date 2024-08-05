import { NextRequest, NextResponse } from 'next/server';
import User from '@/lib/models/User'; 
import { connectDB } from '@/lib/database';

// Handler to GET a single user by ID
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectDB();

  try {
    const user = await User.findById(params.id);
    if (user) {
      return NextResponse.json({ user });
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

// Handler to PUT (update) a single user by ID
export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectDB();
  const { username, email } = await req.json();

  try {
    const updatedUser = await User.findByIdAndUpdate(
      params.id,
      { username, email }, // Note: Passwords should be hashed before saving
      { new: true } // Return the updated document
    );

    if (updatedUser) {
      return NextResponse.json({ message: 'User updated successfully', user: updatedUser });
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

// Handler to DELETE a single user by ID
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectDB();

  try {
    const result = await User.findByIdAndDelete(params.id);

    if (result) {
      return NextResponse.json({ message: 'User deleted successfully' });
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
