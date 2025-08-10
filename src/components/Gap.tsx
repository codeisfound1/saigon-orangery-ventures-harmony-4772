
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface GapProps {
  className?: string;
}

const Gap: React.FC<GapProps> = ({ className }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [email, setEmail] = useState('');
  
  const messages = [
    "Danh sách 50 quỹ VC giai đoạn sớm hoạt động tại Baltic",
    "Các nữ sáng lập Baltic gọi vốn năm 2024",
    "Các startup AI tại Baltic đã gọi vốn trong năm nay"
  ];
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Start fading out
      setOpacity(0);
      
      // Change message after fade out
      setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
        // Start fading in
        setOpacity(1);
      }, 1000);
    }, 4000); // Total time for each message
    
    return () => clearInterval(interval);
  }, [messages.length]);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Đăng ký email:', email);
      // Here you would typically send this to a backend
      alert(`Cảm ơn bạn đã đăng ký với ${email}!`);
      setEmail('');
    }
  };

  const statistics = [
    {
      title: "Tăng trưởng trì trệ",
      description: "Số vòng gọi vốn giai đoạn sớm tại Baltic không tăng kể từ 2021"
    },
    {
      title: "Hệ sinh thái hạn chế",
      description: "Tổng số startup ở Lithuania gần như đi ngang hơn 5 năm ~ 800"
    },
    {
      title: "Bất bình đẳng vốn",
      description: "90% vốn VC vẫn chảy vào nhà sáng lập lặp lại và nền tảng công nghệ truyền thống"
    }
  ];

  return (
    <section id="gap" className={cn('py-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Khoảng trống</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl text-center mb-8">
              Nguồn nhà sáng lập hạn hẹp – bỏ lỡ cơ hội, tăng trưởng chậm
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {statistics.map((stat, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border-0 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-3 font-serif">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        
        <div className="relative max-w-full mx-auto">
          <FadeIn delay={200}>
            <div className="relative">
              <div className="w-full h-[500px] overflow-hidden">
                <img 
                  src="/lovable-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png" 
                  alt="Nhà kính đẹp với cây cọ và cây xanh" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Centered newsletter box overlaid on the image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md max-w-md w-full mx-4">
                  <h3 className="text-2xl font-serif mb-6 text-center">Đăng ký nhận cập nhật</h3>
                  
                  <div className="flex justify-center mb-6">
                    <Button 
                      variant="outline" 
                      className="bg-orangery-500/10 text-orangery-700 border-orangery-200 hover:bg-orangery-500/20 min-h-[3.5rem] min-w-[220px] md:min-w-[280px]"
                    >
                      <span 
                        className="transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: opacity }}
                      >
                        {messages[messageIndex]}
                      </span>
                    </Button>
                  </div>
                  
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      type="email" 
                      placeholder="Nhập email của bạn" 
                      className="text-gray-800 bg-gray-50/80 border-gray-200 focus-visible:ring-gray-500" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-gray-600 hover:bg-gray-700 text-white"
                    >
                      Đăng ký
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Gap;
