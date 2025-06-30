import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 text-lg px-8"
                >
                <Link href="/dashboard" className="flex items-center gap-2">
                   Start Building Free
                 <ArrowRight className="w-5 h-5" />
                </Link>
                </Button>

                <Button
                asChild
                size="lg"
                className="border"
                >
                <Link href="/dashboard" className="flex items-center gap-2">
                   Start Building Free
                 <ArrowRight className="w-5 h-5" />
                </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
         
      </section>
    </div>
  );
}
