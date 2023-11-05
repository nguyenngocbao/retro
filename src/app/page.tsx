import { ExploreSection } from './components/features/ExploreSection';
import { FeatureGamesSections } from './components/features/FeatureGamesSection';
import { GameOverview } from './components/features/GameOverview';
import { JoinTheWorldSection } from './components/features/JoinTheWorldSection';
import { WelcomeBanner } from './components/features/WelcomeBannerSection';

export default function () {
  return (
    <main>
      <WelcomeBanner className="mb-[36px] lg:mb-[75px]" />
      <ExploreSection className="lg:mb-[52px]" />
      <GameOverview className="lg:mb-[52px]" />
      <FeatureGamesSections className="lg:mb-[102px]" />
      <JoinTheWorldSection />
    </main>
  );
}
