import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e2837] to-[#2a3c50] text-white">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#4bffa5]">
          Terms and Conditions
        </h1>

        <div className="max-w-7xl mx-auto space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using MGGames, you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on MGGames's website for personal, non-commercial
              transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              3. Disclaimer
            </h2>
            <p>
              The materials on MGGames's website are provided on an 'as is'
              basis. MGGames makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              4. Limitations
            </h2>
            <p>
              In no event shall MGGames or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on MGGames's website, even if
              MGGames or a MGGames authorized representative has been notified
              orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              5. Revisions and Errata
            </h2>
            <p>
              The materials appearing on MGGames's website could include
              technical, typographical, or photographic errors. MGGames does not
              warrant that any of the materials on its website are accurate,
              complete or current. MGGames may make changes to the materials
              contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              6. Links
            </h2>
            <p>
              MGGames has not reviewed all of the sites linked to its website
              and is not responsible for the contents of any such linked site.
              The inclusion of any link does not imply endorsement by MGGames of
              the site. Use of any such linked website is at the user's own
              risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1febc6]">
              7. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of [Your Country] and you irrevocably
              submit to the exclusive jurisdiction of the courts in that State
              or location.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
