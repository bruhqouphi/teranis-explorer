
/**
 * Dashboard data service
 * This service provides methods to fetch data for the dashboard
 */

export interface CropHealth {
  score: number;
  status: string;
  timestamp: Date;
}

export interface DiseaseData {
  name: string;
  percentage: number;
  color: string;
}

export interface WeatherForecast {
  date: Date;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  temperature: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  icon: 'bell' | 'chart' | 'cloud' | 'upload';
  timestamp: Date;
}

// Mock function to get crop health data
export const getCropHealthData = (): CropHealth => {
  // In a real app, this would make an API call
  return {
    score: Math.floor(Math.random() * 25) + 75, // 75-99
    status: "Your crops are in good health with some minor issues detected.",
    timestamp: new Date()
  };
};

// Mock function to get disease detection data
export const getDiseaseData = (): DiseaseData[] => {
  // In a real app, this would make an API call
  return [
    { name: "Powdery Mildew", percentage: 12, color: "bg-red-500" },
    { name: "Nutrient Deficiency", percentage: 8, color: "bg-yellow-500" },
    { name: "Healthy", percentage: 80, color: "bg-emerald-500" }
  ];
};

// Mock function to get weather forecast
export const getWeatherForecast = (): WeatherForecast[] => {
  // In a real app, this would make an API call to a weather service
  const today = new Date();
  
  return [
    { 
      date: today, 
      condition: 'cloudy', 
      temperature: 24 
    },
    { 
      date: new Date(today.setDate(today.getDate() + 1)), 
      condition: 'sunny', 
      temperature: 27 
    },
    { 
      date: new Date(today.setDate(today.getDate() + 1)), 
      condition: 'rainy', 
      temperature: 22 
    }
  ];
};

// Mock function to get recent activities
export const getRecentActivities = (): ActivityItem[] => {
  // In a real app, this would make an API call
  const now = new Date();
  const yesterday = new Date(now.setDate(now.getDate() - 1));
  const twoDaysAgo = new Date(now.setDate(now.getDate() - 2));
  
  return [
    {
      id: "1",
      title: "New AI Analysis Complete",
      description: "Your crop analysis has been completed. View results.",
      icon: "bell",
      timestamp: new Date()
    },
    {
      id: "2",
      title: "Yield Prediction Updated",
      description: "Your expected yield for this season has been updated based on recent data.",
      icon: "chart",
      timestamp: yesterday
    },
    {
      id: "3",
      title: "Weather Alert",
      description: "Potential rainfall expected in your region over the next 48 hours.",
      icon: "cloud",
      timestamp: twoDaysAgo
    }
  ];
};
