import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';
import type { User, Job } from '../App';

interface CreateJobPageProps {
  user: User;
}

export default function CreateJobPage({ user }: CreateJobPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: 'Infrastructure',
    description: '',
    location: user.location || 'Austin, TX',
    workArrangement: 'hybrid' as 'remote' | 'onsite' | 'hybrid',
    budgetMin: 3000,
    budgetMax: 7000,
    paymentModel: 'fixed' as 'hourly' | 'fixed' | 'negotiable',
    deadline: '2026-12-01',
    skills: 'AWS, Terraform, Kubernetes'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In demo mode, redirect to employer dashboard
    navigate('/employer/dashboard');
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
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Post a Technical Job</h1>
            <p className="text-sm text-slate-500">Provide project requirements to generate algorithmic candidate recommendations.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Job Title</label>
            <input
              required
              type="text"
              placeholder="e.g. Senior Cloud DevOps Engineer"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none transition focus:border-brand-500"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500 bg-white"
              >
                <option value="Infrastructure">Infrastructure</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Software Development">Software Development</option>
                <option value="Data & AI">Data & AI</option>
                <option value="Electrical & Automation">Electrical & Automation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Work Arrangement</label>
              <select
                value={formData.workArrangement}
                onChange={(e) => setFormData({ ...formData, workArrangement: e.target.value as any })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500 bg-white"
              >
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-site</option>
                <option value="remote">Remote</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <textarea
              rows={4}
              required
              placeholder="Describe scope of work, technical deliverables, and milestones..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none transition focus:border-brand-500"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Min Budget ($)</label>
              <input
                type="number"
                value={formData.budgetMin}
                onChange={(e) => setFormData({ ...formData, budgetMin: Number(e.target.value) })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Max Budget ($)</label>
              <input
                type="number"
                value={formData.budgetMax}
                onChange={(e) => setFormData({ ...formData, budgetMax: Number(e.target.value) })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Payment Model</label>
              <select
                value={formData.paymentModel}
                onChange={(e) => setFormData({ ...formData, paymentModel: e.target.value as any })}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-brand-500 bg-white"
              >
                <option value="fixed">Fixed Price</option>
                <option value="hourly">Hourly Rate</option>
                <option value="negotiable">Negotiable</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Required Skills (comma separated)</label>
            <input
              type="text"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-brand-500"
            />
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
              className="rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500"
            >
              Publish Job Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
