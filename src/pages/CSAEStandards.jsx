export default function CSAEStandards() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Child Sexual Abuse and Exploitation Standards
        </h1>
        <p className="text-gray-500 mb-8 border-b pb-8">Effective Date: {currentDate}</p>

        <div className="prose prose-primary max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Zero-Tolerance Policy</h2>
            <p>
              Vasundhara has zero tolerance for child sexual abuse and exploitation (CSAE),
              child sexual abuse material (CSAM), grooming, sexual extortion, trafficking,
              or any activity that harms or exploits minors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Prohibited Content and Conduct</h2>
            <p>Users must not upload, share, request, promote, or engage in content or conduct involving:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Sexual abuse, exploitation, or endangerment of children</li>
              <li>CSAM or content that depicts, solicits, or normalizes child sexual abuse</li>
              <li>Grooming, coercion, sexual extortion, or inappropriate contact with minors</li>
              <li>Links, instructions, groups, or services that facilitate CSAE or CSAM</li>
              <li>Any attempt to evade detection, moderation, or reporting of CSAE content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Reporting CSAE Concerns</h2>
            <p>
              If you see content or behavior that may involve CSAE, report it immediately to{' '}
              <a href="mailto:admin@kitstechsolutions.com" className="text-primary-600 hover:underline">
                admin@kitstechsolutions.com
              </a>
              . Please include relevant details such as the user profile, content description,
              screenshots if safe and lawful to provide, and the date and time of the incident.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Review and Enforcement</h2>
            <p>
              We review reports promptly and take appropriate action, which may include removing
              content, restricting or terminating accounts, preserving relevant evidence, and
              preventing repeat abuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Escalation to Authorities</h2>
            <p>
              When we become aware of apparent CSAE or CSAM, we may report it to appropriate
              law-enforcement agencies, child-safety authorities, or other legally designated
              reporting organizations as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Safety</h2>
            <p>
              Vasundhara is intended to support environmental awareness and plantation activities.
              We expect all users to interact respectfully and lawfully, and we do not allow the
              platform to be used in ways that exploit, sexualize, or endanger children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
            <p>
              For questions about these standards, contact us at{' '}
              <a href="mailto:admin@kitstechsolutions.com" className="text-primary-600 hover:underline">
                admin@kitstechsolutions.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
