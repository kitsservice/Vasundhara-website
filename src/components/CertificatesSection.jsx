import { Award, Medal, Trophy, Star, Crown } from 'lucide-react';

export default function CertificatesSection() {
  const levels = [
    {
      title: 'Basic Level',
      certificate: 'Green Contributor Certificate',
      criteria: '1 to 5 Trees Planted',
      icon: <Star className="w-8 h-8 text-green-500" />,
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Silver Level',
      certificate: 'Tree Plantation Certificate',
      criteria: '10+ Trees Planted',
      icon: <Medal className="w-8 h-8 text-gray-400" />,
      color: 'bg-gray-50 border-gray-200'
    },
    {
      title: 'Gold Level',
      certificate: 'Tree Plantation Excellence',
      criteria: '25+ Trees Planted',
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Platinum Level',
      certificate: 'Green Champion Certificate',
      criteria: '50+ Trees Planted',
      icon: <Trophy className="w-8 h-8 text-slate-400" />,
      color: 'bg-slate-50 border-slate-200'
    },
    {
      title: 'Premium Level',
      certificate: 'Vasundhara Environmental Leader',
      criteria: '100+ Trees Planted',
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certificate Levels</h2>
          <p className="text-lg text-gray-600">
            Vasundhara recognizes user contribution through digital certificates. These certificates motivate users to participate actively in environmental activities and celebrate their contribution toward a greener planet.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {levels.map((level, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-6 border-2 ${level.color} hover:shadow-md transition-shadow flex flex-col items-center text-center ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                {level.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{level.title}</h3>
              <p className="text-primary-600 font-semibold mb-3">{level.certificate}</p>
              <span className="inline-block px-4 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100">
                {level.criteria}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
