import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WaitingList from "@/components/WaitingList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WaitingList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
