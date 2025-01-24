// app/results/page.tsx
import React, { Suspense } from 'react';
import ResultsComponent from './ResultsComponent';

const ResultsPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsComponent />
    </Suspense>
  );
};

export default ResultsPage;
