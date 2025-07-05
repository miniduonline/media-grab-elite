import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Construction, Mail, Github, Twitter, Instagram, Linkedin, Loader, Code2, Brain, Palette } from 'lucide-react';

const UnderConstruction = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    const welcomeTimer = setTimeout(() => setShowWelcome(false), 4000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const skills = [
    { name: 'Web Developer', icon: Code2, description: 'Building modern web applications', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Enthusiast', icon: Brain, description: 'Exploring artificial intelligence', color: 'from-purple-500 to-pink-500' },
    { name: 'Graphic Designer', icon: Palette, description: 'Creating visual experiences', color: 'from-orange-500 to-red-500' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/miniduonline', username: '@miniduonline' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/miniduonline', username: '@miniduonline' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/miniduonline', username: '@miniduonline' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/miniduonline', username: '@miniduonline' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full animate-pulse blur-xl"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-blue-500/10 rounded-full animate-pulse blur-xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 sm:w-24 sm:h-24 bg-pink-500/10 rounded-full animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="text-center relative z-10 px-4">
          <Loader className="h-8 w-8 sm:h-12 sm:w-12 text-purple-400 animate-spin mx-auto mb-4" />
          <p className="text-white/60 text-base sm:text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-4">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse blur-xl"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full animate-pulse blur-xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-18 h-18 sm:w-36 sm:h-36 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full animate-pulse blur-xl" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Welcome Text Animation */}
        <div className="text-center relative z-10 animate-fade-in">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>W</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>e</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>l</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>c</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>o</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>m</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>e</span>
            </h1>
            <div className="h-1 w-16 sm:w-32 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto animate-pulse"></div>
          </div>
          
          <p className="text-lg sm:text-2xl md:text-3xl text-white/80 animate-fade-in px-4" style={{ animationDelay: '1s' }}>
            To My Digital World
          </p>
          
          <div className="mt-6 sm:mt-8 animate-fade-in" style={{ animationDelay: '2s' }}>
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full animate-pulse blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-18 h-18 sm:w-36 sm:h-36 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full animate-pulse blur-xl" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in relative z-10 w-full">
        
        {/* Main Icon with Enhanced Animation */}
        <div className="relative">
          <div className="relative">
            <Construction className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-purple-400 mx-auto animate-pulse" />
            <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-2xl animate-pulse"></div>
          </div>
          {/* Rotating Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-3 sm:space-y-4 px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Under <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">Construction</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Something amazing is coming soon. My portfolio is being crafted with passion and precision.
          </p>
        </div>

        {/* Coming Soon Message */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-6 md:p-8 max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Portfolio Coming Soon</h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              I'm currently working on creating an amazing portfolio experience. 
              Stay tuned for updates and feel free to connect with me on social media!
            </p>
          </div>
        </Card>

        {/* Enhanced Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-6 text-center hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:rotate-1 relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="mb-3 sm:mb-4 relative">
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto text-white mb-2" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 rounded-full blur-lg animate-pulse`}></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{skill.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Contact Section */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-6 md:p-8 max-w-2xl mx-auto relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's Connect</h2>
            
            {/* Email */}
            <div className="mb-4 sm:mb-6">
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
                onClick={() => window.location.href = 'mailto:hello@minidushashimal.com'}
              >
                <Mail className="mr-2 h-4 w-4" />
                hello@minidushashimal.com
              </Button>
            </div>

            {/* Social Media */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-white/90">Find me on social media</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="sm"
                      className="bg-white/5 border-white/20 text-white hover:bg-white/15 transition-all duration-300 flex flex-col gap-1 h-auto py-2 sm:py-3 hover:scale-105 hover:-rotate-1 text-xs sm:text-sm"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs">{social.username}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        {/* Footer with Website URL */}
        <div className="text-center space-y-2 sm:space-y-3 px-4">
          <div className="text-white/60 text-xs sm:text-sm">
            <p className="animate-pulse">Portfolio launching soon • Stay tuned for updates</p>
          </div>
          <div className="text-white/40 text-xs">
            <p className="font-mono break-all">www.minidushashimal.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;