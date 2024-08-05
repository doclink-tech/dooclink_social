// app/api/event/index.ts

import { NextRequest, NextResponse } from 'next/server';
import Event from '@/lib/models/Event'; // Adjust the import path as necessary
import { connectDB } from '@/lib/database';

export const POST = async (req: NextRequest) => {
  await connectDB();

  try {
    const eventData = await req.json();
    const newEvent = new Event(eventData);

    await newEvent.save();

    return NextResponse.json(newEvent);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const GET = async () => {
  await connectDB();

  try {
    const events = await Event.find({});
    return NextResponse.json(events);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
