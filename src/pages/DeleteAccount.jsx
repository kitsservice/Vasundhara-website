import { Trash2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function DeleteAccount() {
  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-red-50 p-10 text-center border-b border-red-100">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trash2 className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Account and Data Deletion Request</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Users of Vasundhara can request the permanent deletion of their account and associated personal data by contacting our support team.
            </p>
          </div>

          <div className="p-10">
            {/* Steps */}
            <h3 className="text-xl font-bold text-gray-900 mb-6">How to request deletion:</h3>
            <div className="space-y-6 mb-12">
              {[
                "Send an email to admin@kitstechsolutions.com",
                "Use the subject line: Account Deletion Request - Vasundhara",
                "Mention your registered name, mobile number, and email address in the body",
                "Our support team will verify the request",
                "Your account and applicable personal data will be deleted within a reasonable processing period"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 mt-1">{step}</p>
                </div>
              ))}
            </div>

            {/* Warning Note */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-10 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">Important Note</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Some information may be retained if required for legal, security, fraud prevention, audit, certificate record, or compliance purposes according to our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <a 
                href="mailto:admin@kitstechsolutions.com?subject=Account Deletion Request - Vasundhara" 
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg gap-3"
              >
                <ShieldCheck className="w-6 h-6" />
                Request Account Deletion
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
