import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectDetails } from './components/ProjectDetails';
import { Calculator } from './components/Calculator';
import { Gallery } from './components/Gallery';
import { ContactFooter } from './components/ContactFooter';
import { LeadModal } from './components/LeadModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <ProjectDetails />
        <Calculator />
        <Gallery />
      </main>

      <ContactFooter />
      
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;