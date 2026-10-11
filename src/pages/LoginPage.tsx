import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import type { User, UserRole } from '../App';
import { sampleUsers } from '../data/seed';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = identifier.trim();

    if (!cleanInput) {
      setError('Please enter your email or username');
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    // Match with existing accounts by email, full name, or ID (case-insensitive)
    const lower = cleanInput.toLowerCase();
    const matched = sampleUsers.find(
      (u) =>
        u.email.toLowerCase() === lower ||
        u.name.toLowerCase() === lower ||
        u.id.toLowerCase() === lower ||
        u.email.toLowerCase().startsWith(lower)
    );

    let loggedInUser: User;
    if (matched) {
      loggedInUser = matched;
    } else {
      // Free-form dynamic login: auto-determine role from text or default to employer
      let role: UserRole = 'employer';
      if (lower.includes('admin')) {
        role = 'admin';
      } else if (lower.includes('tech') || lower.includes('engineer') || lower.includes('dev')) {
        role = 'technician';
      }

      const displayName = cleanInput.includes('@')
        ? cleanInput.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
        : cleanInput.replace(/\b\w/g, (c) => c.toUpperCase());

      loggedInUser = {
        id: `user-${Date.now()}`,
        name: displayName,
        email: cleanInput.includes('@') ? cleanInput : `${cleanInput.toLowerCase()}@platform.io`,
        role,
        company: role === 'employer' ? `${displayName} Operations` : undefined,
        location: 'Austin, TX'
      };
    }

    onLogin(loggedInUser);

    if (loggedInUser.role === 'employer') {
      navigate('/employer/dashboard');
    } else if (loggedInUser.role === 'technician') {
      navigate('/technician/dashboard');
    } else if (loggedInUser.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <div className="card-surface p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Sign in to your account</h1>
          <p className="mt-1 text-sm text-slate-500">Enter your credentials to continue to your dashboard.</p>
        </div>

        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email or Username</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                required
                placeholder="Enter your email or username"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  setError('');
                }}
                className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500"
          >
            Sign In <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-brand-600 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
