import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative bg-gradient-to-br from-[#1F2121] via-[#252727] to-[#1F2121] text-white py-24 rounded-3xl mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMC0xMGgxMHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Have questions? Our team is here to help with product selection, orders, and project support
          </p>
        </div>
      </section>

      <section className="py-20 mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8">Send Us A Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#1F2121] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#1F2121] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-[#1F2121] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-[#1F2121] border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="retailer">Retailer Partnership</option>
                    <option value="installer">Installer Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1F2121] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-600 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-slate-300 mb-1">Sales: +49 30 1234 5678</p>
                    <p className="text-slate-300">Support: +49 30 1234 5679</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-slate-300 mb-1">sales@anahira.de</p>
                    <p className="text-slate-300">support@anahira.de</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                    <p className="text-slate-300">
                      Unter den Linden 78<br />
                      Mitte<br />
                      10117 Berlin, Germany
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                    <p className="text-slate-300 mb-1">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-slate-300 mb-1">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-slate-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
