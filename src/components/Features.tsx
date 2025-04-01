
import { Check, Image, Cloud, MessageSquare } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Disease Detection",
      description: "Upload images of your crops and our AI will identify diseases, pests, and nutrient deficiencies with over 95% accuracy.",
      icon: Image,
    },
    {
      title: "Real-time Weather Integration",
      description: "Access hyperlocal weather data and forecasts to make informed decisions about irrigation, planting, and harvesting.",
      icon: Cloud,
    },
    {
      title: "Agricultural AI Chatbot",
      description: "Get instant answers to your farming questions from our specialized agricultural chatbot assistant.",
      icon: MessageSquare,
    },
    {
      title: "Actionable Insights",
      description: "Receive personalized recommendations for crop management, pesticide application, and yield optimization.",
      icon: Check,
    },
  ];

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Smart Farming Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered platform provides comprehensive tools for modern agriculture.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-emerald-500 hover:shadow-lg transition-shadow duration-300 rounded-xl border border-gray-100">
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors duration-300">
                    <feature.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-emerald-600 rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
