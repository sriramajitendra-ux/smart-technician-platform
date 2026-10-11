import { Link } from 'react-router-dom';
import { UserCheck, Star, Calendar, Clock, Edit3, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { User } from '../App';
import { sampleTechnicians, sampleJobs, sampleInvitations } from '../data/seed';

interface TechnicianDashboardProps {
  user: User;
}

export default function TechnicianDashboard({ user }: TechnicianDashboardProps) {
  // Find technician record or fall back to first sample technician
  const technician = sampleTechnicians.find((t) => t.id === user.id) || sampleTechnicians[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">{technician.name}</h1>
            {technician.verified && (
              <span className="badge bg-green-50 text-green-700 border border-green-200">
                <CheckCircle2 className="h-3 w-3" /> Verified Tech
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 mt-1">{technician.headline}</p>
        </div>
        <Link
          to="/technician/profile/edit"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500"
        >
          <Edit3 className="h-4 w-4" /> Edit Profile & Rates
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card-surface p-5 text-center">
          <div className="text-2xl font-bold text-slate-900">${technician.hourlyRate}/hr</div>
          <div className="text-xs text-slate-500 mt-1">Current Rate</div>
        </div>
        <div className="card-surface p-5 text-center">
          <div className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-1">
            <Star className="h-5 w-5 text-amber-500 fill-amber-400" /> {technician.rating}
          </div>
          <div className="text-xs text-slate-500 mt-1">{technician.reviewCount} Reviews</div>
        </div>
        <div className="card-surface p-5 text-center">
          <div className="text-2xl font-bold text-slate-900">{technician.completedProjects}</div>
          <div className="text-xs text-slate-500 mt-1">Completed Projects</div>
        </div>
        <div className="card-surface p-5 text-center">
          <div className="text-2xl font-bold text-slate-900">{technician.travelRadiusKm} km</div>
          <div className="text-xs text-slate-500 mt-1">Travel Radius</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Invitations & Job Matches */}
        <div className="lg:col-span-2 space-y-8">
          {/* Invitations */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Direct Client Invitations</h2>
            <div className="card-surface p-6">
              {sampleInvitations.length > 0 ? (
                <div className="space-y-4">
                  {sampleInvitations.map((inv) => (
                    <div key={inv.id} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-semibold text-slate-900">Cloud Infrastructure Migration</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Invited by AtlasOps · Status: <span className="capitalize font-medium text-amber-600">{inv.status}</span></p>
                      </div>
                      <div className="flex gap-2">
                        <button className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-500">
                          Accept
                        </button>
                        <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No invitations right now.</p>
              )}
            </div>
          </div>

          {/* Matched Opportunities */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Matched Projects</h2>
            <div className="space-y-4">
              {sampleJobs.map((job) => (
                <div key={job.id} className="card-surface p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-900">{job.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{job.location} · {job.workArrangement}</p>
                    </div>
                    <span className="badge bg-green-50 text-green-700">95% Match</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">{job.description}</p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">Budget: ${job.budgetMin} - ${job.budgetMax}</span>
                    <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Skills & Availability */}
        <div className="space-y-6">
          <div className="card-surface p-6">
            <h3 className="font-bold text-slate-900 mb-4">Skills & Proficiencies</h3>
            <div className="space-y-3">
              {technician.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-600 rounded-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-6">
            <h3 className="font-bold text-slate-900 mb-4">Certifications</h3>
            <div className="space-y-2">
              {technician.certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50">
                  <span className="font-medium text-slate-800">{cert.name}</span>
                  <span className={`badge ${cert.verified ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
