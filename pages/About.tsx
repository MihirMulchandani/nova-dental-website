import React from 'react';
import { GraduationCap, Award, HeartHandshake } from 'lucide-react';
import { Button } from '../components/Button';
import { WHATSAPP_HREF } from '../constants';

const About = () => {
  return (
    <div className="animate-fade-in py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Doctor Intro */}
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative mb-8 lg:mb-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
              <img 
                src="https://picsum.photos/600/800" 
                alt="Dr. Ananya Rao" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full border-2 border-medicalBlue/20 rounded-2xl hidden lg:block"></div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-deepSlate dark:text-white mb-2">Dr. Ananya Rao</h1>
            <p className="text-medicalBlue font-medium text-lg mb-6">B.D.S., M.D.S. (Conservative Dentistry & Endodontics)</p>
            
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8">
              <p>
                Dr. Ananya Rao is the chief dentist at Nova Dental, bringing over 10 years of clinical experience in creating healthy, beautiful smiles. An alumnus of the prestigious Government Dental College, Ahmedabad, she specializes in painless root canal treatments and cosmetic dentistry.
              </p>
              <p>
                Her philosophy is simple: <strong>"Treat every patient like family."</strong>
              </p>
              <p>
                Dr. Rao believes that dental visits shouldn't be scary. She takes time to explain every procedure, ensuring her patients feel heard, understood, and comfortable before any treatment begins.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-softTeal mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-deepSlate dark:text-white">Gold Medalist</h4>
                  <p className="text-sm text-gray-500">M.D.S. University Topper</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-softTeal mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-deepSlate dark:text-white">10+ Years Exp.</h4>
                  <p className="text-sm text-gray-500">Served 5000+ Patients</p>
                </div>
              </div>
            </div>

            <Button href={WHATSAPP_HREF} isExternal>
              Book Consultation
            </Button>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-cream dark:bg-darkCard rounded-3xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <HeartHandshake className="mx-auto text-medicalBlue mb-4" size={48} />
            <h2 className="text-3xl font-bold text-deepSlate dark:text-white mb-6">Our Patient Promise</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-bold text-lg mb-2 text-deepSlate dark:text-white">Empathy First</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">We understand dental anxiety. We move at your pace, never rushing a procedure.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-deepSlate dark:text-white">Complete Honesty</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">We only recommend treatments you actually need. No upselling, ever.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-deepSlate dark:text-white">Highest Standards</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">From materials to machinery, we use only the best global brands (3M, Dentsply).</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;