import Image from 'next/image';

interface VideoItem {
  id: string;
  thumbnail: string;
  duration: string;
  channel: {
    name: string;
    logo: string;
  };
  title: string;
  views: string;
  postedAgo: string;
}

const videoItems: VideoItem[] = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1645544893322-866e16bc22b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '01:05',
    channel: {
      name: 'GiveMeSport',
      logo: 'https://github.com/shadcn.png',
    },
    title: 'Raheem Sterling wins the...',
    views: '25M views',
    postedAgo: '7 days ago',
  },
  {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1645544893322-866e16bc22b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '04:00',
    channel: {
      name: 'Smashing Magazine',
      logo: 'https://github.com/shadcn.png',
    },
    title: 'UI/UX Inspiration April 2019',
    views: '25M views',
    postedAgo: '7 days ago',
  },
  {
    id: '3',
    thumbnail: 'https://images.unsplash.com/photo-1645544893322-866e16bc22b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '06:30',
    channel: {
      name: 'BeinSport',
      logo: 'https://github.com/shadcn.png',
    },
    title: 'UI/UX Inspiration April 2019',
    views: '25M views',
    postedAgo: '7 days ago',
  },
  {
    id: '4',
    thumbnail: 'https://images.unsplash.com/photo-1645544893322-866e16bc22b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '02:30',
    channel: {
      name: 'Warner Bros Entertainment',
      logo: 'https://github.com/shadcn.png',
    },
    title: 'UI/UX Inspiration April 2019',
    views: '25M views',
    postedAgo: '7 days ago',
  },
];

const VideoGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-4">
        {videoItems.map((item) => (
          <div key={item.id} className="relative rounded-lg overflow-hidden shadow-md">
            <div className="relative aspect-video">
              <Image
                src={item.thumbnail}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                {item.duration}
              </div>
            </div>
            <div className="p-3">
              <div className="flex items-center mb-2">
                <Image
                  src={item.channel.logo}
                  alt={item.channel.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="ml-2 text-sm text-blue-500">{item.channel.name}</span>
              </div>
              {item.title && (
                <>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">
                    {item.views} • {item.postedAgo}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;