import FeaturesSection from '../components/FeaturesSection';
import ScreenshotsSection from '../components/ScreenshotsSection';

export default function Features() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-secondary-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">App Features</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the powerful tools and features designed to make tracking and managing tree plantation activities seamless and rewarding.
          </p>
        </div>
      </div>

      <FeaturesSection />
      <ScreenshotsSection />
    </div>
  );
}
