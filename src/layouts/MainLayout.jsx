import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BackToTop from '../components/common/BackToTop';
import Toast from '../components/common/Toast';
import SmoothScroll from '../components/fx/SmoothScroll';
import CustomCursor from '../components/fx/CustomCursor';
import Grain from '../components/fx/Grain';

export default function MainLayout({ children, isDark, toggleDarkMode, toasts, removeToast }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SmoothScroll />
      <CustomCursor />
      <Grain />
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
