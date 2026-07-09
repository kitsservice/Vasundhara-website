export default function ScreenshotsSection() {
  const screenshots = [
    { label: 'Abhiyan Mission', image: '/images/abhiyan_screen.png' },
    { label: 'Add Activity', image: '/images/add_activity.png' },
    { label: 'Location Tracking', image: '/images/location_map.png' },
    { label: 'Certificate Screen', image: '/images/certificate_ui.png' },
    { label: 'Seed Ball Activity', image: '/images/seed_ball_ui.png' },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-600">
            A glimpse into the beautifully designed, user-friendly interface of the Vasundhara mobile application.
          </p>
        </div>

        {/* Horizontal scroll container for screenshots */}
        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
          {screenshots.map((screen, index) => (
            <div key={index} className="snap-center shrink-0 w-64 md:w-72 flex flex-col items-center">
              <div className="w-full h-[500px] md:h-[580px] bg-white rounded-[3rem] border-[8px] border-gray-900 shadow-xl overflow-hidden relative mb-6">
                <div className="absolute top-0 w-full h-6 bg-gray-900 flex justify-center rounded-b-xl z-20">
                  <div className="w-16 h-4 bg-black rounded-b-xl"></div>
                </div>
                {/* Screenshot Content */}
                <img src={screen.image} alt={screen.label} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
