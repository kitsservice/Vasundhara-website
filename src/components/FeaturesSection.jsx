import { UserPlus, TreePine, Map, Camera, Award, Star, Sprout, Users, LayoutDashboard, Bell, FileBarChart, Crosshair } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: 'User Registration & Login',
      description: 'Users can create an account and securely access the app.'
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: 'Tree Plantation Activity',
      description: 'Add plantation details such as tree name, location, date, photos, and activity info.'
    },
    {
      icon: <Crosshair className="w-6 h-6" />,
      title: 'Plantation Tracking',
      description: 'Track plantation records and personal contribution over time.'
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: 'Geo-Location Support',
      description: 'Capture plantation location to make tree tracking more transparent and accurate.'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Photo Upload',
      description: 'Upload tree plantation images as verifiable proof of activity.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certificate Generation',
      description: 'Receive personalized digital certificates based on your plantation contribution.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Achievement Levels',
      description: 'Contribution levels such as Basic, Silver, Gold, Platinum, and Premium.'
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: 'Seed Ball Activity',
      description: 'Participate in seed ball preparation and distribution activities.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Volunteer Participation',
      description: 'Supports volunteers, students, social groups, and corporate CSR organizations.'
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: 'Admin Dashboard',
      description: 'Monitor plantation records, users, certificates, reports, and activities.'
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Notifications & Updates',
      description: 'Receive updates about plantation drives, activities, and certificate status.'
    },
    {
      icon: <FileBarChart className="w-6 h-6" />,
      title: 'Reports & Impact Summary',
      description: 'View total trees planted, active users, locations, and overall green impact.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600">
            Vasundhara offers a comprehensive set of tools to make tree plantation more organized, transparent, measurable, and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
