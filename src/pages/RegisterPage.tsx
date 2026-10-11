import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../App';

interface RegisterPageProps {
  onLogin: (user: User) => void;
}

export default function RegisterPage({ onLogin }: RegisterPageProps) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: 'Maya',
    lastName: 'Patel',
    email: 'maya@atlasops.io',
    role: 'employer',
    company: 'AtlasOps'
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const role = form.role as User['role'];
    const createdUser: User = {
      id: role === 'employer' ? 'employer-1' : role === 'technician' ? 'tech-1' : 'admin-1',
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      role,
      company: form.company,
      location: 'Austin, TX'
    };

    onLogin(createdUser);
    if (role === 'employer') navigate('/employer/dashboard');
    if (role === 'technician') navigate('/technician/dashboard');
    if (role === 'admin') navigate('/admin/dashboard');
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="card-surface p-8">
        <h1 className="text-3xl font-bold text-slate-900">Create your demo account</h1>
        <p className="mt-2 text-slate-600">Set up your role and profile to preview the platform end-to-end.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
            <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-brand-400" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
            <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-brand-400" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-brand-400" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Role</label>
            <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-brand-400">
              <option value="employer">Hiring user</option>
              <option value="technician">Technician</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Company or business</label>
            <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none transition focus:border-brand-400" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500">
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
