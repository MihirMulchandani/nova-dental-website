import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ShieldCheck, Clock, Heart, Star, Calendar } from 'lucide-react';
import { PHONE_HREF, WHATSAPP_HREF, PHONE_DISPLAY } from '../constants';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white dark:bg-darkCard p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-md transition-shadow">
    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-medicalBlue bg-blue-50 dark:bg-blue-900/20 rounded-full">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-deepSlate dark:text-white mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-medicalBlue uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
                Welcome to Nova Dental
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deepSlate dark:text-white tracking-tight leading-tight mb-6">
                Gentle. Modern.<br/>
                <span className="text-medicalBlue">Trusted Dental Care.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience world-class dentistry in the heart of Ahmedabad. We prioritize your comfort with pain-free treatments and state-of-the-art hygiene.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href={WHATSAPP_HREF} isExternal fullWidth className="sm:w-auto">
                  Book via WhatsApp
                </Button>
                <Button href={PHONE_HREF} variant="outline" fullWidth className="sm:w-auto">
                  Call Now
                </Button>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                <span className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </span>
                <span>Trusted by 500+ families in Vastrapur</span>
              </p>
            </div>
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Calm, professional dental image */}
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Modern Dental Clinic Interior" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                        <p className="font-semibold text-lg">Dr. Ananya Rao</p>
                        <p className="text-sm opacity-90">Lead Dentist, BDS, MDS</p>
                    </div>
                </div>
              </div>
              {/* Decorative blob/element */}
              <div className="absolute -z-10 top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-softTeal/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-medicalBlue/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-darkCard/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-deepSlate dark:text-white mb-4">Why Ahmedabad Chooses Nova Dental</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We combine advanced technology with a gentle, family-oriented approach to ensure your smile is in the best hands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={24} />}
              title="100% Sterile & Safe"
              desc="We follow strict 4-step sterilization protocols (CDC compliant) to ensure complete patient safety and hygiene."
            />
            <FeatureCard 
              icon={<Heart size={24} />}
              title="Pain-Free Dentistry"
              desc="Modern anesthetics and gentle techniques mean your root canals and extractions are virtually painless."
            />
            <FeatureCard 
              icon={<Clock size={24} />}
              title="Zero Waiting Time"
              desc="We value your time. Appointments are managed efficiently so you never have to wait long in the lobby."
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-cream dark:bg-darkBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
               <h2 className="text-3xl font-bold text-deepSlate dark:text-white mb-2">Our Key Treatments</h2>
               <p className="text-gray-500 dark:text-gray-400">Comprehensive care under one roof.</p>
            </div>
            <Link to="/services" className="text-medicalBlue font-medium hover:text-blue-700 transition-colors mt-4 md:mt-0 flex items-center gap-1">
                View All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {['Root Canal Treatment', 'Teeth Whitening', 'Dental Implants', 'Kids Dentistry'].map((service, idx) => (
                 <div key={idx} className="bg-white dark:bg-darkCard p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-medicalBlue/30 transition-all">
                     <div className="w-12 h-1 bg-medicalBlue rounded-full mb-4"></div>
                     <h3 className="text-xl font-semibold text-deepSlate dark:text-white mb-2">{service}</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Advanced care using the latest technology for best results.</p>
                     <span className="text-sm text-medicalBlue font-medium">Learn more</span>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-medicalBlue rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
                <Calendar className="mx-auto mb-4 opacity-80" size={48} />
                <h2 className="text-3xl font-bold mb-4">Ready for a Healthier Smile?</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Book your consultation today. We are open Monday to Saturday, 10:00 AM to 8:00 PM.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                    href={WHATSAPP_HREF} 
                    isExternal 
                    className="bg-white text-medicalBlue hover:bg-gray-100 shadow-none border-0"
                >
                    Book Appointment
                </Button>
                <Button 
                    href={PHONE_HREF} 
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-none"
                >
                    Call {PHONE_DISPLAY}
                </Button>
                </div>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;