import React from 'react';
import { Settings, Brain, BarChart3, Phone } from 'lucide-react';

const steps = [
  {
    title: 'Connect your business phone number',
    icon: Phone,
    description: 'Plug in your existing number or set up a new one in minutes.',
  },
  {
    title: 'Train your AI agent',
    icon: Brain,
    description: 'Provide FAQs, scripts, and goals. The agent learns your tone and intent.',
  },
  {
    title: 'Automate calls and track results',
    icon: BarChart3,
    description: 'Go live with scheduled or on-demand calls and monitor outcomes in real-time.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">How It Works</h2>
          <p className="mt-2 text-gray-600">Up and running in three simple steps</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
