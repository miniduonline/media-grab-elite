
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Download, Link2, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const URLInput = ({ onUrlSubmit }: { onUrlSubmit: (url: string, platform: string) => void }) => {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const detectPlatform = (url: string): string => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('tiktok.com')) return 'tiktok';
    if (url.includes('instagram.com')) return 'instagram';
    return 'unknown';
  };

  const validateUrl = (url: string): boolean => {
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlPattern.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL",
        variant: "destructive"
      });
      return;
    }

    if (!validateUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL",
        variant: "destructive"
      });
      return;
    }

    const platform = detectPlatform(url);
    if (platform === 'unknown') {
      toast({
        title: "Unsupported Platform",
        description: "We currently support YouTube, TikTok, and Instagram",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      onUrlSubmit(url, platform);
      setIsProcessing(false);
      toast({
        title: "URL Processed",
        description: `${platform.charAt(0).toUpperCase() + platform.slice(1)} content detected!`
      });
    }, 1500);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedText = e.dataTransfer.getData('text/plain');
    if (droppedText) {
      setUrl(droppedText);
    }
  };

  return (
    <Card className="p-8 glass-effect animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2 gradient-text">Paste Your Link</h2>
        <p className="text-muted-foreground">
          Support for YouTube, TikTok, and Instagram content
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div
          className={`relative transition-all duration-300 ${
            dragActive ? 'scale-105 ring-2 ring-primary/50' : ''
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Input
            type="url"
            placeholder="Paste your YouTube, TikTok, or Instagram URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-14 pl-12 text-lg bg-background/50 border-2 focus:border-primary/50 transition-all"
            disabled={isProcessing}
          />
          <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              Download Content
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        Drag and drop URLs directly into the input field above
      </div>
    </Card>
  );
};

export default URLInput;
