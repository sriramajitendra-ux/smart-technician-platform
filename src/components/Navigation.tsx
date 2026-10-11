import { Link, useNavigate } from 'react-router-dom';
import type { User } from '../App';

interface NavigationProps {
  currentUser: User | null;
  onLogout: () => void;
}

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#workflow' },
  { label: 'Demo', href: '/employer/dashboard' }
];

export default function Navigation({ currentUser, onLogout }: NavigationProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md">S</span>
          SkillMatch Pro
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-brand-600">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {currentUser ? (
            <>
              <Link to={currentUser.role === 'employer' ? '/employer/dashboard' : currentUser.role === 'technician' ? '/technician/dashboard' : '/admin/dashboard'} className="hidden rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 sm:inline-flex">
                Dashboard
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  navigate('/');
                }}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700">
                Log in
              </Link>
              <Link to="/register" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500">
                Join demo
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
