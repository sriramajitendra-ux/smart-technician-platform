import { useState } from 'react';
import { Bell, Check, CheckCheck, Clock, FileText } from 'lucide-react';
import type { User, Notification } from '../App';
import { sampleNotifications } from '../data/seed';

interface NotificationCenterProps {
  user: User;
}

export default function NotificationCenter({ user }: NotificationCenterProps) {
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2">
            <Bell className="h-6 w-6 text-brand-600" />
            <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">Updates on candidate matches, invitations, and contracts.</p>
        </div>
        <button
          onClick={markAllRead}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-500"
        >
          <CheckCheck className="h-4 w-4" /> Mark all as read
        </button>
      </div>

      <div className="card-surface divide-y divide-slate-100">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            onClick={() => toggleRead(notif.id)}
            className={`p-5 flex items-start gap-4 cursor-pointer transition hover:bg-slate-50 ${
              !notif.read ? 'bg-brand-50/40' : ''
            }`}
          >
            <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
              !notif.read ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-500'
            }`}>
              <FileText className="h-4 w-4" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className={`text-sm font-semibold ${!notif.read ? 'text-slate-900' : 'text-slate-700'}`}>
                  {notif.title}
                </h3>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Just now
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">{notif.message}</p>
            </div>

            {!notif.read && (
              <span className="h-2 w-2 rounded-full bg-brand-600 mt-2 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
