export default function ImpactSection() {
  const stats = [
    { label: 'Trees Targeted', value: '10,000+' },
    { label: 'Seed Balls Targeted', value: '5,000+' },
    { label: 'Green Contributors', value: '1,000+' },
    { label: 'Plantation Locations', value: '50+' },
  ];

  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 20c-15 0-30 15-30 30s15 30 30 30 30-15 30-30-15-30-30-30zm0 50c-10 0-20-10-20-20s10-20 20-20 20 10 20 20-10 20-20 20z" fill="currentColor" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Environmental Impact</h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Together, we are making a measurable difference. Join the movement and be part of our growing green community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-primary-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
