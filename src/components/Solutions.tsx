
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      title: "Crop Disease Detection",
      description: "Identify diseases, pests, and weeds in crops using our advanced computer vision algorithms.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&q=80",
      tag: "Computer Vision",
    },
    {
      title: "Yield Prediction",
      description: "Get accurate yield forecasts based on historical data, weather patterns, and current crop health.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80",
      tag: "Predictive Analytics",
    },
    {
      title: "Smart Irrigation",
      description: "Optimize water usage with AI-driven irrigation recommendations based on soil conditions and weather.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
      tag: "Resource Optimization",
    },
  ];

  return (
    <div id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored for Your Farm
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover how our AI-powered solutions can address specific agricultural challenges.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                  {solution.tag}
                </span>
              </div>
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="group text-emerald-600 hover:text-emerald-700">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
