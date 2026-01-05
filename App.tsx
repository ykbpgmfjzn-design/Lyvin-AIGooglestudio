import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectDetails } from './components/ProjectDetails';
import { Location } from './components/Location';
import { Complex } from './components/Complex';
import { ApartmentTypes } from './components/ApartmentTypes';
import { Management } from './components/Management';
import { Calculator } from './components/Calculator';
import { OtherProjects } from './components/OtherProjects';
import { ContactFooter } from './components/ContactFooter';
import { LeadModal } from './components/LeadModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <ProjectDetails />
        <Location />
        <Complex />
        <ApartmentTypes />
        <Management />
        <Calculator />
        <OtherProjects />
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