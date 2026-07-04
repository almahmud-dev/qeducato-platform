"use client";

import React from "react";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import Container from "../ui/Container";
import DirectionalButton from "../common/DirectionalButton";

function CtaBannerSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        
        {/* মেইন প্রিমিয়াম মিনিমালিস্ট কার্ড */}
        <div className="relative w-full bg-[#031b4e] rounded-[32px] p-8 md:p-14 overflow-hidden border border-white/5 shadow-[0_30px_70px_-15px_rgba(3,27,78,0.3)]">
          
          {/* রাইট সাইড অ্যাবস্ট্রাক্ট কোণাল শেড (ডিজাইন এলিগেন্সের জন্য) */}
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none hidden md:block" />
          
          {/* ২-কলাম গ্রিড লেআউট */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* বাম কলাম: টেক্সট এবং ছোট বুলেট পিলস (৮ কলাম স্পেস) */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
              
              {/* মিনি ট্যাগ */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#ff6f4b] animate-pulse" />
                <span className="text-white text-xs font-semibold uppercase tracking-wider">
                  Admissions Open 2026
                </span>
              </div>

              {/* মেইন বোল্ড হেডলাইন */}
              <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-black text-white leading-[1.15]">
                Ready to take the <br className="hidden md:inline" />
                next big step in your career?
              </h2>

              {/* শর্ট ডেসক্রিপশন */}
              <p className="text-slate-300 text-sm md:text-base max-w-[580px] leading-relaxed">
                Join an elite ecosystem of innovators, researchers, and global leaders. Our simplified online application takes less than 10 minutes to complete.
              </p>

              {/* কুইক ট্রাস্ট ফ্যাক্টরস (ফিচার লিস্ট) */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <FiCheckCircle className="text-[#ff6f4b]" size={14} />
                  <span>No Application Fee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <FiCheckCircle className="text-[#ff6f4b]" size={14} />
                  <span>100% Online Process</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <FiCheckCircle className="text-[#ff6f4b]" size={14} />
                  <span>Scholarships Available</span>
                </div>
              </div>

            </div>

            {/* ডান কলাম: অ্যাকশন বাটন প্যানেল (৪ কলাম স্পেস) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-stretch gap-4 w-full">
              
              {/* প্রাইমারি ডাইরেকশনাল বাটন */}
              <div className="w-full sm:w-auto lg:w-full">
                <DirectionalButton
                  href="/admissions"
                  label="Apply Online Now"
                  rightIcon={<FiArrowUpRight size={18} />}
                  bgColor="#ff6f4b"
                  flairColor="#ffffff"
                  borderColor="#ff6f4b"
                  textColor="#ffffff"
                  textHoverColor="#031b4e"
                  shadowHover="0px 15px 30px rgba(255, 111, 75, 0.25)"
                  size="lg"
                  className="font-bold rounded-2xl w-full justify-center py-4.5 text-center"
                />
              </div>

              {/* সেকেন্ডারি ট্রান্সপারেন্ট টেক্সট বাটন */}
              <a
                href="/contact"
                className="w-full sm:w-auto lg:w-full text-center px-6 py-4 rounded-2xl border border-white/10 hover:border-white/20 text-white font-bold text-sm bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 active:scale-98 cursor-pointer"
              >
                Talk to an Advisor
              </a>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default CtaBannerSection;