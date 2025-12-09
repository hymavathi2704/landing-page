import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import LandingPage from './pages/landing-page';

// Import new legal pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundAndCancellationPolicy from './pages/RefundAndCancellationPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        
        {/* UPDATED LEGAL ROUTES: Using hyphens for cleaner URLs */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-and-cancellation-policy" element={<RefundAndCancellationPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;