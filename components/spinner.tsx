import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
      <p className="text-gray-500 mt-4">Loading job listings...</p>
    </div>
  );
};