import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, UserContext } from './UserContext.jsx';

// Pages
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import RepairsPage from "./pages/RepairsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import CheckInPage from "./pages/CheckInPage";
import Billing from "./pages/Billing";
import Bills from "./pages/Bills";
import CheckInListPage from "./pages/CheckInListPage";
import AboutUsPage from "./pages/AboutUsPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Appointments from "./pages/Appointments";
import RepliedAppointments from "./pages/RepliedAppointments";
import ACRepairPage from "./pages/ACRepairPage";
import EngineServicesPage from "./pages/EngineServicesPage";
import TinkeringServicesPage from "./pages/TinkeringServicesPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import CarWashPage from "./pages/CarWashPage";
import AlignmentPage from "./pages/AlignmentPage";
import JobOrdersList from "./pages/JobOrdersList";
import Reviews from "./pages/Reviews";
import UserActivityTracker from './pages/UserActivityTracker';
import UserAnalyticsDashboard from './pages/UserAnalyticsDashboard';


import './App.css';
import JobOrderForm from './pages/JobOrderForm.jsx';

function PrivateRoute({ element }) {
  const { user } = React.useContext(UserContext);
  return user ? element : <Navigate to="/login" />;
}

function AppRoutes() {
  const { user, checked } = React.useContext(UserContext);

  if (!checked) {
    return (
  
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200">
      
        <div className="flex flex-col items-center gap-4 p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg">
          
          <div className="w-16 h-16 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin" />
          <p className="text-gray-700 text-lg font-semibold flex items-center gap-1">
            Checking authentication
            <span className="animate-bounce text-blue-500">.</span>
            <span className="animate-bounce [animation-delay:.15s] text-blue-500">.</span>
            <span className="animate-bounce [animation-delay:.3s] text-blue-500">.</span>
          </p>
        </div>
      </div>
    );
  }
  

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

      {/* Service Pages - Public */}
      <Route path="/repairs" element={<RepairsPage />} />
      <Route path="/services/ac-repair" element={<ACRepairPage />} />
      <Route path="/services/engine-services" element={<EngineServicesPage />} />
      <Route path="/services/tinkering" element={<TinkeringServicesPage />} />
      <Route path="/services/painting" element={<AccessoriesPage />} />
      <Route path="/services/wheel-alignment" element={<CarWashPage />} />
      <Route path="/services/car-wash" element={<AlignmentPage />} />
      <Route path="/job-order" element={<JobOrderForm />} />
      <Route path="/job-orders-list" element={<JobOrdersList />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/dashboard" element={<UserAnalyticsDashboard/>} />

      {/* Protected Routes */}
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/check-in-out" element={<PrivateRoute element={<CheckInPage />} />} />
      <Route path="/billing" element={<PrivateRoute element={<Billing />} />} />
      <Route path="/bills" element={<PrivateRoute element={<Bills />} />} />
      <Route path="/checkin-list" element={<PrivateRoute element={<CheckInListPage />} />} />
      <Route path="/appointments-list" element={<PrivateRoute element={<Appointments />} />} />
      <Route path="/appointments-replied-list" element={<PrivateRoute element={<RepliedAppointments />} />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
      <UserActivityTracker/>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
