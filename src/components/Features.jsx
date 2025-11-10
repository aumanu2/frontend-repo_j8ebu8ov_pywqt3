import React from 'react';
import { PhoneCall, Repeat, Languages, CheckCircle2, Link as LinkIcon, Stars } from 'lucide-react';

const features = [
  {
    title: 'AI Voice Calling',
    description: 'Make and receive human-like calls for support, sales, and reminders.',
    icon: PhoneCall,
  },
  {
    title: 'Automated Follow-ups',
    description: 'Never miss a lead. Schedule intelligent follow-ups and callbacks.',
    icon: Repeat,
  },
  {
    title: 'Multilingual Support',
    description: 'Speak English, Hindi, and regional languages for better reach.',
    icon: Languages,
  },
  {
    title: 'Lead Qualification & Feedback',
    description: 'Qualify leads, conduct surveys, and collect feedback automatically.',
    icon: CheckCircle2,
  },
  {
    title: 'CRM & WhatsApp Integration',
    description: 'Connect with your CRM and WhatsApp to sync conversations and contacts.',
    icon: LinkIcon,
  },
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Powerful Features</h2>
          <p className="mt-2 text-gray-600">Everything you need to automate customer conversations</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Stars className="h-6 w-6 text-yellow-500" />
            <p className="text-gray-700">
              Trusted by Indian SMEs — streamlined voice automation that saves hours every week and boosts conversions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
