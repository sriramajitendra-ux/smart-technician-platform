import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, UserCheck } from 'lucide-react';
import type { User } from '../App';
import { sampleTechnicians } from '../data/seed';

interface TechnicianProfileEditProps {
  user: User;
}

export default function TechnicianProfileEdit({ user }: TechnicianProfileEditProps) {
  const navigate = useNavigate();
  const tech = sampleTechnicians.find((t) => t.id === user.id) || sampleTechnicians[0];

  const [form, setForm] = useState({
    headline: tech.headline,
    hourlyRate: tech.hourlyRate,
    fixedPrice: tech.fixedPrice,
    travelRadiusKm: tech.travelRadiusKm,
    location: tech.location,
    city: tech.city,
    responseTime: tech.responseTime
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/technician/dashboard');
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
      </button>

      <div className="card-surface p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <UserCheck className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Edit Profile & Work Preferences</h1>
            <p className="text-sm text-slate-500">Update rates, travel distance, and availability for matching.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Professional Headline</label>
            <input
              type="text"
              value={form.headline}
              onChange={(e) => setForm({ ...form, headline: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-500"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Hourly Rate ($)</label>
              <input
                type="number"
                value={form.hourlyRate}
                onChange={(e) => setForm({ ...form, hourlyRate: Number(e.target.value) })}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Milestone / Fixed Price ($)</label>
              <input
                type="number"
                value={form.fixedPrice}
                onChange={(e) => setForm({ ...form, fixedPrice: Number(e.target.value) })}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Travel Radius (km)</label>
              <input
                type="number"
                value={form.travelRadiusKm}
                onChange={(e) => setForm({ ...form, travelRadiusKm: Number(e.target.value) })}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Typical Response Time</label>
              <input
                type="text"
                value={form.responseTime}
                onChange={(e) => setForm({ ...form, responseTime: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500"
            >
              <Save className="h-4 w-4" /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
