import React from "react";

export default function Home() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#fafafa] flex flex-col items-center justify-center font-sans text-[#333] p-6 select-none">
      <div className="max-w-[550px] w-full bg-white rounded-lg border border-[#eaeaea] shadow-sm p-8 md:p-10 flex flex-col">
        {/* Vercel Logo & Heading */}
        <div className="flex items-center space-x-3 mb-6">
          <svg width="28" height="24" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000"/>
          </svg>
          <div className="h-6 w-[1px] bg-[#eaeaea]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#666]">DEPLOYMENT_DISABLED</span>
        </div>

        <h1 className="text-[22px] md:text-2xl font-bold text-[#111] leading-tight mb-4">
          This Deployment has been disabled.
        </h1>
        
        <p className="text-sm text-[#666] leading-relaxed mb-8">
          The deployment you are trying to access has been suspended or taken offline. If you are the owner of this project, please resolve the billing status to resume service.
        </p>

        {/* Status Box */}
        <div className="bg-[#fafafa] rounded-md border border-[#eaeaea] p-4 flex flex-col gap-4 mb-6">
          {/* Item 1: Connection */}
          <div className="flex items-start space-x-3">
            <div className="mt-1 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#e6fcf5] flex items-center justify-center">
              <svg className="w-3 h-3 text-[#0ca678]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-sm font-semibold text-[#111]">Your connection is working</h2>
              <p className="text-xs text-[#666]">Your internet connection is active and stable.</p>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#0ca678] bg-[#e6fcf5] px-1.5 py-0.5 rounded tracking-wider">Active</span>
          </div>

          <div className="h-[1px] bg-[#eaeaea] -mx-4" />

          {/* Item 2: Vercel */}
          <div className="flex items-start space-x-3">
            <div className="mt-1 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#e6fcf5] flex items-center justify-center">
              <svg className="w-3 h-3 text-[#0ca678]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-sm font-semibold text-[#111]">Vercel is working correctly</h2>
              <p className="text-xs text-[#666]">All Vercel edge and server systems are operational.</p>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#0ca678] bg-[#e6fcf5] px-1.5 py-0.5 rounded tracking-wider">Operational</span>
          </div>

          <div className="h-[1px] bg-[#eaeaea] -mx-4" />

          {/* Item 3: Deployment status */}
          <div className="flex items-start space-x-3">
            <div className="mt-1 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#fff0f6] flex items-center justify-center">
              <svg className="w-3 h-3 text-[#c2255c]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-sm font-semibold text-[#c2255c]">Deployment Suspended</h2>
              <p className="text-xs text-[#c2255c] font-medium mt-0.5">
                Outstanding payment required. Please pay to continue service.
              </p>
            </div>
            <span className="text-[10px] uppercase font-bold text-[#c2255c] bg-[#fff0f6] px-1.5 py-0.5 rounded tracking-wider">Suspended</span>
          </div>
        </div>

        {/* Action / footer */}
        <p className="text-xs text-[#888] leading-normal text-center">
          If you are the developer or client, please pay outstanding dues or contact support to reactivate the service.
        </p>
      </div>

      {/* Subtle Vercel styling tag at the bottom */}
      <div className="mt-8 text-xs text-[#888] flex items-center space-x-2">
        <span>X-Vercel-Error: DEPLOYMENT_DISABLED</span>
        <span>•</span>
        <span>402 Payment Required</span>
      </div>
    </div>
  );
}
