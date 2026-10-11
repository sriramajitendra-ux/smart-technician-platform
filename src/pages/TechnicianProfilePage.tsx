import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, CheckCircle2, ShieldCheck, MapPin, Clock, Briefcase, Award } from 'lucide-react';
import { sampleTechnicians } from '../data/seed';

export default function TechnicianProfilePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tech = sampleTechnicians.find((t) => t.id === id) || sampleTechnicians[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      {/* Main Profile Header */}
      <div className="card-surface p-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-slate-900">{tech.name}</h1>
              {tech.verified && (
                <span className="badge bg-green-50 text-green-700 border border-green-200">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Verified Specialist
                </span>
              )}
            </div>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">{tech.headline}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-slate-400" /> {tech.city}, {tech.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-amber-500 fill-amber-400" /> {tech.rating} ({tech.reviewCount} reviews)
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-slate-400" /> Responds in {tech.responseTime}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center sm:min-w-[180px]">
            <div className="text-3xl font-extrabold text-slate-900">${tech.hourlyRate}</div>
            <div className="text-xs font-medium text-slate-500 mt-1">Hourly rate</div>
            <div className="mt-4">
              <button className="w-full rounded-xl bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-500">
                Contact / Invite
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column (Skills & Certifications) */}
        <div className="md:col-span-2 space-y-8">
          <div className="card-surface p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-brand-600" /> Technical Proficiencies
            </h2>
            <div className="space-y-4">
              {tech.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm font-medium mb-1.5">
                    <span className="text-slate-800">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-600 rounded-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="card-surface p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Client Feedback & Reviews</h2>
            {tech.reviews && tech.reviews.length > 0 ? (
              <div className="space-y-4">
                {tech.reviews.map((r, i) => (
                  <div key={i} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-slate-800 text-sm">{r.reviewer}</span>
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                        <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400" /> {r.rating}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600">{r.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">No public reviews available yet.</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="card-surface p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-brand-600" /> Certifications
            </h3>
            <div className="space-y-3">
              {tech.certifications.map((c) => (
                <div key={c.name} className="p-3 rounded-xl bg-slate-50">
                  <div className="font-medium text-xs text-slate-800">{c.name}</div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-green-700 font-semibold">
                    <ShieldCheck className="h-3 w-3" /> Verified credential
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-6">
            <h3 className="font-bold text-slate-900 mb-3">Service Radius</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Available for hybrid and on-site projects within <strong>{tech.travelRadiusKm} km</strong> of {tech.city}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
