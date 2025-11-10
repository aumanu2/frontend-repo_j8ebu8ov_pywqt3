import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, PhoneCall } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-28 md:flex-row md:items-center md:justify-between md:pt-32">
        <div className="z-10 max-w-2xl text-center md:text-left">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">AI Voice Agent for Indian Businesses</span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
            Automate Your Business Calls with AI – <span className="text-blue-600">Flowvaani</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your intelligent voice agent that talks, understands, and converts.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            >
              Get Started
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            <div className="flex -space-x-2">
              <img alt="" src="https://i.pravatar.cc/24?img=12" className="h-6 w-6 rounded-full ring-2 ring-white" />
              <img alt="" src="https://i.pravatar.cc/24?img=5" className="h-6 w-6 rounded-full ring-2 ring-white" />
              <img alt="" src="https://i.pravatar.cc/24?img=25" className="h-6 w-6 rounded-full ring-2 ring-white" />
            </div>
            <p className="text-sm text-gray-600">
              Trusted by Indian SMEs for smarter customer conversations
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-12 w-full md:mt-0 md:w-1/3">
          <div className="mx-auto w-full max-w-sm rounded-2xl border border-blue-100 bg-white/70 p-5 backdrop-blur">
            <div className="flex items-center gap-2 text-blue-700">
              <PhoneCall className="h-5 w-5" />
              <h3 className="font-medium">Call automation snapshot</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span> Real-time speech understanding</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span> Natural, human-like responses</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-violet-500"></span> Automatic follow-ups & notes</li>
            </ul>
          </div>
        </div>
      </div>

      <a
        href="tel:+919999999999"
        className="fixed bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg transition hover:bg-blue-700"
        aria-label="Call Now"
      >
        <PhoneCall className="h-5 w-5" />
        Call Now
      </a>
    </section>
  );
};

export default Hero;
