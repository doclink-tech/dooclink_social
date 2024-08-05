// app/api/connection/route.ts

import { NextResponse } from 'next/server';
import Connection from '@/lib/models/Connection';
import { connectDB } from '@/lib/database';

export const GET = async (req: Request) => {
  await connectDB();

  const { userId } = await req.json();

  try {
    // Aggregation pipeline for finding following users
    const followingPipeline = [
      { $match: { toUser: userId } },
      { $group: { _id: '$fromUser' } }
    ];

    // Aggregation pipeline for finding follower users
    const followerPipeline = [
      { $match: { fromUser: userId } },
      { $group: { _id: '$toUser' } }
    ];

    // Aggregation pipeline for finding requested connections
    const requestedConnectionsPipeline = [
      { $match: { fromUser: userId, status: 'requested' } },
      { $group: { _id: '$toUser' } }
    ];

    // Execute the aggregation pipelines
    const followingUsers = await Connection.aggregate(followingPipeline);
    const followerUsers = await Connection.aggregate(followerPipeline);
    const requestedConnections = await Connection.aggregate(requestedConnectionsPipeline);

    // Combine the results into a single response object
    const response = {
      following: followingUsers.map(user => user._id),
      followers: followerUsers.map(user => user._id),
      requested: requestedConnections.map(conn => conn._id)
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
