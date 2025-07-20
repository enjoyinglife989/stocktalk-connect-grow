import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Zap, 
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const AuthSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "안전한 로그인",
      description: "구글, 애플 소셜 로그인으로 간편하고 안전하게"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "맞춤형 프로필",
      description: "관심 종목과 투자 스타일을 설정하여 개인화된 경험"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "실시간 알림",
      description: "팔로우한 사용자의 활동과 댓글 알림을 즉시 받아보세요"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "커뮤니티 혜택",
      description: "활동에 따른 뱃지와 명예의 전당 등 다양한 보상"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Supabase 통합 필요
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            지금 시작하세요
          </h2>
          <p className="text-xl text-foreground/80">
            스톡톡에서 투자 여정을 함께할 동료들을 만나보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:shadow-card transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col justify-center">
            <Card className="p-8 bg-gradient-dreamy text-center border-0 shadow-dreamy">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  1,000+ 투자자들이
                </h3>
                <p className="text-primary-foreground/90">
                  이미 스톡톡에서 소통하고 있습니다
                </p>
              </div>

              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">이메일 인증으로 간편 가입</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">구글, 애플 소셜 로그인 지원</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">맞춤형 투자 피드 제공</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30"
                  disabled
                >
                  Supabase 연결 후 이용 가능
                </Button>
                <p className="text-xs text-primary-foreground/70">
                  * 인증 기능을 위해 Supabase 통합이 필요합니다
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Info Notice */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-6 bg-muted/50 border-accent/20">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">개발자 안내</h4>
                <p className="text-foreground/80 mb-3">
                  인증 시스템 구현을 위해 Supabase 통합이 필요합니다. 
                  상단의 Supabase 버튼을 클릭하여 연결하세요.
                </p>
                <Button variant="outline" size="sm" className="group">
                  Supabase 통합 가이드
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};