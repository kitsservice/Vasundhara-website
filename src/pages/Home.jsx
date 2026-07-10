import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import CertificatesSection from '../components/CertificatesSection';
import ImpactSection from '../components/ImpactSection';
import ScreenshotsSection from '../components/ScreenshotsSection';
import { Download, UserCheck, ImagePlus, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const steps = [
    { title: 'Download and Install', icon: <Download className="w-6 h-6" /> },
    { title: 'Register or Login', icon: <UserCheck className="w-6 h-6" /> },
    { title: 'Add Plantation Activity', icon: <ImagePlus className="w-6 h-6" /> },
    { title: 'Upload Photo & Location', icon: <MapPin className="w-6 h-6" /> },
    { title: 'Track Impact & Certificate', icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      
      {/* How It Works Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Start your green journey in 5 simple steps.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative">
            <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-gray-200 -z-10"></div>
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-primary-600 mb-4 shadow-sm">
                  {step.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Step {index + 1}</h4>
                <p className="text-sm text-gray-600">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <CertificatesSection />
      <ScreenshotsSection />
      <ImpactSection />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-primary-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-secondary-600/20 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to make a difference?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of volunteers and organizations planting trees and building a greener future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download Vasundhara App
            </a>
            <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2 bg-transparent border-gray-600 text-white hover:bg-gray-800">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
