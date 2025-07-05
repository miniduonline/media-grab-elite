
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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
            <Download className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold gradient-text">SocialDownloader</h1>
            <p className="text-sm text-muted-foreground">Download from YouTube, TikTok & Instagram</p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="glass-effect hover:bg-primary/10"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
