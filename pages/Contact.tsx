
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-offWhite">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-maroon mb-6">Let's Build Your Workforce Together</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a hiring requirement or need HR consulting? Reach out to our experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                <h3 className="text-2xl font-display font-bold text-brand-maroon mb-8">Contact Details</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-lightGrey flex items-center justify-center text-brand-maroon flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Our Location</p>
                      <p className="text-gray-600">Pan-India Reach, Delhi Office</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-lightGrey flex items-center justify-center text-brand-maroon flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 XXX XXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-lightGrey flex items-center justify-center text-brand-maroon flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Email</p>
                      <p className="text-gray-600">info@arkayugahr.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-lightGrey flex items-center justify-center text-brand-maroon flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon – Sat | 9:30 AM – 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 min-h-[500px] flex flex-col justify-center">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-brand-maroon mb-4">Request Received!</h3>
                    <p className="text-gray-600 text-lg mb-8">Our HR consultants will call you back within 24 business hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-gold font-bold hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-display font-bold text-brand-maroon mb-8">Send Your Requirement</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            placeholder="e.g. John Doe"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-brand-lightGrey border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Business Email</label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            placeholder="e.g. john@company.com"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-brand-lightGrey border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            placeholder="e.g. +91 9876543210"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-brand-lightGrey border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Company Name</label>
                          <input 
                            type="text" 
                            name="company"
                            placeholder="e.g. Acme Corp"
                            value={formState.company}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-brand-lightGrey border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">How can we help?</label>
                        <textarea 
                          name="message"
                          required
                          rows={4}
                          placeholder="Describe your hiring needs or HR consulting requirements..."
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-brand-lightGrey border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-xl outline-none transition-all resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-5 bg-brand-maroon text-white font-bold rounded-xl hover:bg-brand-lightMaroon transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                          <>
                            Submit Requirement <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-gray-200 relative group">
        <div className="absolute inset-0 bg-brand-maroon/5 flex items-center justify-center">
           <div className="text-center">
              <MapPin className="w-12 h-12 text-brand-maroon mx-auto mb-4" />
              <p className="text-xl font-display font-bold text-brand-maroon">Interactive Map for Delhi Office</p>
              <p className="text-gray-500">Pan-India Recruitment Network Active</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
