import React from 'react';
import { Button } from '../components/Button';
import { Stethoscope, Sparkles, Drill, Activity, Crown, Smile, Baby } from 'lucide-react';
import { Service } from '../types';
import { WHATSAPP_HREF } from '../constants';

const servicesList: Service[] = [
  {
    id: 'consultation',
    title: 'General Checkup & Consultation',
    description: 'Thorough examination of teeth and gums, including digital X-rays if needed. We recommend this every 6 months.',
    icon: Stethoscope,
    priceRange: '₹300 - ₹500',
  },
  {
    id: 'cleaning',
    title: 'Dental Cleaning & Polishing',
    description: 'Ultrasonic scaling to remove plaque and tartar, followed by polishing for a brighter smile.',
    icon: Sparkles,
    priceRange: '₹800 - ₹1,500',
  },
  {
    id: 'restoration',
    title: 'Fillings & Restorations',
    description: 'Tooth-colored composite fillings to repair cavities and restore the natural look of your teeth.',
    icon: Drill,
    priceRange: '₹1,000 - ₹2,500',
  },
  {
    id: 'rct',
    title: 'Root Canal Treatment',
    description: 'Single-sitting painless root canal treatment to save infected teeth. Done by specialists.',
    icon: Activity,
    priceRange: '₹3,500 - ₹6,000',
  },
  {
    id: 'crowns',
    title: 'Crowns & Bridges',
    description: 'High-quality Zirconia and Ceramic caps to strengthen damaged teeth or replace missing ones.',
    icon: Crown,
    priceRange: '₹3,000 - ₹12,000 per unit',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Professional bleaching treatment to lighten discoloration and staining for a dazzling smile.',
    icon: Smile,
    priceRange: '₹5,000 - ₹8,000',
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Friendly dental care for children, including fluoride treatments, pit & fissure sealants, and habit breaking.',
    icon: Baby,
    priceRange: 'Consultation ₹400',
  },
];

const Services = () => {
  return (
    <div className="animate-fade-in py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-deepSlate dark:text-white mb-4">Our Treatments</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Transparent pricing. Expert care. No hidden charges.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-darkCard rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-12 h-12 bg-cream dark:bg-gray-700 rounded-lg flex items-center justify-center text-medicalBlue mb-4">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-deepSlate dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-softTeal">{service.priceRange}</span>
                  <Button href={WHATSAPP_HREF} isExternal variant="secondary" className="px-3 py-1.5 text-xs h-auto">
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-8 text-center border border-blue-100 dark:border-blue-900/30">
          <h3 className="text-xl font-semibold text-deepSlate dark:text-white mb-2">Not sure what you need?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Schedule a consultation and let our doctors guide you to the best treatment plan.
          </p>
          <Button href={WHATSAPP_HREF} isExternal>
            Chat with Dr. Rao
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;