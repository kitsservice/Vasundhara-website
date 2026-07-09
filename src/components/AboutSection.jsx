import { Leaf, Users, Globe2, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center transform translate-y-8">
                <Leaf className="w-12 h-12 text-primary-500 mb-4" />
                <h4 className="font-bold text-gray-900">Green Initiative</h4>
              </div>
              <div className="bg-secondary-50 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center transform translate-y-8">
                <Globe2 className="w-12 h-12 text-secondary-500 mb-4" />
                <h4 className="font-bold text-gray-900">Global Impact</h4>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                <Users className="w-12 h-12 text-orange-500 mb-4" />
                <h4 className="font-bold text-gray-900">Community</h4>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center">
                <ShieldCheck className="w-12 h-12 text-purple-500 mb-4" />
                <h4 className="font-bold text-gray-900">Verified</h4>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Vasundhara</h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Vasundhara is an environmental initiative app developed to promote tree plantation, green awareness, and community participation. The app enables users, students, volunteers, organizations, and citizens to participate in plantation activities and track their contribution digitally.
              </p>
              <p className="mt-4">
                The purpose of Vasundhara is to make tree plantation more organized, transparent, measurable, and rewarding. Users can record plantation activities, upload photos, track progress, receive certificates, and become part of a larger green movement.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-primary-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to build a greener and healthier environment by using technology to connect people with tree plantation activities. Vasundhara aims to inspire every individual to plant, protect, and track trees while creating a measurable environmental impact.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
