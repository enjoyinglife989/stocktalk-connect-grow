import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users, TrendingUp, Star, Heart, Bookmark } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary/20 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="h-4 w-4 text-accent animate-sparkle" />
            <span className="text-sm text-foreground/80">주식 투자자들의 소통 공간</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              주식 이야기, 함께 나누세요
            </span>
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            20-40대 직장인과 프리랜서를 위한 주식 투자 커뮤니티. 
            정보 공유부터 전문적인 조언까지, 함께 성장하는 투자 여정을 시작하세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button variant="hero" size="lg" className="group">
              커뮤니티 시작하기
              <MessageSquare className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              기능 둘러보기
            </Button>
          </div>
        </div>

        {/* Feature preview cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-card transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">자유로운 토론</h3>
            </div>
            <p className="text-foreground/70">
              주제별 게시판에서 국내외 주식, ETF 등 다양한 투자 이야기를 나누세요.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-foreground/60">
              <Heart className="h-4 w-4" />
              <span>125개 게시글</span>
              <Users className="h-4 w-4 ml-2" />
              <span>1.2k 참여자</span>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-card transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold">실시간 트렌드</h3>
            </div>
            <p className="text-foreground/70">
              인기글과 핫한 토픽을 통해 시장의 관심사를 빠르게 파악하세요.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-foreground/60">
              <TrendingUp className="h-4 w-4" />
              <span>오늘의 인기 주제</span>
              <Bookmark className="h-4 w-4 ml-2" />
              <span>북마크 가능</span>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:shadow-card transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold">전문가 네트워킹</h3>
            </div>
            <p className="text-foreground/70">
              관심 있는 투자자를 팔로우하고 전문적인 인사이트를 받아보세요.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-foreground/60">
              <Users className="h-4 w-4" />
              <span>팔로우 시스템</span>
              <Star className="h-4 w-4 ml-2" />
              <span>전문가 인증</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};