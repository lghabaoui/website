import React, { useRef, useState } from 'react';
import { 
  Palette, 
  Megaphone, 
  Code2, 
  Camera, 
  Video,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  Send
} from 'lucide-react';

function App() {
  const sections = useRef<(HTMLDivElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (index: number) => {
    sections.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Ifurtech</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['Home', 'Design', 'Marketing', 'Development', 'Photography', 'Video', 'Contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(index)}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        ref={(el) => (sections.current[0] = el)}
        className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center text-white"
      >
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Ifurtech Services
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Transforming ideas into digital excellence through innovative solutions
          </p>
          <button
            onClick={() => scrollToSection(1)}
            className="group inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Explore Our Services
            <ChevronDown className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Design Section */}
      <section
        ref={(el) => (sections.current[1] = el)}
        className="min-h-screen bg-gradient-to-br from-pink-500 to-orange-500 flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Palette className="w-16 h-16 text-white mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Design Services</h2>
              <p className="text-white/90 text-lg mb-8">
                From brand identity to user experience, we craft designs that leave lasting impressions. Our creative team brings your vision to life with precision and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['UI/UX Design', 'Brand Identity', 'Print Design', 'Motion Graphics'].map((service) => (
                  <div key={service} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
                alt="Design Process"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section
        ref={(el) => (sections.current[2] = el)}
        className="min-h-screen bg-gradient-to-br from-green-500 to-teal-500 flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <Megaphone className="w-16 h-16 text-white mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Marketing Solutions</h2>
              <p className="text-white/90 text-lg mb-8">
                Strategic digital marketing campaigns that drive results. We help you reach your target audience and achieve your business goals through data-driven approaches.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Social Media', 'SEO', 'Content Strategy', 'Email Marketing'].map((service) => (
                  <div key={service} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Marketing Strategy"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section
        ref={(el) => (sections.current[3] = el)}
        className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Code2 className="w-16 h-16 text-white mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Development</h2>
              <p className="text-white/90 text-lg mb-8">
                Custom web and mobile solutions built with cutting-edge technologies. Our development team creates scalable, secure, and efficient applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Web Apps', 'Mobile Apps', 'API Integration', 'Cloud Solutions'].map((service) => (
                  <div key={service} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Development Process"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section
        ref={(el) => (sections.current[4] = el)}
        className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <Camera className="w-16 h-16 text-white mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Photography</h2>
              <p className="text-white/90 text-lg mb-8">
                Professional photography services for events, products, and commercial needs. We capture moments that tell your story.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Event Coverage', 'Product Shots', 'Corporate Photos', 'Aerial Photography'].map((service) => (
                  <div key={service} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800"
                alt="Photography Equipment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Editing Section */}
      <section
        ref={(el) => (sections.current[5] = el)}
        className="min-h-screen bg-gradient-to-br from-red-600 to-orange-600 flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Video className="w-16 h-16 text-white mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Video Editing</h2>
              <p className="text-white/90 text-lg mb-8">
                Professional video editing and production services. We transform raw footage into compelling visual stories.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Commercial Videos', 'Event Coverage', 'Motion Graphics', 'Social Media Content'].map((service) => (
                  <div key={service} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800"
                alt="Video Editing Suite"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => (sections.current[6] = el)}
        className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Form */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-6">Let's work together!</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-indigo-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex-1 space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-300">
                    <Mail className="w-6 h-6" />
                    <a href="mailto:ifurtech@gmail.com" className="hover:text-white transition-colors">
                      ifurtech@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Phone className="w-6 h-6" />
                    <a href="tel:+212600000000" className="hover:text-white transition-colors">
                      +212 6 00 00 00 00
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <MapPin className="w-6 h-6" />
                    <span>Tangier, Morocco</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Globe className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
                <img
                  src="https://images.unsplash.com/photo-1589476993333-f55b84301219?auto=format&fit=crop&q=80&w=800"
                  alt="Tangier Location"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © 2024 Ifurtech. All rights reserved.
            </div>
            <div className="flex items-center gap-8">
              <a href="tel:+212600000000" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +212 6 00 00 00 00
              </a>
              <a href="mailto:ifurtech@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                ifurtech@gmail.com
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Globe className="w-4 h-4" />
                www.ifurtech.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;