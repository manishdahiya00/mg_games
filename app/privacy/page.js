import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e2837] to-[#2a3c50] text-white">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#4bffa5]">
          Privacy Policy
        </h1>

        <div className="max-w-7xl mx-auto space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              1. Information We Collect
            </h2>
            <p>
              At MGGames, we collect and process the following types of
              information:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Personal information (such as name and email address) when you
                create an account or subscribe to our newsletter
              </li>
              <li>
                Usage data and analytics when you interact with our website and
                services
              </li>
              <li>
                Information you provide when contacting our support team or
                participating in forums
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Providing and improving our services</li>
              <li>Personalizing your experience on our platform</li>
              <li>Communicating with you about updates, offers, and news</li>
              <li>Ensuring the security and integrity of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              3. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell your personal information. We may share your
              information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>
                With service providers who assist us in operating our business
              </li>
              <li>In the event of a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              4. Your Rights and Choices
            </h2>
            <p>
              You have certain rights regarding your personal information,
              including:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Accessing and updating your personal information</li>
              <li>Requesting deletion of your data</li>
              <li>Opting out of marketing communications</li>
              <li>Setting preferences for cookies and tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              6. Children's Privacy
            </h2>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect personal information from children under 13. If
              you believe we have collected information from a child under 13,
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or our data
              practices, please contact us at:
            </p>
            <p className="mt-2">Email: privacy@mggames.com</p>
            <p>
              Address: 123 Gaming Street, Gameville, GS 12345, United States
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
