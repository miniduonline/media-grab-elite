
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Construction, Mail, Github, Twitter, Instagram, Linkedin, Loader } from 'lucide-react';

const UnderConstruction = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'Web Developer', icon: '💻', description: 'Building modern web applications' },
    { name: 'AI Enthusiast', icon: '🤖', description: 'Exploring artificial intelligence' },
    { name: 'Graphic Designer', icon: '🎨', description: 'Creating visual experiences' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/miniduonline', username: '@miniduonline' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/miniduonline', username: '@miniduonline' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/miniduonline', username: '@miniduonline' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/miniduonline', username: '@miniduonline' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-12 w-12 text-purple-400 animate-spin mx-auto mb-4" />
          <p className="text-white/60 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        
        {/* Main Icon */}
        <div className="relative">
          <Construction className="h-24 w-24 text-purple-400 mx-auto animate-pulse" />
          <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-pulse" />
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Under <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Construction</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Something amazing is coming soon. My portfolio is being crafted with passion and precision.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-white/70 text-sm">{skill.description}</p>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
          
          {/* Email */}
          <div className="mb-6">
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => window.location.href = 'mailto:hello@minidushashimal.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              hello@minidushashimal.com
            </Button>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white/90">Find me on social media</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className="bg-white/5 border-white/20 text-white hover:bg-white/15 transition-all duration-300 flex flex-col gap-1 h-auto py-3"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-xs">{social.username}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-white/60 text-sm">
          <p>Portfolio launching soon • Stay tuned for updates</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
