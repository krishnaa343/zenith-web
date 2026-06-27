import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BackToTop from '../components/common/BackToTop';
import CookieNotice from '../components/common/CookieNotice';
import Toast from '../components/common/Toast';

export default function MainLayout({ children, isDark, toggleDarkMode, toasts, removeToast }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <CookieNotice />
      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
