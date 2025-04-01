
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, AlertTriangle, Check, Download, Trash2 } from "lucide-react";
import { AnalysisResult, getAnalysisById, deleteAnalysis } from "@/lib/analysisHistoryService";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

const AnalysisDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    if (id) {
      const result = getAnalysisById(id);
      if (result) {
        setAnalysis(result);
      } else {
        toast.error("Analysis not found");
        navigate("/ai-analysis");
      }
    }
  }, [id, navigate]);

  const handleDelete = () => {
    if (id && analysis) {
      deleteAnalysis(id);
      toast.success("Analysis deleted");
      navigate("/ai-analysis");
    }
  };

  // Format date to readable string
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  if (!analysis) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-xl font-medium">Loading analysis...</h2>
          <p className="text-gray-500 mt-2">Please wait while we retrieve the analysis details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <header className="bg-white dark:bg-gray-800 shadow-sm mb-8">
        <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <Button variant="outline" className="mb-4" onClick={() => navigate("/ai-analysis")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Analysis
          </Button>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Analysis Details</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
            <Calendar className="h-4 w-4 mr-2" />
            <p>{formatDate(analysis.date)}</p>
          </div>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image and Health Score */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Crop Image</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={analysis.imageSrc} 
                  alt="Analyzed crop" 
                  className="w-full h-auto rounded-md shadow-md" 
                />
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Health Score</h3>
                  <div className="text-4xl font-bold text-center mb-2 text-emerald-600 dark:text-emerald-400">
                    {analysis.healthScore}%
                  </div>
                  <Progress value={analysis.healthScore} className="h-2" />
                  <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    {analysis.healthStatus}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="destructive" className="flex items-center" onClick={handleDelete}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Analysis Results */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Detected Issues</CardTitle>
                <CardDescription>Problems identified in your crop</CardDescription>
              </CardHeader>
              <CardContent>
                {analysis.issues.length > 0 ? (
                  <div className="space-y-6">
                    {analysis.issues.map((issue, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-lg">{issue.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">{issue.description}</p>
                            
                            <div className="mt-3">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Confidence</span>
                                <span className="font-medium">{issue.confidence}%</span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                                <div 
                                  className="bg-amber-500 h-1.5 rounded-full" 
                                  style={{ width: `${issue.confidence}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 py-6">
                    <Check className="h-6 w-6" />
                    <p className="text-lg">No issues detected in this image</p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>Suggested actions to improve crop health</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {analysis.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex">
                      <span className="text-emerald-600 dark:text-emerald-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalysisDetail;
