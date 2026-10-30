import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Server, Database, Code, FileText } from 'lucide-react';
import { Button } from '../common/Button';

interface BackendDocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BackendDocModal: React.FC<BackendDocModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'schema' | 'endpoints'>('architecture');
  const [copied, setCopied] = useState<string | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard?.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const schemaSnippet = `// PostgreSQL / Drizzle ORM Schema
export const quotes = pgTable('quotes', {
  id: uuid('id').primaryKey().defaultRandom(),
  referenceId: text('reference_id').notNull().unique(), // e.g. "BD-QUOTE-2026-8491"
  status: text('status').notNull().default('draft'),
  serviceId: text('service_id').notNull(),
  quantity: integer('quantity').notNull(),
  options: jsonb('options').notNull(),
  unitPrice: numeric('unit_price', { precision: 10, scale: 2 }).notNull(),
  totalAmount: numeric('total_amount', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});`;

  const apiSnippet = `// REST Endpoint: POST /api/v1/quotes
app.post('/api/v1/quotes', async (req, res) => {
  const { serviceId, selectedOptions, quantity, storageKey, logistics } = req.body;
  
  // Calculate verified server-side price tier
  const pricing = calculateVerifiedTier(serviceId, quantity, selectedOptions);
  
  const quote = await db.insert(quotes).values({
    referenceId: generateReferenceId(),
    serviceId,
    quantity,
    options: selectedOptions,
    unitPrice: pricing.unitPrice,
    totalAmount: pricing.total,
  }).returning();

  // Enqueue async prepress validation worker
  await prepressQueue.add('validate-artwork', { quoteId: quote[0].id, storageKey });

  return res.status(201).json({ status: 'success', data: quote[0] });
});`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#0D1017] border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-10 my-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0C11]">
              <div className="flex items-center gap-2.5">
                <Server className="w-4 h-4 text-slate-300" />
                <span className="font-['Outfit'] font-bold text-white text-base">
                  Backend Integration Blueprint
                </span>
                <span className="text-xs font-['Space_Mono'] text-slate-500 hidden sm:inline">
                  DOCS/BACKEND_INTEGRATION.MD
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="px-6 pt-4 border-b border-white/10 flex items-center gap-2">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-2 text-xs font-['Outfit'] font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'border-white text-white'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                System Architecture
              </button>
              <button
                onClick={() => setActiveTab('schema')}
                className={`px-3 py-2 text-xs font-['Outfit'] font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'schema'
                    ? 'border-white text-white'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                PostgreSQL Schema
              </button>
              <button
                onClick={() => setActiveTab('endpoints')}
                className={`px-3 py-2 text-xs font-['Outfit'] font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'endpoints'
                    ? 'border-white text-white'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                REST API Endpoints
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto font-['Plus_Jakarta_Sans'] text-xs text-slate-300 space-y-6">
              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                    <h4 className="font-['Outfit'] font-bold text-white text-sm flex items-center gap-2">
                      <Code className="w-4 h-4 text-slate-300" />
                      Client-to-Storage Direct Presigned Flow
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      Production prepress graphics routinely exceed 200MB–500MB (.AI vector assets with linked raster plates).
                      To avoid Node.js memory pressure and buffer timeouts, the client requests a secure signed PUT URL from{' '}
                      <code className="text-white font-['Space_Mono']">POST /api/v1/quotes/artwork-presigned-url</code> and uploads directly to Google Cloud Storage or AWS S3.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-['Space_Mono']">
                    <div className="p-4 rounded-xl bg-[#11141D] border border-white/10">
                      <span className="text-slate-500 block mb-1">1. ASSET STORAGE</span>
                      <span className="text-white font-bold block mb-2">GCS / S3 Multi-Region</span>
                      <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans']">
                        72-hour lifecycle auto-reclamation for unfinalized quote drafts.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#11141D] border border-white/10">
                      <span className="text-slate-500 block mb-1">2. DATABASE ENGINE</span>
                      <span className="text-white font-bold block mb-2">PostgreSQL Relational</span>
                      <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans']">
                        Drizzle ORM with JSONB custom finishing configuration trees.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#11141D] border border-white/10">
                      <span className="text-slate-500 block mb-1">3. PREPRESS WORKER</span>
                      <span className="text-white font-bold block mb-2">BullMQ + Ghostscript</span>
                      <p className="text-[11px] text-slate-400 font-['Plus_Jakarta_Sans']">
                        Headless verification of CMYK ink coverage, font outlining &amp; DPI.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'schema' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-['Space_Mono'] text-xs">
                    <span className="text-slate-400">SRC/DB/SCHEMA.TS</span>
                    <button
                      onClick={() => handleCopy(schemaSnippet, 'schema')}
                      className="flex items-center gap-1.5 text-slate-300 hover:text-white cursor-pointer"
                    >
                      {copied === 'schema' ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy className="w-3.5 h-3.5" /> Copy Schema
                        </span>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-black/60 border border-white/10 font-['Space_Mono'] text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
                    {schemaSnippet}
                  </pre>
                </div>
              )}

              {activeTab === 'endpoints' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-['Space_Mono'] text-xs">
                    <span className="text-slate-400">SERVER ROUTE HANDLER</span>
                    <button
                      onClick={() => handleCopy(apiSnippet, 'api')}
                      className="flex items-center gap-1.5 text-slate-300 hover:text-white cursor-pointer"
                    >
                      {copied === 'api' ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Copied
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Copy className="w-3.5 h-3.5" /> Copy Route
                        </span>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-black/60 border border-white/10 font-['Space_Mono'] text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
                    {apiSnippet}
                  </pre>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 px-6 border-t border-white/10 bg-[#0A0C11] flex items-center justify-between text-xs font-['Space_Mono']">
              <span className="text-slate-500">PROTOTYPE ARCHITECTURE DOCUMENTATION</span>
              <Button variant="secondary" size="sm" onClick={onClose}>
                Dismiss Blueprint
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
