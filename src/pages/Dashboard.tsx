
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";
import CropHealthChart from "@/components/CropHealthChart";
import WeatherCard from "@/components/WeatherCard";
import ActivityFeed from "@/components/ActivityFeed";
import { 
  getCropHealthData, 
  getDiseaseData, 
  getWeatherForecast, 
  getRecentActivities,
  CropHealth,
  DiseaseData,
  WeatherForecast,
  ActivityItem
} from "@/lib/dashboardService";

const Dashboard = () => {
  // State for the different data types
  const [cropHealth, setCropHealth] = useState<CropHealth | null>(null);
  const [diseases, setDiseases] = useState<DiseaseData[]>([]);
  const [weatherForecasts, setWeatherForecasts] = useState<WeatherForecast[]>([]);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock historical health data
  const [healthHistory, setHealthHistory] = useState<{ date: string; health: number }[]>([]);

  useEffect(() => {
    // Simulate API calls
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        
        // Get all the data
        const healthData = getCropHealthData();
        const diseaseData = getDiseaseData();
        const forecastData = getWeatherForecast();
        const activityData = getRecentActivities();
        
        // Generate mock historical data
        const mockHistory = generateMockHealthHistory();
        
        // Update state
        setCropHealth(healthData);
        setDiseases(diseaseData);
        setWeatherForecasts(forecastData);
        setActivities(activityData);
        setHealthHistory(mockHistory);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Generate mock historical health data
  const generateMockHealthHistory = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      data.push({
        date: date.toISOString(),
        health: Math.floor(Math.random() * 15) + 80 // Random between 80-95
      });
    }
    
    return data;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Farm Dashboard</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Upload Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Upload Crop Images for Analysis</h2>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Drag and drop crop images, or</p>
            <Link to="/ai-analysis">
              <Button className="mt-2 bg-emerald-600 hover:bg-emerald-700">Browse Files</Button>
            </Link>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
        
        {/* Health Trends Chart - New component */}
        <div className="mb-6">
          <CropHealthChart data={healthHistory} />
        </div>
        
        {/* Analysis Results */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          {/* Health Score */}
          <Card>
            <CardHeader>
              <CardTitle>Crop Health Score</CardTitle>
              <CardDescription>Based on recent analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                {isLoading ? (
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                ) : (
                  <>
                    <span className="text-5xl font-bold text-emerald-600">{cropHealth?.score}%</span>
                    <Progress value={cropHealth?.score} className="h-2 mt-3" />
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                      {cropHealth?.status}
                    </p>
                  </>
                )}
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
                {isLoading ? (
                  <div className="animate-pulse space-y-3">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                ) : (
                  diseases.map((disease, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${disease.color} mr-2`}></div>
                        <span>{disease.name}</span>
                      </div>
                      <span className="font-medium">{disease.percentage}%</span>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Weather Forecast - Using new component */}
          <WeatherCard forecasts={weatherForecasts} />
        </div>
        
        {/* Recent Activity - Using new component */}
        <ActivityFeed activities={activities} />
      </main>
    </div>
  );
};

export default Dashboard;
