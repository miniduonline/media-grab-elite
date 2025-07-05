import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Download } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="relative z-10 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl">
            <Download className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">SocialDownloader</h1>
            <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Download from YouTube, TikTok & Instagram</p>
            <p className="text-xs text-muted-foreground sm:hidden">Social Media Downloader</p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="glass-effect hover:bg-primary/10 h-8 w-8 sm:h-10 sm:w-10"
        >
          {isDark ? <Sun className="h-3 w-3 sm:h-4 sm:w-4" /> : <Moon className="h-3 w-3 sm:h-4 sm:w-4" />}
        </Button>
      </div>
    </header>
  );
};

export default Header;