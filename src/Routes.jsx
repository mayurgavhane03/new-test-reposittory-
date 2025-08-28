import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import CampaignPerformanceOverviewDashboard from "pages/campaign-performance-overview-dashboard";
import RealTimeCampaignMonitoring from "pages/real-time-campaign-monitoring";
import TemplatePerformanceAnalytics from "pages/template-performance-analytics";
import SubscriberAnalyticsDashboard from "pages/subscriber-analytics-dashboard";
import RealEstatePropertyManagementDashboard from "pages/real-estate-property-management-dashboard";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<CampaignPerformanceOverviewDashboard />} />
          <Route path="/campaign-performance-overview-dashboard" element={<CampaignPerformanceOverviewDashboard />} />
          <Route path="/real-time-campaign-monitoring" element={<RealTimeCampaignMonitoring />} />
          <Route path="/template-performance-analytics" element={<TemplatePerformanceAnalytics />} />
          <Route path="/subscriber-analytics-dashboard" element={<SubscriberAnalyticsDashboard />} />
          <Route path="/real-estate-property-management-dashboard" element={<RealEstatePropertyManagementDashboard />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;