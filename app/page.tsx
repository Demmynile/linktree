import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle, Palette, Shield, Smartphone, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon : <Palette className="w-8 h-8" />,
    title: "Fully Customizable",
    description : "Make your link page uniquely yours with custom themes, colors , and layouts that match your brand.", 
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Track clicks, views, and engagement with detailed analytics to understand your audience better.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Optimized",
    description: "Your link page looks great on any device, ensuring a seamless experience for your visitors.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast and Reliable",
    description: "Built on a robust infrastructure, your link page loads quickly and is always available.",
  },
  {
    icon : <Shield className="w-8 h-8" />,
    title: "Secure and Private",
    description: "We prioritize your privacy and security, ensuring your data is safe and secure.", 
  },
  {
    icon : <Users className="w-8 h-8" />,
    title: "Community Support",
    description: "Join a vibrant community of users, share tips, and get support from fellow creators.",
  }
]

const testimonials = [
  {
    name: "Jane Doe",
    role: "Content Creator",
    feedback : "Simmer Link has transformed the way I share my content. The customization options are fantastic!",
    ranking: "5"
  },
  {
    name: "John Smith",
    role: "Business Owner",
    feedback : "The analytics features help me understand my audience better. Highly recommend!",
    ranking: "5"
  },
  {
    name: "Alice Johnson",
    role: "Influencer",
    feedback : "I love how easy it is to create a beautiful link page. It’s a game changer for my brand.",
    ranking: "5"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header isFixed={true}/>
      
      {/* Hero Section */}
      <section className="px-4 py-20 lg:px-8 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                One Link,
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Infinite Possibilities
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Create a beautiful, customizable link in bio page that showcases all your important links. Perfect for creators , businesses and anyone who wants to share multiple links effortlessly,

              </p>
              <div className="flex flex-col sm:flex-row  gap-4 justify-center items-center pt-8">
                <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600  hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 h-auto"
                >
                <Link href="/dashboard" className="flex items-center gap-2">
                   Start Building Free
                 <ArrowRight className="w-5 h-5" />
                </Link>
                </Button>

                <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600
                hover:bg-purple-600 hover:text-white text-lg px-8 py-6 h-auto"
                >
                <Link href="#features" >
                  See How It Works
                 
                </Link>
                </Button>
              </div>
              <div className="pt-12">
                <p className="text-sm text-gray-500 mb-4">
                  Trusted by 10,000+ users worldwide
                </p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <div className="text-2xl font-bold text-gray-400">Creators</div>
                  <div className="text-2xl font-bold text-gray-400">Business</div>
                  <div className="text-2xl font-bold text-gray-400">Influencers</div>
                   <div className="text-2xl font-bold text-gray-400">Artist</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id = "features" className="px-4 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you share your content and grow your audience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50
                hover:shadow-2xl transition-all duration=300">
                <div className=" text-purple-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Social Proof Section */}
      <section className="px-4 lg:px-8 py-20">
        <div className ="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our users are saying about Simmer Link
            </p>
           </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
            key = {index}
            className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl shadow-gray-200/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(Number(testimonial.ranking))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonial.feedback}&ldquo;
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-50">
                  {testimonial.role}
                </div>
              </div>
        
            </div>
          ))}
        </div>
        

      </section>

      {/* CTA */}
      <section className="px-4 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 lg:p-16 text-center
           text-white shadow-2xl">
            <h2 className="text-xl mb-8 opacity-90">
              Ready to get started
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators and businesses using Simmer Link to share their content and grow their audience.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
            >
              <Link href="/dashboard" className="flex items-center gap-2">
                Create Your Simmer Link
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button> 
             
          <div className="mt-8 flex flex-col sm:flex-row 
               items-center justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Free to start
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle  className="w-4 h-4" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle  className="w-4 h-4" />
              Set up in 15 seconds
            </div>
          </div>
          </div>
         </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-white/20 px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gray-900">
                Simmer Link
              </div>
              <p className="text-gray-600">
                The easiest way to share all your important links in one place.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <div className="space-y-2 text-gray-600">
                <div>Features</div>
                <div>Pricing</div>
                <div>Analytics</div>
                <div>Integrations</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <div className="space-y-2 text-gray-600">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <div className="space-y-2 text-gray-600">
                <div>Help Center</div>
                <div>Documentation</div>
                <div>Community</div>
                <div>Status</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Any Product by <span className="text-purple-600">Simmer</span>. All rights reservation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
