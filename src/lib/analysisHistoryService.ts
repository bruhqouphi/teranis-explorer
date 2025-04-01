
import { toast } from "sonner";

export interface AnalysisResult {
  id: string;
  date: Date;
  imageSrc: string;
  healthScore: number;
  healthStatus: string;
  issues: {
    name: string;
    description: string;
    confidence: number;
  }[];
  recommendations: string[];
}

// Mock storage for analysis history (would be a database in production)
let analysisHistory: AnalysisResult[] = [];

// Get all analysis history
export const getAnalysisHistory = (): AnalysisResult[] => {
  return [...analysisHistory];
};

// Get a specific analysis by ID
export const getAnalysisById = (id: string): AnalysisResult | undefined => {
  return analysisHistory.find(analysis => analysis.id === id);
};

// Save a new analysis to history
export const saveAnalysis = (result: Omit<AnalysisResult, 'id' | 'date'>): AnalysisResult => {
  const newAnalysis: AnalysisResult = {
    ...result,
    id: `analysis-${Date.now()}`,
    date: new Date()
  };
  
  analysisHistory = [newAnalysis, ...analysisHistory];
  toast.success("Analysis saved to history");
  return newAnalysis;
};

// Delete an analysis from history
export const deleteAnalysis = (id: string): boolean => {
  const initialLength = analysisHistory.length;
  analysisHistory = analysisHistory.filter(analysis => analysis.id !== id);
  
  if (analysisHistory.length < initialLength) {
    toast.success("Analysis deleted from history");
    return true;
  }
  
  toast.error("Analysis not found");
  return false;
};

// Clear all analysis history
export const clearAnalysisHistory = (): void => {
  analysisHistory = [];
  toast.success("Analysis history cleared");
};
