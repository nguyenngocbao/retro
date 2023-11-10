import { ExploreSection } from './components/features/ExploreSection';
import { FeatureGamesSections } from './components/features/FeatureGamesSection';
import { GameOverview } from './components/features/GameOverview';
import { JoinTheWorldSection } from './components/features/JoinTheWorldSection';
import { WelcomeBanner } from './components/features/WelcomeBannerSection';

export default function () {
  return (
    <main>
      <WelcomeBanner className="mb-[36px] overflow-x-hidden md:mb-0" />
      <ExploreSection className="overflow-x-hidden" />
      <GameOverview className="overflow-x-hidden" />
      <FeatureGamesSections />
      <JoinTheWorldSection />
    </main>
  );
}
