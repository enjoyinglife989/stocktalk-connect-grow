import { TrendingUp, MessageSquare, Users, Mail, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                스톡톡
              </span>
            </div>
            <p className="text-foreground/70 mb-4">
              주식 투자자들을 위한 커뮤니티 플랫폼. 함께 성장하는 투자 여정을 시작하세요.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              커뮤니티
            </h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">국내주식</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">해외주식</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ETF</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">분석/리뷰</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">초보질문</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-4 w-4" />
              기능
            </h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">실시간 토론</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">팔로우 시스템</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">인기글 추천</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">북마크</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">알림 서비스</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              지원
            </h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">이용가이드</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">투자 용어사전</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">문의하기</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-foreground/60">
          <p>&copy; 2024 스톡톡(StockTalk). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};