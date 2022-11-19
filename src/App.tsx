import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

const Homepage = lazy(() => import('./pages/homepage'));

function App() {
  return (
    <div className="text-sm">
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
