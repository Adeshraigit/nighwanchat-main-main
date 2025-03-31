import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import Homepage from './pages/Homepage';
import CareerPage from './Pages/CareerPage';
import BlogPage from './Pages/BlogPage';
import BlogDetailPage from './Pages/BlogDetailPage';
import BusinessConsulting from './Pages/BusinessConsultingPage';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/NotFound';
import PortfolioPage from './Pages/PortfolioPage';
import ServicedetailsPage from './Pages/ServicedetailsPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import Portfoliodetail from './Pages/portfolio-detail';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import JobDetail from './Pages/JobDetail';
import ScrollToTop from './components/ScrolltoTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* The RootLayout wraps all these child routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="our-roots" element={<AboutPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="job/:id" element={<JobDetail />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="service-details/:type" element={<ServicedetailsPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blogs/:type" element={<BlogDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="lean" element={<BusinessConsulting />} />
          <Route path="products" element={<PortfolioPage />} />
          <Route path="product-detail/:type" element={<Portfoliodetail />} />
          {/* Catch-all for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
