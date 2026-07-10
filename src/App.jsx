import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Features = lazy(() => import('./pages/Features'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Contact = lazy(() => import('./pages/Contact'));
const DeleteAccount = lazy(() => import('./pages/DeleteAccount'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="h-10 w-10 rounded-full border-4 border-primary-100 border-t-primary-600 animate-spin" />
    </div>
  );
}

function NotFound() {
  return (
    <section className="min-h-[60vh] bg-gray-50 flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">404</p>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Page not found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for may have moved, or the address may be incorrect.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center justify-center">
          Go to Home
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
