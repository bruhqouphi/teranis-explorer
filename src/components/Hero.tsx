
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-emerald-50 to-white pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-emerald-600">
                AI-Powered Agriculture
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="text-gray-900">Transform Your </span>
                <span className="text-emerald-600">Farming</span>
                <span className="text-gray-900"> with AI</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Our advanced AI platform analyzes crop health, detects diseases, and provides actionable insights to optimize your yield and reduce losses.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-center lg:justify-start">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
                  alt="Farm monitoring with drone"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white text-emerald-600 border-emerald-600">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Abstract shapes for design flair */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-56 h-56 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default Hero;
