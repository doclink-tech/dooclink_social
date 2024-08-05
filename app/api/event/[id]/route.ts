// app/api/event/[id].ts

import { NextRequest, NextResponse } from 'next/server';
import Event from '@/lib/models/Event'; // Adjust the import path as necessary
import { connectDB } from '@/lib/database';

export const GET = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const event = await Event.findById(params.id);
    if (event) {
      return NextResponse.json(event);
    } else {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const PUT = async ({ params, req }: { params: { id: string }; req: NextRequest }) => {
  await connectDB();
  const { admins, applicants, address, desc, media, time } = await req.json();

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      params.id,
      { admins, applicants, address, desc, media, time },
      { new: true }
    );

    if (updatedEvent) {
      return NextResponse.json({ message: 'Event updated successfully', event: updatedEvent });
    } else {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const DELETE = async ({ params }: { params: { id: string } }) => {
  await connectDB();

  try {
    const result = await Event.findByIdAndDelete(params.id);

    if (result) {
      return NextResponse.json({ message: 'Event deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Event not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
