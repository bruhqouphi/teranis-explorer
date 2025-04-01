
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, CloudLightning } from "lucide-react";
import { WeatherForecast } from '@/lib/dashboardService';

interface WeatherCardProps {
  forecasts: WeatherForecast[];
}

const WeatherCard: React.FC<WeatherCardProps> = ({ forecasts }) => {
  // Function to get the appropriate weather icon
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="h-6 w-6 text-blue-500" />;
      case 'rainy':
        return <CloudRain className="h-6 w-6 text-blue-700" />;
      case 'stormy':
        return <CloudLightning className="h-6 w-6 text-gray-600" />;
      default:
        return <Cloud className="h-6 w-6 text-gray-500" />;
    }
  };

  // Format date to readable string
  const formatDate = (date: Date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  // Helper function to check if date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  // Helper function to check if date is tomorrow
  const isTomorrow = (date: Date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Forecast</CardTitle>
        <CardDescription>Next 3 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {forecasts.map((forecast, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{formatDate(forecast.date)}</p>
                <p className="text-sm text-gray-500">
                  {forecast.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
              <div className="flex items-center">
                {getWeatherIcon(forecast.condition)}
                <span className="ml-2">{forecast.temperature}°C</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
