import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface FoundersInSearchProps {
  className?: string;
}

const FoundersInSearch: React.FC<FoundersInSearchProps> = ({ className }) => {
  const founderTypes = [
    {
      title: "Nhà sáng lập khó phân loại",
      description: "Những người không dễ xếp vào khuôn mẫu, với nền tảng, thị trường hoặc mô hình kinh doanh khác thường. Chúng tôi chuyên hỗ trợ điều mà người khác bỏ qua."
    },
    {
      title: "Nhà sáng lập lần đầu với kinh nghiệm ngoài công nghệ",
      description: "Lãnh đạo doanh nghiệp, vận hành, chủ doanh nghiệp chuyển mình sang startup, mang theo lợi thế chuyên môn và năng lực thực thi."
    },
    {
      title: "Nhà nghiên cứu & học thuật",
      description: "Các nhà khoa học, học giả với tri thức chuyên sâu và sáng chế IP, muốn thương mại hóa nghiên cứu thông qua khởi nghiệp."
    },
    {
      title: "Đội ngũ đa dạng giới",
      description: "Ủng hộ phụ nữ lãnh đạo và đội ngũ đa giới, mang góc nhìn mới và cách tiếp cận hợp tác để xây dựng công ty đột phá."
    }
  ];

  return (
    <section id="founders" className={cn('py-20 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Những nhà sáng lập chúng tôi hỗ trợ</h2>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {founderTypes.map((type, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border-0 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-3 font-serif">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersInSearch;
