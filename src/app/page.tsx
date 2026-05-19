import HeroSection from "@/components/sections/HeroSection";
import CharacterStrip from "@/components/sections/CharacterStrip";
import ComicSpotlight from "@/components/sections/ComicSpotlight";
import ComicBooksSection from "@/components/sections/ComicBooksSection";
import ShopPreview from "@/components/sections/ShopPreview";
import FilmsInitiativeSection from "@/components/sections/FilmsInitiativeSection";
import NGOSection from "@/components/sections/NGOSection";
import AcademySection from "@/components/sections/AcademySection";
import NewsPreview from "@/components/sections/NewsPreview";
import MasterClassSection from "@/components/sections/MasterClassSection";
import CommunityStrip from "@/components/sections/CommunityStrip";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CharacterStrip />
      <ComicSpotlight />
      <ComicBooksSection />
      <ShopPreview />
      <div className="society-block">
        <FilmsInitiativeSection />
        <NGOSection />
        <AcademySection />
      </div>
      <div className="media-block">
        <NewsPreview />
        <MasterClassSection />
      </div>
      <div className="community-footer-block">
        <CommunityStrip />
        <NewsletterSection />
      </div>
    </>
  );
}