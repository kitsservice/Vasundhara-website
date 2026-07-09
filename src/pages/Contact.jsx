import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Contact Vasundhara Support</h1>
          <p className="text-lg text-gray-600">
            For app support, plantation activity issues, certificate-related queries, account deletion, privacy questions, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Details */}
          <div className="bg-primary-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-primary-500/50 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-primary-100 mb-10 text-lg">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-200 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Company Address</h4>
                    <p className="text-primary-100 leading-relaxed">
                      KITS Tech Solutions<br />
                      1st Floor, Mukta Plaza, Income Tax Square,<br />
                      Gorakshan Road, Akola, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary-200 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-primary-100">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary-200 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:admin@kitstechsolutions.com" className="text-primary-100 hover:text-white transition-colors">
                      admin@kitstechsolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12">
              <p className="text-sm text-primary-200">
                Official Website: <a href="https://kitstechsolutions.com/" target="_blank" rel="noreferrer" className="text-white hover:underline">kitstechsolutions.com</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" id="mobile" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="+91 9876543210" />
                </div>
                <div>
                  <label htmlFor="queryType" className="block text-sm font-medium text-gray-700 mb-1">Query Type</label>
                  <select id="queryType" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                    <option>App Support</option>
                    <option>Certificate Issue</option>
                    <option>Plantation Activity Issue</option>
                    <option>Account Deletion</option>
                    <option>Privacy Question</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="btn-primary w-full">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
