import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Users, Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="relative">
              <TrendingUp className="h-8 w-8 text-primary" />
              <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-sparkle" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              스톡톡
            </h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#community" className="text-foreground/80 hover:text-primary transition-colors">
            커뮤니티
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
            기능소개
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            소개
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            로그인
          </Button>
          <Button variant="hero" size="sm">
            시작하기
          </Button>
        </div>
      </div>
    </header>
  );
};