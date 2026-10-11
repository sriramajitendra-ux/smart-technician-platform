import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EmployerDashboard from './pages/EmployerDashboard';
import TechnicianDashboard from './pages/TechnicianDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CreateJobPage from './pages/CreateJobPage';
import JobRecommendationsPage from './pages/JobRecommendationsPage';
import TechnicianProfilePage from './pages/TechnicianProfilePage';
import ComparisonPage from './pages/ComparisonPage';
import NotificationCenter from './pages/NotificationCenter';
import TechnicianProfileEdit from './pages/TechnicianProfileEdit';
import './App.css';

export type UserRole = 'employer' | 'technician' | 'admin';

export type SkillItem = {
  name: string;
  level: number;
  years?: number;
};

export type Certification = {
  name: string;
  verified: boolean;
  status: 'verified' | 'pending';
};

export type AvailabilityWindow = {
  day: string;
  start: string;
  end: string;
};

export type Technician = {
  id: string;
  name: string;
  email: string;
  role: 'technician';
  headline: string;
  profilePhoto?: string;
  location: string;
  city: string;
  travelRadiusKm: number;
  availability: AvailabilityWindow[];
  hourlyRate: number;
  fixedPrice: number;
  responseTime: string;
  willingness: boolean;
  verified: boolean;
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  completedProjects: number;
  skills: SkillItem[];
  certifications: Certification[];
  portfolio: string;
  lastActive: string;
  distanceFromUserKm?: number;
  reviews?: { reviewer: string; rating: number; comment: string }[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  company?: string;
  location?: string;
};

export type RequiredSkill = {
  name: string;
  minLevel: number;
  priority: 'mandatory' | 'preferred';
};

export type Job = {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  workArrangement: 'remote' | 'onsite' | 'hybrid';
  deadline: string;
  durationDays: number;
  budgetMin: number;
  budgetMax: number;
  paymentModel: 'hourly' | 'fixed' | 'negotiable';
  availabilityRequirement: string;
  requiredSkills: RequiredSkill[];
  mandatoryCertifications: string[];
  maxTravelDistanceKm?: number;
  experienceYears: number;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  read: boolean;
  type: 'job' | 'invitation' | 'system';
  createdAt: string;
};

export type InvitationStatus = 'pending' | 'accepted' | 'declined' | 'expired';

export type Invitation = {
  id: string;
  jobId: string;
  technicianId: string;
  employerId: string;
  status: InvitationStatus;
  createdAt: string;
};

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navigation currentUser={currentUser} onLogout={handleLogout} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage onLogin={handleLogin} />} />
          <Route
            path="/employer/dashboard"
            element={currentUser?.role === 'employer' ? <EmployerDashboard user={currentUser} /> : <Navigate to="/login" />}
          />
          <Route
            path="/employer/create-job"
            element={currentUser?.role === 'employer' ? <CreateJobPage user={currentUser} /> : <Navigate to="/login" />}
          />
          <Route
            path="/employer/recommendations/:jobId"
            element={currentUser?.role === 'employer' ? <JobRecommendationsPage user={currentUser} /> : <Navigate to="/login" />}
          />
          <Route
            path="/employer/compare"
            element={currentUser?.role === 'employer' ? <ComparisonPage user={currentUser} /> : <Navigate to="/login" />}
          />
          <Route
            path="/technician/:id"
            element={<TechnicianProfilePage />}
          />
          <Route
            path="/technician/dashboard"
            element={currentUser?.role === 'technician' ? <TechnicianDashboard user={currentUser} /> : <Navigate to="/login" />}
          />
          <Route
            path="/technician/profile/edit"
            element={currentUser?.role === 'technician' ? <TechnicianProfileEdit user={currentUser} /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin/dashboard"
            element={currentUser?.role === 'admin' ? <AdminDashboard user={currentUser} /> : <Navigate to="/login" />}
          />
          <Route
            path="/notifications"
            element={currentUser ? <NotificationCenter user={currentUser} /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
