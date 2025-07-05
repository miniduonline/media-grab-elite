import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Music, Camera, Download } from 'lucide-react';

const PlatformCards = () => {
  const platforms = [
    {
      name: 'YouTube',
      icon: Youtube,
      description: 'Download videos in HD, 4K quality or extract audio',
      features: ['Multiple quality options', 'Audio extraction', 'Subtitle support'],
      gradient: 'from-red-500 to-red-600',
      bgClass: 'youtube-card'
    },
    {
      name: 'TikTok',
      icon: Music,
      description: 'Download TikTok videos with or without watermarks',
      features: ['No watermark option', 'Original quality', 'Fast processing'],
      gradient: 'from-gray-800 to-black',
      bgClass: 'tiktok-card'
    },
    {
      name: 'Instagram',
      icon: Camera,
      description: 'Download posts, stories, reels and IGTV content',
      features: ['Stories & Reels', 'Photo posts', 'IGTV videos'],
      gradient: 'from-pink-500 to-purple-600',
      bgClass: 'instagram-card'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-slide-up">
      {platforms.map((platform, index) => {
        const IconComponent = platform.icon;
        return (
          <Card
            key={platform.name}
            className={`platform-card bg-card/50 ${platform.bgClass} animate-fade-in`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative z-10 p-4 sm:p-6">
              <div className={`inline-flex p-2 sm:p-3 rounded-xl bg-gradient-to-r ${platform.gradient} mb-3 sm:mb-4`}>
                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-2">{platform.name}</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm leading-relaxed">
                {platform.description}
              </p>
              
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {platform.features.map((feature, idx) => (
                  <li key={idx} className="text-xs sm:text-sm flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.gradient}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                variant="outline"
                className="w-full hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base"
              >
                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Start Download
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default PlatformCards;