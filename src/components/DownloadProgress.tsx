
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, FileVideo, Music, Image, X } from 'lucide-react';

interface DownloadItem {
  id: string;
  url: string;
  platform: string;
  title: string;
  thumbnail?: string;
  progress: number;
  status: 'processing' | 'downloading' | 'completed' | 'error';
  fileSize?: string;
  quality?: string;
  type: 'video' | 'audio' | 'image';
}

const DownloadProgress = ({ 
  activeDownloads, 
  onRemoveDownload 
}: { 
  activeDownloads: DownloadItem[];
  onRemoveDownload: (id: string) => void;
}) => {
  const [downloads, setDownloads] = useState<DownloadItem[]>(activeDownloads);

  useEffect(() => {
    setDownloads(activeDownloads);
  }, [activeDownloads]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      case 'downloading': return 'bg-blue-500';
      default: return 'bg-yellow-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'audio': return Music;
      case 'image': return Image;
      default: return FileVideo;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'youtube': return 'bg-red-500';
      case 'tiktok': return 'bg-gray-800';
      case 'instagram': return 'bg-pink-500';
      default: return 'bg-primary';
    }
  };

  if (downloads.length === 0) {
    return null;
  }

  return (
    <Card className="p-6 glass-effect animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Download Progress</h3>
        <Badge variant="secondary">{downloads.length} active</Badge>
      </div>

      <div className="space-y-4">
        {downloads.map((download) => {
          const TypeIcon = getTypeIcon(download.type);
          
          return (
            <div
              key={download.id}
              className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50"
            >
              <div className="flex-shrink-0">
                {download.thumbnail ? (
                  <img
                    src={download.thumbnail}
                    alt={download.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-lg ${getPlatformColor(download.platform)} flex items-center justify-center`}>
                    <TypeIcon className="h-6 w-6 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium truncate">{download.title}</h4>
                  <Badge variant="outline" className="text-xs capitalize">
                    {download.platform}
                  </Badge>
                  {download.quality && (
                    <Badge variant="secondary" className="text-xs">
                      {download.quality}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Progress 
                      value={download.progress} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span className="capitalize">{download.status}</span>
                      <span>{download.fileSize || '-- MB'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(download.status)} animate-pulse-glow`} />
                    
                    {download.status === 'completed' ? (
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Save
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onRemoveDownload(download.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default DownloadProgress;
