import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { 
    ADDRESS_LINE_1, 
    ADDRESS_LINE_2, 
    CITY_STATE, 
    PHONE_DISPLAY, 
    PHONE_HREF, 
    WHATSAPP_HREF,
    MAP_EMBED_URL
} from '../constants';

const Contact = () => {
  return (
    <div className="animate-fade-in py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div>
            <h1 className="text-4xl font-bold text-deepSlate dark:text-white mb-6">Visit Nova Dental</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
                We are conveniently located in Vastrapur, Ahmedabad. Ample parking available.
            </p>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-medicalBlue rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-deepSlate dark:text-white mb-1">Address</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {ADDRESS_LINE_1}<br/>
                            {ADDRESS_LINE_2}<br/>
                            {CITY_STATE}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-medicalBlue rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-deepSlate dark:text-white mb-1">Working Hours</h3>
                        <div className="text-gray-500 dark:text-gray-400 space-y-1">
                            <div className="flex justify-between w-48">
                                <span>Mon - Sat:</span>
                                <span>10:00 AM - 08:00 PM</span>
                            </div>
                            <div className="flex justify-between w-48 text-orange-500">
                                <span>Sunday:</span>
                                <span>By Appointment</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-medicalBlue rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-deepSlate dark:text-white mb-1">Contact</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Have an emergency? Call us anytime.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href={PHONE_HREF} className="gap-2">
                                <Phone size={18} /> Call Now
                            </Button>
                            <Button href={WHATSAPP_HREF} isExternal variant="secondary" className="gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white">
                                <MessageCircle size={18} /> WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-[400px] lg:h-auto bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
            <iframe 
                src={MAP_EMBED_URL}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Nova Dental"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;