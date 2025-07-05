
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Youtube, 
  Music, 
  Camera, 
  Zap, 
  Shield, 
  Smartphone, 
  Clock 
} from 'lucide-react';

const FeatureHighlights = () => {
  const features = [
    {
      icon: Download,
      title: 'Multiple Formats',
      description: 'Download in MP4, MP3, AVI and more formats',
      badge: 'Popular'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized processing for maximum download speed',
      badge: 'Fast'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'No registration required, privacy protected',
      badge: 'Secure'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices and browsers',
      badge: 'Mobile'
    },
    {
      icon: Youtube,
      title: 'YouTube Support',
      description: 'Download videos up to 4K quality with subtitles',
      badge: '4K'
    },
    {
      icon: Music,
      title: 'TikTok Downloads',
      description: 'Get TikTok videos with or without watermarks',
      badge: 'No Watermark'
    },
    {
      icon: Camera,
      title: 'Instagram Content',
      description: 'Download posts, stories, reels and IGTV',
      badge: 'Stories'
    },
    {
      icon: Clock,
      title: 'Batch Processing',
      description: 'Download multiple videos simultaneously',
      badge: 'Batch'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 gradient-text">Powerful Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to download content from your favorite social media platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card
              key={feature.title}
              className="p-4 glass-effect hover:bg-card/80 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20">
                  <IconComponent className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureHighlights;
