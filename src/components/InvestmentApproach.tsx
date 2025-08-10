
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface InvestmentApproachProps {
  className?: string;
}

const InvestmentApproach: React.FC<InvestmentApproachProps> = ({ className }) => {
  const investmentTiers = [
    {
      title: "Quỹ tăng tốc Pre-Seed",
      description: "Vé €30K–€150K, đội ngũ tham gia chương trình tăng tốc 16 tuần tập trung xác thực và tạo đà tăng trưởng ban đầu."
    },
    {
      title: "Quỹ Seed",
      description: "Đầu tư €200K–€400K vào 15+ startup để hỗ trợ mở rộng, thâm nhập thị trường và phát triển đội ngũ, có vốn tiếp tục (follow-on)."
    }
  ];

  return (
    <section id="investment" className={cn('py-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Chiến lược đầu tư</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Chúng tôi đầu tư không giới hạn ngành tại giai đoạn pre-seed và seed cho các đội ngũ bị bỏ qua: đa dạng giới, nhà nghiên cứu, chủ doanh nghiệp, và chuyên gia doanh nghiệp chuyển sang khởi nghiệp công nghệ. Luận điểm: tiềm năng lớn đang bị bỏ quên sẽ tạo nên tác động cao nếu được hỗ trợ sớm. Chúng tôi tin vào chuyên môn lĩnh vực và lợi thế cạnh tranh không công bằng mà họ sở hữu.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {investmentTiers.map((tier, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border-0 shadow-sm h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4 font-serif">{tier.title}</h3>
                  <p className="text-muted-foreground mb-4">{tier.description}</p>
                  {index === 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium">Chương trình tăng tốc 16 tuần</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium">Có vốn đầu tư tiếp theo</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentApproach;
