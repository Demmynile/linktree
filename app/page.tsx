import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Palette, Shield, Smartphone, Users, Zap } from "lucide-react";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
    </div>
  );
}
