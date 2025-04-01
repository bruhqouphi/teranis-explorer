
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, BarChart2, Cloud, Upload } from "lucide-react";
import { ActivityItem } from '@/lib/dashboardService';

interface ActivityFeedProps {
  activities: ActivityItem[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  // Function to get the appropriate icon
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'bell':
        return <Bell className="h-6 w-6 text-emerald-600" />;
      case 'chart':
        return <BarChart2 className="h-6 w-6 text-emerald-600" />;
      case 'cloud':
        return <Cloud className="h-6 w-6 text-emerald-600" />;
      case 'upload':
        return <Upload className="h-6 w-6 text-emerald-600" />;
      default:
        return <Bell className="h-6 w-6 text-emerald-600" />;
    }
  };

  // Format timestamp to readable string
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return `Today at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    } else if (diffInDays === 1) {
      return `Yesterday at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + 
             ` at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest farm activities and AI analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex">
              <div className="mr-4 flex-shrink-0">
                {getIcon(activity.icon)}
              </div>
              <div>
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{formatTimestamp(activity.timestamp)}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
