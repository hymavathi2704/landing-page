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
        
        {/* NEW LEGAL ROUTES */}
        <Route path="/Privacy Policy" element={<PrivacyPolicy />} />
        <Route path="/Refund and Cancellation Policy" element={<RefundAndCancellationPolicy />} />
        <Route path="/Terms and Conditions" element={<TermsAndConditions />} />

      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;