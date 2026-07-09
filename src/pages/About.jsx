import AboutSection from '../components/AboutSection';
import ImpactSection from '../components/ImpactSection';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">About Vasundhara</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the story behind our green initiative and how we are empowering individuals to build a healthier planet.
          </p>
        </div>
      </div>

      <AboutSection />
      
      <div className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Can Use Vasundhara?</h2>
            <p className="text-lg text-gray-600">
              Vasundhara is designed for everyone who wants to participate in plantation activities and measure environmental contribution digitally.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Students', 'Schools & Colleges', 'Volunteers', 'NGOs', 'Corporate CSR Teams', 'Government Bodies', 'Environmental Groups', 'Citizens'].map((user, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="font-semibold text-gray-800">{user}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImpactSection />
    </div>
  );
}
