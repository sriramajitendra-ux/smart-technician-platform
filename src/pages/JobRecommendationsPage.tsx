import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, CheckCircle2, SlidersHorizontal, MapPin, Send, Zap } from 'lucide-react';
import type { User } from '../App';
import { sampleJobs, sampleTechnicians } from '../data/seed';
import { matchTechnicians } from '../lib/matching';

interface JobRecommendationsPageProps {
  user: User;
}

export default function JobRecommendationsPage({ user }: JobRecommendationsPageProps) {
  const { jobId } = useParams<{ jobId: string }>();
  const job = sampleJobs.find((j) => j.id === jobId) || sampleJobs[0];
  const [invitedTechIds, setInvitedTechIds] = useState<string[]>([]);

  const matches = useMemo(() => {
    return matchTechnicians(job, sampleTechnicians);
  }, [job]);

  const handleInvite = (techId: string) => {
    if (!invitedTechIds.includes(techId)) {
      setInvitedTechIds([...invitedTechIds, techId]);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/employer/dashboard"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
      </Link>

      {/* Job Context Header */}
      <div className="card-surface p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge bg-brand-50 text-brand-700">{job.category}</span>
              <span className="badge bg-slate-100 text-slate-700 capitalize">{job.workArrangement}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mt-2">{job.title}</h1>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">{job.description}</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-slate-900">${job.budgetMin} - ${job.budgetMax}</div>
            <div className="text-xs text-slate-500 capitalize">{job.paymentModel} budget</div>
          </div>
        </div>
      </div>

      {/* Match Results */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500 fill-amber-400" /> Algorithmic Matches ({matches.length})
          </h2>
          <p className="text-xs text-slate-500">Ranked by skills match, verified certifications, proximity, and client ratings.</p>
        </div>
        <Link
          to="/employer/compare"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" /> Compare Candidates
        </Link>
      </div>

      <div className="space-y-4">
        {matches.map((result) => {
          const tech = result.technician;
          const isInvited = invitedTechIds.includes(tech.id);

          return (
            <div key={tech.id} className="card-surface p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`badge font-bold text-white ${
                      result.score >= 80 ? 'bg-emerald-600' : result.score >= 50 ? 'bg-brand-600' : 'bg-slate-500'
                    }`}>
                      {result.score}% Match
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
                    {tech.verified && (
                      <span className="badge bg-green-50 text-green-700 border border-green-200">
                        <CheckCircle2 className="h-3 w-3" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{tech.headline}</p>

                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {tech.city}, {tech.location} ({tech.travelRadiusKm} km radius)
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-400" /> {tech.rating} ({tech.reviewCount} reviews)
                    </span>
                    <span>Rate: <strong>${tech.hourlyRate}/hr</strong></span>
                  </div>

                  {result.explanation && result.explanation.length > 0 && (
                    <div className="mt-2 text-xs text-slate-500">
                      {result.explanation[0]}
                    </div>
                  )}

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {tech.skills.map((s) => (
                      <span key={s.name} className="badge bg-slate-100 text-slate-700">
                        {s.name} ({s.level}%)
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2 min-w-[140px]">
                  <Link
                    to={`/technician/${tech.id}`}
                    className="inline-flex justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 text-center"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => handleInvite(tech.id)}
                    disabled={isInvited}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm transition ${
                      isInvited
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-brand-600 text-white hover:bg-brand-500'
                    }`}
                  >
                    <Send className="h-3.5 w-3.5" /> {isInvited ? 'Invitation Sent' : 'Send Invite'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
