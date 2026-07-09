export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
              </span>
              Plant Trees. Track Impact. Build a Greener Future.
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Vasundhara - A Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Tree Plantation</span> & Green Impact App
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Plant trees, track plantation activity, earn certificates, and contribute to a greener future through one simple mobile application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="btn-primary flex justify-center items-center">
                Download App
              </a>
              <a href="#features" className="btn-secondary flex justify-center items-center">
                Explore Features
              </a>
              <a href="/contact" className="btn-secondary flex justify-center items-center !bg-transparent !border-gray-300 !text-gray-700 hover:!bg-gray-50">
                Contact Support
              </a>
            </div>
          </div>

          {/* Hero Image / Mockup Placeholder */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:mx-0 flex justify-center">
            <div className="relative w-64 h-[500px] md:w-72 md:h-[580px] bg-white rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
              <div className="absolute top-0 w-full h-6 bg-gray-900 flex justify-center rounded-b-xl z-20">
                <div className="w-16 h-4 bg-black rounded-b-xl"></div>
              </div>
              <img src="/images/dashboard_screen.png" alt="App Dashboard" className="w-full h-full object-cover" />
            </div>
            
            {/* Background elements for the mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-200/40 to-secondary-200/40 rounded-full blur-3xl -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
