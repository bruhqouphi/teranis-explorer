
import { Users, Award, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission & Vision
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We're on a mission to revolutionize agriculture through AI and data-driven insights.
          </p>
        </div>

        <div className="mt-20">
          <div className="lg:text-center">
            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Why Choose TeranisAI?
            </h3>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              Our team of agricultural experts and AI engineers work together to create solutions that make a real difference for farmers worldwide.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">Expert Team</h4>
                <p className="mt-2 text-base text-gray-500">
                  Our team combines expertise in agriculture, data science, and artificial intelligence to create powerful solutions.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">Award-Winning Technology</h4>
                <p className="mt-2 text-base text-gray-500">
                  Our AI-powered platform has received recognition for its accuracy and effectiveness in crop analysis.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-medium text-gray-900">Research-Backed</h4>
                <p className="mt-2 text-base text-gray-500">
                  We collaborate with leading agricultural universities to ensure our technology is based on the latest research.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="max-w-xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Our Story
                  </h3>
                  <p className="mt-4 text-gray-500 md:text-lg">
                    Founded in 2020, TeranisAI was born from a simple observation: farmers needed better tools to combat crop diseases and optimize yields in a changing climate.
                  </p>
                  <p className="mt-4 text-gray-500 md:text-lg">
                    We've since grown into a global team of agricultural experts, data scientists, and engineers dedicated to creating AI-powered solutions that make a real difference.
                  </p>
                  <div className="mt-8">
                    <button className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                      Learn more about our journey
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  alt="Team working in an agricultural setting"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
