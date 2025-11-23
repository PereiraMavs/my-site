'use client';

import { useScholarData } from '@/hooks/useScholarData';

export default function HeroStats() {
  const { data } = useScholarData();

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return `${num}+`;
  };

  return (
    <div className="grid grid-cols-3 gap-6 pt-4">
      <div className="text-center lg:text-left">
        <div className="text-3xl font-bold text-slate-500">3+</div>
        <div className="text-sm text-slate-600">Years Industry</div>
      </div>
      <div className="text-center lg:text-left">
        <div className="text-3xl font-bold text-blue-400">
          {data ? formatNumber(data.citations) : '...'}
        </div>
        <div className="text-sm text-slate-600">Citations</div>
      </div>
      <div className="text-center lg:text-left">
        <div className="text-3xl font-bold text-slate-500">
          {data ? formatNumber(data.publications) : '...'}
        </div>
        <div className="text-sm text-slate-600">Publications</div>
      </div>
    </div>
  );
}
