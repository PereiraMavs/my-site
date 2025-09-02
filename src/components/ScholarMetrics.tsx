'use client';

import Image from 'next/image';
import { useScholarData } from '@/hooks/useScholarData';

export default function ScholarMetrics() {
  const { data, loading, error } = useScholarData();

  if (loading) {
    return (
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-emerald-100 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-emerald-100 hover:bg-white/70 transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-emerald-700 flex items-center">
          <span className="text-emerald-600 mr-2">📊</span>
          Research Impact
        </h4>
        <a 
          href="https://scholar.google.com/citations?hl=en&authuser=1&user=Kokbc-oAAAAJ" 
          className="text-xs text-emerald-600 hover:text-emerald-700 transition-colors"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Full Profile →
        </a>
      </div>
      
      <div className="grid grid-cols-4 gap-3 text-center">
        <div>
          <div className="text-lg font-bold text-purple-800">{formatNumber(data.citations)}</div>
          <div className="text-xs text-gray-600">Citations</div>
        </div>
        <div>
          <div className="text-lg font-bold text-purple-800">{data.hIndex}</div>
          <div className="text-xs text-gray-600">h-index</div>
        </div>
        <div>
          <div className="text-lg font-bold text-purple-800">{data.i10Index}</div>
          <div className="text-xs text-gray-600">i10-index</div>
        </div>
        <div>
          <div className="text-lg font-bold text-purple-800">{data.publications}</div>
          <div className="text-xs text-gray-600">Papers</div>
        </div>
      </div>
      
      {data.lastUpdated && (
        <div className="text-xs text-gray-500 mt-2 text-center">
          Last updated: {new Date(data.lastUpdated).toLocaleDateString()}
          <span className="text-gray-400 ml-1">(refreshes daily)</span>
        </div>
      )}
    </div>
  );
}
