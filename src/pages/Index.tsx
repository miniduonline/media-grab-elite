
import { useState } from 'react';
import Header from '@/components/Header';
import URLInput from '@/components/URLInput';
import PlatformCards from '@/components/PlatformCards';
import QualitySelector from '@/components/QualitySelector';
import DownloadProgress from '@/components/DownloadProgress';
import FeatureHighlights from '@/components/FeatureHighlights';

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

const Index = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [currentPlatform, setCurrentPlatform] = useState<string>('');
  const [showQualitySelector, setShowQualitySelector] = useState(false);
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);

  const handleUrlSubmit = (url: string, platform: string) => {
    setCurrentUrl(url);
    setCurrentPlatform(platform);
    setShowQualitySelector(true);
    console.log('URL submitted:', url, 'Platform:', platform);
  };

  const handleDownloadStart = (quality: string, format: string, type: 'video' | 'audio') => {
    const newDownload: DownloadItem = {
      id: Date.now().toString(),
      url: currentUrl,
      platform: currentPlatform,
      title: `${currentPlatform.charAt(0).toUpperCase() + currentPlatform.slice(1)} Content`,
      progress: 0,
      status: 'processing',
      quality: quality,
      type: type,
      fileSize: type === 'video' ? '~150MB' : '~5MB'
    };

    setDownloads(prev => [...prev, newDownload]);
    setShowQualitySelector(false);

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloads(prev => 
        prev.map(download => {
          if (download.id === newDownload.id) {
            const newProgress = Math.min(download.progress + Math.random() * 15, 100);
            const newStatus = newProgress >= 100 ? 'completed' : 'downloading';
            return { ...download, progress: newProgress, status: newStatus };
          }
          return download;
        })
      );
    }, 500);

    // Clear interval when download completes
    setTimeout(() => {
      clearInterval(interval);
      setDownloads(prev =>
        prev.map(download =>
          download.id === newDownload.id
            ? { ...download, progress: 100, status: 'completed' }
            : download
        )
      );
    }, 5000);

    console.log('Download started:', quality, format, type);
  };

  const handleRemoveDownload = (id: string) => {
    setDownloads(prev => prev.filter(download => download.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Download from{' '}
              <span className="gradient-text">Social Media</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, free, and secure social media content downloader. 
              Support for YouTube, TikTok, and Instagram with multiple quality options.
            </p>
          </div>
        </section>

        {/* URL Input Section */}
        <section className="max-w-2xl mx-auto">
          <URLInput onUrlSubmit={handleUrlSubmit} />
        </section>

        {/* Quality Selector */}
        {showQualitySelector && (
          <section className="max-w-2xl mx-auto">
            <QualitySelector
              platform={currentPlatform}
              url={currentUrl}
              onDownloadStart={handleDownloadStart}
            />
          </section>
        )}

        {/* Download Progress */}
        {downloads.length > 0 && (
          <section className="max-w-4xl mx-auto">
            <DownloadProgress
              activeDownloads={downloads}
              onRemoveDownload={handleRemoveDownload}
            />
          </section>
        )}

        {/* Platform Cards */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 gradient-text">Supported Platforms</h2>
            <p className="text-muted-foreground">
              Download from the most popular social media platforms
            </p>
          </div>
          <PlatformCards />
        </section>

        {/* Feature Highlights */}
        <section className="max-w-6xl mx-auto">
          <FeatureHighlights />
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 mt-16 pt-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              © 2024 SocialDownloader. Download responsibly and respect content creators.
            </p>
            <p className="text-sm">
              This tool is for personal use only. Please respect copyright laws and platform terms of service.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
