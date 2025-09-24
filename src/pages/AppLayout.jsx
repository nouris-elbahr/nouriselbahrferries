import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Loader from "../components/ui/Loader";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import {
  FaWhatsapp,
  FaHeadset,
  FaShoppingCart,
  FaQuestionCircle,
} from "react-icons/fa";
import { useState } from "react";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const [showContacts, setShowContacts] = useState(false);

  const whatsappContacts = [
    {
      name: "Support",
      number: "213560654451",
      message: "Hello, I need help with your service.",
      icon: <FaHeadset className="text-blue-500" />,
    },
    // {
    //   name: "Sales",
    //   number: "213770112233",
    //   message: "Hi, I'm interested in your products.",
    //   icon: <FaShoppingCart className="text-green-500" />,
    // },
    // {
    //   name: "Inquiry",
    //   number: "213660998877",
    //   message: "Hello, I have a general question.",
    //   icon: <FaQuestionCircle className="text-yellow-500" />,
    // },
  ];

  const handleWhatsAppClick = (number, message) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="h-screen">
      {isLoading && <Loader />}
      <Header />
      <main className="relative">
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />

      {/* WhatsApp Floating Button with Dropdown */}
      <div
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setShowContacts(true)}
        onMouseLeave={() => setShowContacts(false)}
      >
        <div className="relative">
          {/* Main WhatsApp Button */}
          <div className="md:m-4 group">
            <div className={`
              bg-[#25D366] p-3 md:p-4 rounded-full shadow-lg
              transition-all duration-300
              hover:bg-[#128C7E]
              ${showContacts ? 'animate-wiggle' : ''}
              hover:scale-110 active:scale-95
            `}>
              <FaWhatsapp className="text-white text-2xl md:text-3xl" />
            </div>
          </div>

          {/* Contacts Dropdown */}
          <div className={`
            absolute bottom-full mb-3 right-0
            bg-white rounded-lg shadow-xl w-64 py-2 md:mr-4 space-y-1 z-50 overflow-hidden
            transition-all duration-300 origin-bottom-right
            ${showContacts ? 
              'scale-100 opacity-100' : 
              'scale-90 opacity-0 pointer-events-none'
            }
          `}>
            {/* Connecting line */}
            {/* <div className={`
              absolute bottom-0 right-4 h-6 w-0.5 bg-gray-200
              transition-all duration-200
              ${showContacts ? 'scale-y-100' : 'scale-y-0'}
            `} /> */}
            
            {whatsappContacts.map((contact, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(contact.number, contact.message)}
                className={`
                  w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100
                  text-sm text-gray-800 transition-all duration-200
                  transform ${showContacts ? 
                    'translate-x-0 opacity-100' : 
                    'translate-x-4 opacity-0'
                  }
                `}
                style={{
                  transitionDelay: showContacts ? `${index * 75}ms` : '0ms'
                }}
              >
                <span className="text-lg">{contact.icon}</span>
                <span>{contact.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;