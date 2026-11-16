import React, { useEffect, useState } from 'react';

const CONSENT_KEY = 'barack_cookie_consent';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(CONSENT_KEY) !== 'accepted');
    } catch {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch { /* Continue if storage is unavailable. */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-[60] mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-[#E8E5DE] bg-white p-5 shadow-[0_12px_40px_rgba(17,17,17,0.16)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="max-w-2xl text-sm leading-6 text-[#4E4E4E]">
        We use essential cookies to keep this site working and understand how it is used.
      </p>
      <button
        type="button"
        onClick={acceptCookies}
        className="shrink-0 rounded-lg bg-[#F4C400] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#E5B900] focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2"
      >
        Accept & close
      </button>
    </aside>
  );
};