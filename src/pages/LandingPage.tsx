import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Star } from 'lucide-react';
import { statsHighlight, featuredFeatures, sampleTechnicians } from '../data/seed';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-900 mb-6">
            <Zap className="h-4 w-4 text-brand-600" /> Smart AI-Powered Matching Platform
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
            Find and hire verified technicians <span className="text-brand-600">with precision</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Connect employers with top-tier, certified technical talent using transparent scoring, skill verification, and verified availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-brand-500"
            >
              Get Started Free <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Explore Demo Logins
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {statsHighlight.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Built for transparent, reliable technical hiring</h2>
            <p className="mt-3 text-slate-600">Every match is calculated transparently based on verified skills, location proximity, and certifications.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="card-surface p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Technicians Preview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="section-title">Top Rated Technicians</h2>
              <p className="mt-2 text-slate-600">Explore pre-screened professionals ready for deployment.</p>
            </div>
            <Link to="/employer/dashboard" className="mt-4 md:mt-0 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-500">
              View all candidates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sampleTechnicians.slice(0, 3).map((tech) => (
              <div key={tech.id} className="card-surface p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{tech.name}</h3>
                      <p className="text-xs text-slate-500">{tech.city}, {tech.location}</p>
                    </div>
                    {tech.verified && (
                      <span className="badge bg-green-50 text-green-700 border border-green-200">
                        <CheckCircle2 className="h-3 w-3" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-2">{tech.headline}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {tech.skills.slice(0, 3).map((s) => (
                      <span key={s.name} className="badge bg-slate-100 text-slate-700">
                        {s.name} ({s.level}%)
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 font-semibold text-slate-800">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-400" /> {tech.rating} ({tech.reviewCount})
                  </div>
                  <span className="font-bold text-slate-900">${tech.hourlyRate}/hr</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
