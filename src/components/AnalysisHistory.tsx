
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Trash2, Eye } from "lucide-react";
import { AnalysisResult, deleteAnalysis } from "@/lib/analysisHistoryService";
import { useNavigate } from "react-router-dom";

interface AnalysisHistoryProps {
  analyses: AnalysisResult[];
  onRefresh: () => void;
}

const AnalysisHistory: React.FC<AnalysisHistoryProps> = ({ analyses, onRefresh }) => {
  const navigate = useNavigate();
  
  const handleViewAnalysis = (id: string) => {
    navigate(`/ai-analysis/${id}`);
  };
  
  const handleDeleteAnalysis = (id: string) => {
    deleteAnalysis(id);
    onRefresh();
  };
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analysis History</CardTitle>
        <CardDescription>Previous crop analyses</CardDescription>
      </CardHeader>
      <CardContent>
        {analyses.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            <Clock className="mx-auto h-12 w-12 text-gray-400 mb-2" />
            <p>No analysis history yet</p>
            <p className="text-sm mt-1">Upload and analyze crop images to see results here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {analyses.map((analysis) => (
              <div 
                key={analysis.id} 
                className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                  <img 
                    src={analysis.imageSrc} 
                    alt="Crop" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Health: {analysis.healthScore}%</span>
                    <div 
                      className={`h-2 w-2 rounded-full ${
                        analysis.healthScore > 80 ? 'bg-green-500' : 
                        analysis.healthScore > 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                    />
                  </div>
                  <p className="text-sm text-gray-600 truncate">{analysis.issues.length} issues detected</p>
                  <p className="text-xs text-gray-400">{formatDate(analysis.date)}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleViewAnalysis(analysis.id)}
                    title="View analysis"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleDeleteAnalysis(analysis.id)}
                    title="Delete analysis"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalysisHistory;
