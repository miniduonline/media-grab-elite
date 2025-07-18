import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileVideo, Music, Download, Info } from 'lucide-react';

interface QualityOption {
  quality: string;
  format: string;
  size: string;
  type: 'video' | 'audio';
}

const QualitySelector = ({ 
  platform, 
  url, 
  onDownloadStart 
}: { 
  platform: string;
  url: string;
  onDownloadStart: (quality: string, format: string, type: 'video' | 'audio') => void;
}) => {
  const [selectedQuality, setSelectedQuality] = useState<QualityOption | null>(null);

  // Mock quality options based on platform
  const getQualityOptions = (platform: string): QualityOption[] => {
    const baseOptions = {
      youtube: [
        { quality: '4K', format: 'MP4', size: '~500MB', type: 'video' as const },
        { quality: '1080p', format: 'MP4', size: '~200MB', type: 'video' as const },
        { quality: '720p', format: 'MP4', size: '~100MB', type: 'video' as const },
        { quality: '480p', format: 'MP4', size: '~50MB', type: 'video' as const },
        { quality: 'High Quality', format: 'MP3', size: '~8MB', type: 'audio' as const },
        { quality: 'Medium Quality', format: 'MP3', size: '~5MB', type: 'audio' as const },
      ],
      tiktok: [
        { quality: 'Original', format: 'MP4', size: '~15MB', type: 'video' as const },
        { quality: 'No Watermark', format: 'MP4', size: '~15MB', type: 'video' as const },
        { quality: 'Audio Only', format: 'MP3', size: '~2MB', type: 'audio' as const },
      ],
      instagram: [
        { quality: 'Original', format: 'MP4', size: '~25MB', type: 'video' as const },
        { quality: 'High Quality', format: 'JPG', size: '~2MB', type: 'video' as const },
        { quality: 'Audio Only', format: 'MP3', size: '~3MB', type: 'audio' as const },
      ]
    };

    return baseOptions[platform as keyof typeof baseOptions] || [];
  };

  const qualityOptions = getQualityOptions(platform);
  const videoOptions = qualityOptions.filter(opt => opt.type === 'video');
  const audioOptions = qualityOptions.filter(opt => opt.type === 'audio');

  const handleDownload = () => {
    if (selectedQuality) {
      onDownloadStart(selectedQuality.quality, selectedQuality.format, selectedQuality.type);
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'youtube': return 'from-red-500 to-red-600';
      case 'tiktok': return 'from-gray-800 to-black';
      case 'instagram': return 'from-pink-500 to-purple-600';
      default: return 'from-blue-500 to-purple-600';
    }
  };

  return (
    <Card className="p-4 sm:p-6 glass-effect animate-slide-up">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${getPlatformColor(platform)}`}>
          <FileVideo className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold capitalize">{platform} Content Detected</h3>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">{url}</p>
        </div>
      </div>

      <Tabs defaultValue="video" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="video" className="flex items-center gap-1.5 sm:gap-2 text-sm">
            <FileVideo className="h-3 w-3 sm:h-4 sm:w-4" />
            Video
          </TabsTrigger>
          <TabsTrigger value="audio" className="flex items-center gap-1.5 sm:gap-2 text-sm">
            <Music className="h-3 w-3 sm:h-4 sm:w-4" />
            Audio
          </TabsTrigger>
        </TabsList>

        <TabsContent value="video" className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
          {videoOptions.map((option, index) => (
            <div
              key={index}
              className={`p-3 sm:p-4 rounded-lg border cursor-pointer transition-all hover:border-primary/50 ${
                selectedQuality === option ? 'border-primary bg-primary/5' : 'border-border'
              }`}
              onClick={() => setSelectedQuality(option)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Badge variant="secondary" className="text-xs">{option.quality}</Badge>
                    <Badge variant="outline" className="text-xs">{option.format}</Badge>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{option.size}</div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="audio" className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
          {audioOptions.map((option, index) => (
            <div
              key={index}
              className={`p-3 sm:p-4 rounded-lg border cursor-pointer transition-all hover:border-primary/50 ${
                selectedQuality === option ? 'border-primary bg-primary/5' : 'border-border'
              }`}
              onClick={() => setSelectedQuality(option)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Badge variant="secondary" className="text-xs">{option.quality}</Badge>
                    <Badge variant="outline" className="text-xs">{option.format}</Badge>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{option.size}</div>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
        <Button
          onClick={handleDownload}
          disabled={!selectedQuality}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base"
        >
          <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Download {selectedQuality?.quality || ''}
        </Button>
      </div>

      <div className="flex items-center gap-2 mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
        <Info className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
        <p className="text-xs sm:text-sm text-blue-600 leading-relaxed">
          File sizes are estimates and may vary depending on content duration and quality.
        </p>
      </div>
    </Card>
  );
};

export default QualitySelector;