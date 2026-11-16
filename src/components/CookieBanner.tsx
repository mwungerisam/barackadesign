import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const NOTICE_KEY = 'barack_storage_notice';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(NOTICE_KEY) !== 'dismissed');
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(NOTICE_KEY, 'dismissed');
    } catch { /* The notice can still be dismissed for this visit. */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="fixed bottom-3 left-3 right-3 z-[40] mx-auto w-auto max-w-[25rem] border border-[#D8D8D8] bg-white p-4 shadow-[0_12px_36px_rgba(0,0,0,0.16)] sm:bottom-6 sm:left-6 sm:right-auto sm:mx-0 sm:p-5" aria-label="Privacy and storage notice" role="note">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#E5E5E5] bg-[#F7F7F7] text-[#191919]">
          <ShieldCheck className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-[#111111]">Privacy & site storage</p>
          <p className="mt-1 text-xs leading-5 text-[#666666]">
            We only remember that you dismissed this notice. No analytics or ad tracking.
          </p>
          <button type="button" onClick={dismiss} className="mt-3 min-h-9 bg-[#111111] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#333333] focus-visible:outline-[#808080]">
            Got it
          </button>
        </div>
      </div>
    </aside>
  );
};
