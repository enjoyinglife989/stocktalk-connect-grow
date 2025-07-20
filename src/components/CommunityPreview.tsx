import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Heart, 
  Bookmark, 
  TrendingUp, 
  Clock,
  User,
  ThumbsUp,
  Eye
} from "lucide-react";

export const CommunityPreview = () => {
  const categories = [
    { name: "국내주식", count: 245, color: "bg-primary/10 text-primary" },
    { name: "해외주식", count: 189, color: "bg-accent/10 text-accent" },
    { name: "ETF", count: 76, color: "bg-secondary/10 text-secondary" },
    { name: "분석/리뷰", count: 134, color: "bg-primary/10 text-primary" },
    { name: "초보질문", count: 98, color: "bg-accent/10 text-accent" }
  ];

  const hotPosts = [
    {
      id: 1,
      title: "테슬라 주가 급등, 이번엔 진짜일까요?",
      author: "투자고수김",
      category: "해외주식",
      likes: 24,
      comments: 18,
      views: 156,
      time: "2시간 전",
      isHot: true
    },
    {
      id: 2,
      title: "삼성전자 배당 관련 질문드립니다",
      author: "주린이수진",
      category: "초보질문",
      likes: 12,
      comments: 8,
      views: 89,
      time: "4시간 전",
      isHot: false
    },
    {
      id: 3,
      title: "2024년 4분기 반도체 전망 분석",
      author: "애널리스트박",
      category: "분석/리뷰",
      likes: 45,
      comments: 23,
      views: 234,
      time: "6시간 전",
      isHot: true
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            활발한 커뮤니티
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            다양한 주제의 게시판에서 실시간으로 소통하는 투자자들의 이야기
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-card shadow-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                인기 카테고리
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={category.name} 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <Badge className={`${category.color} group-hover:scale-105 transition-transform`}>
                        {category.name}
                      </Badge>
                    </div>
                    <div className="text-sm text-foreground/60">
                      {category.count}개
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                모든 카테고리 보기
              </Button>
            </Card>
          </div>

          {/* Hot Posts */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-card shadow-card">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                실시간 인기글
              </h3>
              <div className="space-y-4">
                {hotPosts.map((post) => (
                  <div 
                    key={post.id}
                    className="p-4 rounded-lg border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {post.isHot && (
                          <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                            HOT
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-foreground/60">
                        <Clock className="h-3 w-3" />
                        {post.time}
                      </div>
                    </div>

                    <h4 className="font-medium mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {post.author[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-foreground/80">{post.author}</span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-foreground/60">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button variant="dreamy" className="flex-1">
                  커뮤니티 참여하기
                </Button>
                <Button variant="outline">
                  더 많은 글 보기
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};