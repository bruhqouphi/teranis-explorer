
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, BarChart2, Cloud, Bell } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold text-gray-900">Farm Dashboard</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Upload Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-medium text-gray-900 mb-4">Upload Crop Images for Analysis</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Drag and drop crop images, or</p>
            <Button className="mt-2 bg-emerald-600 hover:bg-emerald-700">Browse Files</Button>
            <p className="mt-2 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
        
        {/* Analysis Results */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Health Score */}
          <Card>
            <CardHeader>
              <CardTitle>Crop Health Score</CardTitle>
              <CardDescription>Based on recent analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <span className="text-5xl font-bold text-emerald-600">86%</span>
                <Progress value={86} className="h-2 mt-3" />
                <p className="mt-4 text-sm text-gray-500">
                  Your crops are in good health. Some minor issues detected.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Disease Detection */}
          <Card>
            <CardHeader>
              <CardTitle>Disease Detection</CardTitle>
              <CardDescription>Last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span>Powdery Mildew</span>
                  </div>
                  <span className="font-medium">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span>Nutrient Deficiency</span>
                  </div>
                  <span className="font-medium">8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                    <span>Healthy</span>
                  </div>
                  <span className="font-medium">80%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Weather Forecast */}
          <Card>
            <CardHeader>
              <CardTitle>Weather Forecast</CardTitle>
              <CardDescription>Next 3 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Today</p>
                    <p className="text-sm text-gray-500">May 15, 2023</p>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="h-6 w-6 text-blue-500 mr-2" />
                    <span>24°C</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Tomorrow</p>
                    <p className="text-sm text-gray-500">May 16, 2023</p>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="h-6 w-6 text-yellow-500 mr-2" />
                    <span>27°C</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Wednesday</p>
                    <p className="text-sm text-gray-500">May 17, 2023</p>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="h-6 w-6 text-gray-500 mr-2" />
                    <span>22°C</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activity */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest farm activities and AI analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <Bell className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">New AI Analysis Complete</p>
                    <p className="text-sm text-gray-500">Your crop analysis from May 14 has been completed. View results.</p>
                    <p className="text-xs text-gray-400 mt-1">Today at 10:30 AM</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <BarChart2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">Yield Prediction Updated</p>
                    <p className="text-sm text-gray-500">Your expected yield for this season has been updated based on recent data.</p>
                    <p className="text-xs text-gray-400 mt-1">Yesterday at 2:15 PM</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <Cloud className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">Weather Alert</p>
                    <p className="text-sm text-gray-500">Potential rainfall expected in your region over the next 48 hours.</p>
                    <p className="text-xs text-gray-400 mt-1">May 13 at 9:00 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
