import { ExploreSection } from './components/features/ExploreSection';
import { FeatureGamesSections } from './components/features/FeatureGamesSection';
import { GameOverview } from './components/features/GameOverview';
import { JoinTheWorldSection } from './components/features/JoinTheWorldSection';
import { PartnershipSection } from './components/features/PartnershipSection';
import { WelcomeBanner } from './components/features/WelcomeBannerSection';

export default function () {
  return (
    <main className="delay-2s">
      <WelcomeBanner className="mb-[36px] md:mb-0" />
      <ExploreSection className="overflow-x-hidden" />
      <GameOverview />
      <FeatureGamesSections />
      <PartnershipSection />
      <JoinTheWorldSection />
    </main>
  );
}
