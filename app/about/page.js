"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("general");

  const teamMembers = [
    { name: "Alex Johnson", role: "Founder & CEO", icon: "👑" },
    { name: "Sarah Lee", role: "Head of Content", icon: "📝" },
    { name: "Mike Chen", role: "Lead Developer", icon: "💻" },
    { name: "Emily Wong", role: "Community Manager", icon: "🌐" },
    { name: "Alex Johnson", role: "Founder & CEO", icon: "👑" },
    { name: "Sarah Lee", role: "Head of Content", icon: "📝" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e2837] to-[#2a3c50] text-white">
      <main className="flex-grow">
        <section className="w-full py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center animate-fade-in">
              About <span className="text-[#4bffa5]">MGGames</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
              Your ultimate destination for gaming news, reviews, and community.
            </p>
            <div className="flex justify-center">
              <div className="text-[#4bffa5] animate-bounce text-4xl">▼</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid opacity-10"></div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <div className=" mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#1febc6]">
              Our Mission
            </h2>
            <p className="text-xl mb-6 leading-relaxed">
              At MGGames, we're passionate about bringing gamers together and
              providing a one-stop platform for all your gaming needs. Our
              mission is to create a vibrant community where gamers can discover
              new titles, share experiences, and connect with like-minded
              individuals.
            </p>
            <p className="text-xl leading-relaxed">
              We strive to offer comprehensive game information, honest reviews,
              and up-to-date news to help you make informed decisions about your
              next gaming adventure.
            </p>
          </div>
        </section>

        <section className="py-24 bg-[#1e2837]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#1febc6]">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Extensive Game Library",
                  icon: "🎮",
                  description:
                    "Access information on thousands of games across multiple platforms, from AAA titles to indie gems.",
                },
                {
                  title: "Community Forums",
                  icon: "💬",
                  description:
                    "Engage in discussions, share tips, and connect with fellow gamers in our active community forums.",
                },
                {
                  title: "Expert Reviews",
                  icon: "⭐",
                  description:
                    "Read in-depth, unbiased reviews from our team of experienced gamers to help you choose your next favorite game.",
                },
              ].map((offer, index) => (
                <div
                  key={offer.title}
                  className="bg-[#0f172a] border-[#1febc6] border-2 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#1febc6] flex items-center mb-4">
                    <span className="text-4xl mr-2">{offer.icon}</span>
                    {offer.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{offer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#1febc6]">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-6 gap-10 mx-auto">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4bffa5] to-[#1febc6] flex items-center justify-center mb-4">
                  <span className="text-4xl">{member.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[#1febc6]">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#1febc6]">
            FAQ
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex mb-4">
              {["general", "account", "support"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 text-lg font-semibold ${
                    activeTab === tab
                      ? "bg-[#1febc6] text-[#0f172a]"
                      : "bg-[#1e2837] text-white"
                  } transition-colors duration-300`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-[#1e2837] p-6 rounded-lg">
              {activeTab === "general" && (
                <>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">General Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">General Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">General Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">General Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">General Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                </>
              )}
              {activeTab === "account" && (
                <>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">account Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">account Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">account Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">account Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">account Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                </>
              )}
              {activeTab === "support" && (
                <>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">support Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">support Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">support Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold">support Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">support Questions</h3>
                    <p>
                      Find answers to common questions about our platform and
                      services.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.5s ease-out 0.2s forwards;
          opacity: 0;
        }
        .bg-grid {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}
