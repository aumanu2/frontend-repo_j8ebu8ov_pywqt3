import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Flowvaani Private Limited</h3>
            <p className="mt-1 text-gray-600">connect@flowvaani.in · +91-XXXXXXXXXX</p>
            <p className="text-gray-600">Ambikapur, Chhattisgarh, India</p>
          </div>
          <div className="md:text-right">
            <nav className="inline-flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <a href="#privacy" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#terms" className="hover:text-gray-900">Terms of Service</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">LinkedIn</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">Instagram</a>
            </nav>
            <p className="mt-3 text-xs text-gray-500">© {new Date().getFullYear()} Flowvaani Private Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
