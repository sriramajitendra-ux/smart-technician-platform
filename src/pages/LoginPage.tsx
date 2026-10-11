import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { User } from '../App';
import { sampleUsers } from '../data/seed';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const [selectedUserId, setSelectedUserId] = useState<string>(sampleUsers[0]?.id || 'employer-1');

  const handleQuickLogin = (user: User) => {
    onLogin(user);
    if (user.role === 'employer') navigate('/employer/dashboard');
    else if (user.role === 'technician') navigate('/technician/dashboard');
    else if (user.role === 'admin') navigate('/admin/dashboard');
    else navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = sampleUsers.find((u) => u.id === selectedUserId);
    if (user) {
      handleQuickLogin(user);
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:px-6">
      <div className="card-surface p-8">
        <h1 className="text-2xl font-bold text-slate-900">Sign in to SkillMatch</h1>
        <p className="mt-2 text-sm text-slate-600">Select an existing demo profile to test role-specific workflows.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Select Demo User</label>
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-brand-500 bg-white"
            >
              {sampleUsers.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.role.toUpperCase()}) {u.company ? `– ${u.company}` : ''}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500"
          >
            Log in to Dashboard
          </button>
        </form>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Quick Switch</p>
          <div className="grid grid-cols-3 gap-2">
            {sampleUsers.slice(0, 3).map((u) => (
              <button
                key={u.id}
                onClick={() => handleQuickLogin(u)}
                className="rounded-lg border border-slate-200 p-2 text-center text-xs hover:border-brand-500 hover:bg-brand-50"
              >
                <div className="font-semibold text-slate-800">{u.name.split(' ')[0]}</div>
                <div className="text-slate-500 capitalize">{u.role}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Need an account?{' '}
          <Link to="/register" className="font-semibold text-brand-600 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
