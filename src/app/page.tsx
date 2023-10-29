import { DiscoverRetrocaft } from './components/features/DiscoverRetrocaft';
// import { ExploreSection } from './components/features/ExploreSection';
import { FeatureGamesSections } from './components/features/FeatureGamesSection';
import { JoinTheWorldSection } from './components/features/JoinTheWorldSection';
import { WelcomeBanner } from './components/features/WelcomeBannerSection';

export default function () {
  return (
    <main>
      <WelcomeBanner className="mb-[12px] lg:mb-[75px]" />
      {/* <ExploreSection className="lg:mb-[52px]" /> */}
      <DiscoverRetrocaft className="lg:mb-[52px]" />
      <FeatureGamesSections className="lg:mb-[102px]" />
      <JoinTheWorldSection />
    </main>
  );
}
