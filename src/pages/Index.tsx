import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CommunityPreview } from "@/components/CommunityPreview";
import { AuthSection } from "@/components/AuthSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CommunityPreview />
        <AuthSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
