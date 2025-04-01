
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, AlertTriangle, Check } from "lucide-react";
import { toast } from "sonner";
import { analyzeImage } from "@/lib/api";
import { AnalysisResult, getAnalysisHistory } from "@/lib/analysisHistoryService";
import AnalysisHistory from "@/components/AnalysisHistory";

const AIAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any | null>(null);
  const [analysisHistory, setAnalysisHistory] = useState<AnalysisResult[]>([]);

  // Load analysis history on component mount
  useEffect(() => {
    refreshAnalysisHistory();
  }, []);

  const refreshAnalysisHistory = () => {
    setAnalysisHistory(getAnalysisHistory());
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      // Reset analysis results when new file is selected
      setAnalysisResults(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast.error("Please select an image to analyze");
      return;
    }

    setIsAnalyzing(true);
    try {
      // Call the API function to analyze the image
      const results = await analyzeImage(selectedFile);
      setAnalysisResults(results);
      refreshAnalysisHistory();
      toast.success("Analysis completed successfully!");
    } catch (error) {
      console.error("Analysis error:", error);
      toast.error("Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <header className="bg-white dark:bg-gray-800 shadow-sm mb-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">AI Crop Analysis</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Upload crop images for AI-powered analysis</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Upload and Results */}
          <div className="lg:col-span-7 space-y-8">
            {/* Image Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Image</CardTitle>
                <CardDescription>Upload a crop image for AI analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    preview ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-700' : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  {preview ? (
                    <div className="space-y-4">
                      <img 
                        src={preview} 
                        alt="Preview" 
                        className="mx-auto max-h-64 rounded"
                      />
                      <p className="text-sm text-gray-600 dark:text-gray-400">{selectedFile?.name}</p>
                      <Button variant="outline" onClick={() => {
                        setSelectedFile(null);
                        setPreview(null);
                        setAnalysisResults(null);
                      }}>
                        Change Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">Drag and drop crop images, or</p>
                      <div>
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Button variant="outline" className="bg-emerald-100 hover:bg-emerald-200 border-emerald-300 dark:bg-emerald-900/30 dark:border-emerald-700" onClick={() => document.getElementById('file-upload')?.click()}>
                            Browse Files
                          </Button>
                          <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  )}
                </div>
                
                {preview && (
                  <div className="mt-4">
                    <Button 
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        "Analyze Image"
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Analysis Results Section */}
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>AI-powered insights from your crop image</CardDescription>
              </CardHeader>
              <CardContent>
                {isAnalyzing ? (
                  <div className="flex flex-col items-center justify-center h-64 space-y-4">
                    <Loader2 className="h-12 w-12 text-emerald-600 animate-spin" />
                    <p className="text-gray-600 dark:text-gray-400">Processing your image with our AI model...</p>
                  </div>
                ) : analysisResults ? (
                  <div className="space-y-6">
                    {/* Health Score */}
                    <div>
                      <h3 className="text-lg font-medium mb-2">Crop Health Score</h3>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                          <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400">{analysisResults.healthScore}%</span>
                        </div>
                        <div>
                          <p className="text-gray-700 dark:text-gray-300">{analysisResults.healthStatus}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Detected Issues */}
                    <div>
                      <h3 className="text-lg font-medium mb-2">Detected Issues</h3>
                      {analysisResults.issues.length > 0 ? (
                        <ul className="space-y-2">
                          {analysisResults.issues.map((issue: any, index: number) => (
                            <li key={index} className="flex items-start space-x-2">
                              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                              <div>
                                <p className="font-medium">{issue.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{issue.description}</p>
                                <p className="text-xs text-gray-500">Confidence: {issue.confidence}%</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                          <Check className="h-5 w-5" />
                          <p>No issues detected in this image</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Recommendations */}
                    <div>
                      <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                      <ul className="space-y-2">
                        {analysisResults.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="text-gray-700 dark:text-gray-300">• {rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <p>Upload and analyze an image to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column: Analysis History */}
          <div className="lg:col-span-5">
            <AnalysisHistory 
              analyses={analysisHistory} 
              onRefresh={refreshAnalysisHistory} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIAnalysis;
