export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy for Vasundhara</h1>
        <p className="text-gray-500 mb-8 border-b pb-8">Effective Date: {currentDate}</p>

        <div className="prose prose-primary max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Vasundhara respects user privacy and data security. The app collects only the information required for user registration, plantation activity tracking, location-based plantation records, photo uploads, certificate generation, support, and app improvement. User data is not sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>Vasundhara may collect the following information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>User name</li>
              <li>Email address</li>
              <li>Mobile number</li>
              <li>Profile information</li>
              <li>Login details</li>
              <li>Tree plantation activity data (tree name and details)</li>
              <li>Plantation photos</li>
              <li>Location data for plantation tracking</li>
              <li>Certificate-related data</li>
              <li>Device information</li>
              <li>App usage data</li>
              <li>Support request information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use the Information</h2>
            <p>We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Creating and managing user accounts</li>
              <li>Recording plantation activity</li>
              <li>Tracking plantation location</li>
              <li>Generating certificates</li>
              <li>Showing user contribution</li>
              <li>Improving app performance</li>
              <li>Sending notifications</li>
              <li>Providing support</li>
              <li>Maintaining security</li>
              <li>Complying with legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Location Data Usage</h2>
            <p>
              To accurately track and verify plantation activities, Vasundhara collects geo-location data when a user adds a new plantation entry. This ensures transparency and helps map environmental impact correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Photo and Media Uploads</h2>
            <p>
              Users are encouraged to upload photos of their plantation activities as verifiable proof. These images are securely stored and associated with the user's profile and certificates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p>We may use third-party services that collect, monitor and analyze data, such as:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Firebase Authentication</li>
              <li>Firebase Firestore / Realtime Database</li>
              <li>Firebase Storage</li>
              <li>Firebase Cloud Messaging</li>
              <li>Google Maps or location services</li>
              <li>Google Analytics for Firebase</li>
              <li>Cloud hosting services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Sharing and Disclosure</h2>
            <p>
              Vasundhara does not sell user personal information to third parties. Data is only shared with trusted third-party services necessary for app functionality, or when required by law to protect our rights or comply with legal processes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Account and Data Deletion</h2>
            <p>
              Users have the right to request the deletion of their accounts and associated data. Please refer to our <a href="/delete-account" className="text-primary-600 hover:underline">Account Deletion Request page</a> for step-by-step instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p>
              For privacy-related questions or concerns regarding this policy, please contact us at:
              <br />
              <strong>Email:</strong> <a href="mailto:admin@kitstechsolutions.com" className="text-primary-600 hover:underline">admin@kitstechsolutions.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
