
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

const App: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleOpenDonationModal = () => setIsDonationModalOpen(true);
  const handleCloseDonationModal = () => setIsDonationModalOpen(false);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header onDonateClick={handleOpenDonationModal} />
      <main>
        <Hero onDonateClick={handleOpenDonationModal} />
        <About />
        <Programs />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <DonationModal isOpen={isDonationModalOpen} onClose={handleCloseDonationModal} />
    </div>
  );
};

export default App;