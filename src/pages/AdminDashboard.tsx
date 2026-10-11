import { useState } from 'react';
import { ShieldCheck, Users, Briefcase, AlertCircle, CheckCircle2, Search } from 'lucide-react';
import type { User } from '../App';
import { adminMetrics, sampleUsers, sampleTechnicians } from '../data/seed';

interface AdminDashboardProps {
  user: User;
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [usersList, setUsersList] = useState(sampleUsers);

  const filteredUsers = usersList.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-brand-600" />
            <h1 className="text-2xl font-bold text-slate-900">Admin Console</h1>
          </div>
          <p className="text-sm text-slate-600 mt-1">Platform management and verification controls for {user.name}</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {adminMetrics.map((m) => (
          <div key={m.label} className="card-surface p-4 text-center">
            <div className="text-2xl font-bold text-slate-900">{m.value}</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="card-surface p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Users className="h-5 w-5 text-brand-600" /> User Directory
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-xl border border-slate-200 pl-9 pr-4 py-2 text-sm outline-none focus:border-brand-500 w-full sm:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3.5">
                    <div className="font-medium text-slate-900">{u.name}</div>
                    <div className="text-xs text-slate-500">{u.email}</div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`badge ${
                      u.role === 'admin' ? 'bg-purple-50 text-purple-700' :
                      u.role === 'employer' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                    } capitalize`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-slate-600">{u.location || 'N/A'}</td>
                  <td className="px-4 py-3.5">
                    <span className="badge bg-green-50 text-green-700 border border-green-200">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <button className="text-xs font-semibold text-brand-600 hover:text-brand-500">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
