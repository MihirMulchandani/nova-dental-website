import React from 'react';
import { Shield, Droplet, Wind, CheckCircle } from 'lucide-react';

const StepCard: React.FC<{ number: string; title: string; desc: string; icon: React.ReactNode }> = ({ number, title, desc, icon }) => (
  <div className="flex gap-4 p-6 bg-white dark:bg-darkCard rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
    <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-medicalBlue rounded-full flex items-center justify-center font-bold">
            {number}
        </div>
        <div className="h-full w-px bg-gray-100 dark:bg-gray-700 mt-2"></div>
    </div>
    <div>
        <div className="mb-2 text-softTeal">{icon}</div>
        <h3 className="text-xl font-bold text-deepSlate dark:text-white mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
            {desc}
        </p>
    </div>
  </div>
);

const Hygiene = () => {
  return (
    <div className="animate-fade-in py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-deepSlate dark:text-white mb-4">Safety Protocols</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At Nova Dental, infection control is our obsession. We strictly adhere to CDC & OSHA guidelines to ensure a sterile environment for every patient.
          </p>
        </div>

        <div className="space-y-6">
            <StepCard 
                number="1"
                title="Chemical Cleaning"
                desc="Instruments are scrubbed and soaked in ultrasonic cleaners with medical-grade disinfectant solution to remove all debris."
                icon={<Droplet size={24} />}
            />
            <StepCard 
                number="2"
                title="Pouch Packaging"
                desc="Cleaned instruments are dried and sealed in sterilization pouches with color-changing indicators that verify sterility."
                icon={<Shield size={24} />}
            />
            <StepCard 
                number="3"
                title="Class B Autoclaving"
                desc="We use advanced Class B Autoclaves (vacuum steam sterilizers) that penetrate even hollow instruments at 134°C."
                icon={<Wind size={24} />}
            />
             <StepCard 
                number="4"
                title="UV Storage"
                desc="Sterilized packs are stored in UV light chambers until the exact moment they are opened in front of you."
                icon={<CheckCircle size={24} />}
            />
        </div>

        <div className="mt-16 p-8 bg-softTeal/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-deepSlate dark:text-white mb-4">Disposable Dentistry</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We use single-use disposables wherever possible (gloves, masks, suction tips, cups, needles) to completely eliminate cross-contamination risks. Your safety is non-negotiable.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hygiene;