import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, TrendingUp, Users, Sparkles, User, LogOut, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user, signOut, loading } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <TrendingUp className="h-8 w-8 text-primary" />
            <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-sparkle" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            스톡톡
          </h1>
        </Link>

        {/* Navigation */}
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

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {loading ? (
            <div className="w-8 h-8 animate-pulse bg-muted rounded-full" />
          ) : user ? (
            <>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                게시글 작성
              </Button>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={signOut}
                  className="text-foreground/70 hover:text-foreground"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  로그아웃
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
                <Link to="/auth">로그인</Link>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/auth">시작하기</Link>
              </Button>
            </>
          )}
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};