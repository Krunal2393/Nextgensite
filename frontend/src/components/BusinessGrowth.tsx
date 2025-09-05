"use client";
import React from "react";

const AchievingGift: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-12">
      {/* Achieving Business Growth */}
      <div className="w-full max-w-6xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 500"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          <text
            x="50%"
            y="40"
            textAnchor="middle"
            fontSize="28"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            fill="#111827"
          >
            Achieving Business Growth
          </text>

          {/* Wavy Arrow */}
          <path
            d="M50,400 C200,200 400,600 600,400 S1000,200 1150,400 L1150,300 L1200,350 L1150,400 Z"
            fill="url(#grad)"
          />

          {/* Step 1 */}
          <circle cx="100" cy="180" r="25" fill="#2563eb" />
          <text
            x="100"
            y="185"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="white"
          >
            1
          </text>
          <text
            x="160"
            y="170"
            fontSize="16"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            fill="#1e3a8a"
          >
            We Listen First
          </text>
          <text x="160" y="190" fontSize="14" fill="#374151">
            Great stories start here. We dig deep—
          </text>
          <text x="160" y="210" fontSize="14" fill="#374151">
            to truly honor your vision, strategies, and dreams.
          </text>

          {/* Step 2 */}
          <circle cx="380" cy="100" r="25" fill="#2563eb" />
          <text
            x="380"
            y="105"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="white"
          >
            2
          </text>
          <text x="440" y="90" fontSize="16" fontWeight="bold" fill="#1e3a8a">
            We Build the Base
          </text>
          <text x="440" y="110" fontSize="14" fill="#374151">
            Registrations, compliance, licenses—
          </text>
          <text x="440" y="130" fontSize="14" fill="#374151">
            we set the foundation to scale big.
          </text>

          {/* Step 3 */}
          <circle cx="680" cy="180" r="25" fill="#2563eb" />
          <text
            x="680"
            y="185"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="white"
          >
            3
          </text>
          <text x="740" y="170" fontSize="16" fontWeight="bold" fill="#1e3a8a">
            We Fuel the Fire
          </text>
          <text x="740" y="190" fontSize="14" fill="#374151">
            Funding, mentorship, resources—
          </text>
          <text x="740" y="210" fontSize="14" fill="#374151">
            all to accelerate your growth mission.
          </text>

          {/* Step 4 */}
          <circle cx="1020" cy="80" r="25" fill="#2563eb" />
          <text
            x="1020"
            y="85"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="white"
          >
            4
          </text>
          <text x="1080" y="70" fontSize="16" fontWeight="bold" fill="#1e3a8a">
            We Amplify the Impact
          </text>
          <text x="1080" y="90" fontSize="14" fill="#374151">
            Marketing and growth strategies
          </text>
          <text x="1080" y="110" fontSize="14" fill="#374151">
            make your brand unstoppable.
          </text>
        </svg>
      </div>

      {/* Hot Services Section */}
    </div>
  );
};

export default AchievingGift;
