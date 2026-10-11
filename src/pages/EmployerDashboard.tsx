import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Plus, Users, Search, ArrowRight, Star, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import type { User, Job } from '../App';
import { sampleJobs, sampleTechnicians, dashboardMetrics } from '../data/seed';

interface EmployerDashboardProps {
  user: User;
}

export default function EmployerDashboard({ user }: EmployerDashboardProps) {
  const [jobs] = useState<Job[]>(sampleJobs);
  const [techSearch, setTechSearch] = useState('');

  const filteredTechnicians = sampleTechnicians.filter(
    (t) =>
      t.name.toLowerCase().includes(techSearch.toLowerCase()) ||
      t.headline.toLowerCase().includes(techSearch.toLowerCase()) ||
      t.skills.some((s) => s.name.toLowerCase().includes(techSearch.toLowerCase())) ||
      t.city.toLowerCase().includes(techSearch.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back, {user.name}</h1>
          <p className="text-sm text-slate-600 mt-1">{user.company || 'Enterprise Portal'} · Austin, TX</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/employer/compare"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <SlidersHorizontal className="h-4 w-4" /> Compare Candidates
          </Link>
          <Link
            to="/employer/create-job"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500"
          >
            <Plus className="h-4 w-4" /> Post New Job
          </Link>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {dashboardMetrics.map((metric) => (
          <div key={metric.label} className="card-surface p-4 text-center">
            <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Active Jobs */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-brand-600" /> Active Job Postings
          </h2>
          <span className="text-xs font-semibold text-slate-500">{jobs.length} open positions</span>
        </div>

        <div className="grid gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="card-surface p-6 transition hover:border-brand-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                    <span className="badge bg-brand-50 text-brand-700">{job.category}</span>
                    <span className="badge bg-slate-100 text-slate-700 capitalize">{job.workArrangement}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2">{job.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                    <span>Budget: <strong>${job.budgetMin} - ${job.budgetMax}</strong> ({job.paymentModel})</span>
                    <span>·</span>
                    <span>Deadline: {job.deadline}</span>
                    <span>·</span>
                    <span>Location: {job.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/employer/recommendations/${job.id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 transition"
                  >
                    View Matches <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Talent Pool */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-600" /> Talent Directory ({filteredTechnicians.length})
            </h2>
            <p className="text-xs text-slate-500">Explore verified technical specialists ready for deployment.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search skills, city, name..."
                value={techSearch}
                onChange={(e) => setTechSearch(e.target.value)}
                className="rounded-xl border border-slate-200 pl-8 pr-3 py-1.5 text-xs outline-none focus:border-brand-500 w-48 sm:w-60 bg-white"
              />
            </div>
            <Link to="/employer/compare" className="text-xs font-semibold text-brand-600 hover:underline shrink-0">
              Compare →
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnicians.map((tech) => (
            <div key={tech.id} className="card-surface p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">{tech.name}</h4>
                    <p className="text-xs text-slate-500">{tech.city}, {tech.location}</p>
                  </div>
                  {tech.verified && (
                    <span className="badge bg-green-50 text-green-700">
                      <CheckCircle2 className="h-3 w-3" /> Verified
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2">{tech.headline}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {tech.skills.slice(0, 3).map((s) => (
                    <span key={s.name} className="badge bg-slate-100 text-slate-700 text-xs">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">${tech.hourlyRate}/hr</span>
                <Link
                  to={`/technician/${tech.id}`}
                  className="text-xs font-semibold text-brand-600 hover:text-brand-500"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
