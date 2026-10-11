import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import type { User } from '../App';
import { sampleTechnicians } from '../data/seed';

interface ComparisonPageProps {
  user: User;
}

export default function ComparisonPage({ user }: ComparisonPageProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    sampleTechnicians[0]?.id || 'tech-1',
    sampleTechnicians[1]?.id || 'tech-2',
    sampleTechnicians[3]?.id || 'tech-4'
  ]);

  const candidates = sampleTechnicians.filter((t) => selectedIds.includes(t.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/employer/dashboard"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Side-by-Side Candidate Comparison</h1>
        <p className="text-sm text-slate-600 mt-1">
          Compare skill proficiencies, rates, verified credentials, and client satisfaction across top candidates.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {candidates.map((tech) => (
          <div key={tech.id} className="card-surface p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> {tech.city}, {tech.location}
                  </p>
                </div>
                {tech.verified && (
                  <span className="badge bg-green-50 text-green-700 border border-green-200">
                    <CheckCircle2 className="h-3 w-3" /> Verified
                  </span>
                )}
              </div>

              <div className="my-5 p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-3xl font-extrabold text-slate-900">${tech.hourlyRate}<span className="text-sm font-medium text-slate-500">/hr</span></div>
                <div className="text-xs text-slate-500 mt-0.5">Fixed milestone: ${tech.fixedPrice}</div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">Client Satisfaction</span>
                  <div className="flex items-center gap-1 mt-1 font-bold text-slate-800 text-sm">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-400" /> {tech.rating} ({tech.reviewCount} reviews)
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">Experience & Projects</span>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    {tech.yearsExperience} yrs exp · {tech.completedProjects} jobs completed
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">Top Skills</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {tech.skills.map((s) => (
                      <span key={s.name} className="badge bg-white border border-slate-200 text-slate-700">
                        {s.name} ({s.level}%)
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium uppercase text-[10px]">Certifications</span>
                  <div className="mt-1 space-y-1">
                    {tech.certifications.map((c) => (
                      <div key={c.name} className="flex items-center gap-1 text-slate-700 font-medium">
                        <ShieldCheck className="h-3.5 w-3.5 text-brand-600" /> {c.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex gap-2">
              <Link
                to={`/technician/${tech.id}`}
                className="flex-1 text-center rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Profile
              </Link>
              <button className="flex-1 rounded-xl bg-brand-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-brand-500">
                Invite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
