// // app/api/post/[id]/saved/route.ts

// import { NextResponse } from 'next/server';
// import User from '@/lib/models/User';
// import Post from '@/lib/models/Post';
// import { connectDB } from '@/lib/database';

// export const PATCH = async (req: Request, { params }: { params: { id: string } }) => {
//   await connectDB();

//   try {
//     // const { userId } = req.headers.authorization?.split(' ')?.slice(-1)[0]; // Extract token from Authorization header
//     const postId = params.id;

//     // Find the user and post
//     const user = await User.findById(userId);
//     const post = await Post.findById(postId);

//     if (!user || !post) {
//       return NextResponse.json({ message: 'User or post not found' }, { status: 404 });
//     }

//     // Toggle the saved state
//     if (user.savedPosts.includes(post._id)) {
//       // Remove post from savedPosts if it's already saved
//       user.savedPosts.pull(post._id);
//     } else {
//       // Add post to savedPosts if it's not saved
//       user.savedPosts.push(post._id);
//     }

//     await user.save();

//     return NextResponse.json({ message: 'Post saved state updated' });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.error();
//   }
// };
