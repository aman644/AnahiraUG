import { Target, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative bg-gradient-to-br from-[#1F2121] via-[#252727] to-[#1F2121] text-white py-24 rounded-3xl mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMC0xMGgxMHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">About Premier Products</h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Transforming spaces with premium architectural finishes since 2010
          </p>
        </div>
      </section>

      <section className="py-20 mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="group">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[rgb(59 130 246)]/20 to-[rgb(59 130 246)]/10 overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(33,128,141,0.3)]">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our story"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300 text-lg">
                <p>
                  Founded in 2010, Premier Products began with a simple mission: to bring exceptional architectural finishes to designers, builders, and homeowners across North America.
                </p>
                <p>
                  What started as a small distribution company has grown into a leading supplier of premium wall panels, wallpapers, and architectural elements. Today, we serve thousands of satisfied customers from our state-of-the-art facilities.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer service has made us a trusted partner for residential and commercial projects of all sizes.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-300">Deliver premium products that inspire beautiful, lasting spaces</p>
            </div>

            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Values</h3>
              <p className="text-slate-300">Integrity, excellence, and customer-first thinking in everything we do</p>
            </div>

            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality First</h3>
              <p className="text-slate-300">Every product meets our rigorous standards for durability and finish</p>
            </div>

            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-slate-300">Knowledgeable staff ready to help with any project requirement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2121]/40 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">By The Numbers</h2>
            <p className="text-xl text-slate-300">Our growth reflects our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-slate-300 text-lg">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-slate-300 text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-slate-300 text-lg">Retail Partners</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-slate-300 text-lg">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2121]/60 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sustainability Commitment</h2>
              <div className="space-y-4 text-slate-300 text-lg">
                <p>
                  We're committed to reducing our environmental impact through sustainable sourcing, eco-friendly packaging, and energy-efficient operations.
                </p>
                <p>
                  Many of our products are made from recycled materials and are 100% recyclable at end of life. We partner with manufacturers who share our commitment to environmental responsibility.
                </p>
                <p>
                  Our warehouse operates on renewable energy, and we continuously seek ways to minimize waste throughout our supply chain.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[rgb(59 130 246)]/20 to-[rgb(59 130 246)]/10 overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(33,128,141,0.3)]">
                <img
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sustainability"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
