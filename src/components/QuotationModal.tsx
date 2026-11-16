import React, { useState, useEffect } from 'react';
import { X, Upload, CheckCircle2, FileText, Send, ArrowRight, ShieldCheck, MapPin, Building, AlertCircle } from 'lucide-react';
import { APPROVED_SERVICES, ServiceCategory, ServiceSubitem } from '../data/servicesData';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: string;
  initialProductId?: string;
}

export const QuotationModal: React.FC<QuotationModalProps> = ({
  isOpen,
  onClose,
  initialCategoryId,
  initialProductId
}) => {
  const [selectedCatId, setSelectedCatId] = useState<string>(initialCategoryId || APPROVED_SERVICES[0].id);
  const [selectedProdId, setSelectedProdId] = useState<string>(initialProductId || '');
  const [quantity, setQuantity] = useState<string>('500');
  const [projectScope, setProjectScope] = useState<string>('Standard Package');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [customSize, setCustomSize] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  
  // Contact details
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [fulfillment, setFulfillment] = useState<'pickup' | 'delivery'>('pickup');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  
  // File upload simulation
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string; status: string } | null>(null);

  // Success state
  const [submittedQuoteRef, setSubmittedQuoteRef] = useState<string | null>(null);

  // Synchronize when initial props change
  useEffect(() => {
    if (initialCategoryId) {
      setSelectedCatId(initialCategoryId);
    }
    if (initialProductId) {
      setSelectedProdId(initialProductId);
    }
  }, [initialCategoryId, initialProductId]);

  const activeCategory = APPROVED_SERVICES.find(c => c.id === selectedCatId) || APPROVED_SERVICES[0];
  const isCreativeOrDigital = ['branding-design', 'digital-design'].includes(activeCategory.id);

  // Auto-select first subitem if none selected
  useEffect(() => {
    if (activeCategory && activeCategory.subitems.length > 0) {
      const exists = activeCategory.subitems.some(s => s.id === selectedProdId);
      if (!exists) {
        setSelectedProdId(activeCategory.subitems[0].id);
      }
    }
  }, [selectedCatId]);

  if (!isOpen) return null;

  const toggleFinish = (finishName: string) => {
    if (selectedFinishes.includes(finishName)) {
      setSelectedFinishes(selectedFinishes.filter(f => f !== finishName));
    } else {
      setSelectedFinishes([...selectedFinishes, finishName]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setUploadedFile({
        name: file.name,
        size: `${sizeMB} MB`,
        status: 'Ready for Pre-Flight Prepress'
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRefNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `BD-QUOTE-2026-${randomRefNum}`;
    
    // Save quote request to localStorage
    const quotePayload = {
      ref,
      date: new Date().toISOString(),
      category: activeCategory.title,
      product: activeCategory.subitems.find(s => s.id === selectedProdId)?.name || 'Custom Product',
      quantity: isCreativeOrDigital ? projectScope : quantity,
      material: selectedMaterial || 'Standard Spec',
      finishes: selectedFinishes,
      customSize,
      notes,
      contact: { fullName, companyName, email, phone },
      fulfillment: fulfillment === 'pickup' ? 'Collection at Town Centre Kigali' : `Delivery to: ${deliveryAddress}`,
      fileName: uploadedFile?.name || 'No file attached'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('barack_quotes') || '[]');
      localStorage.setItem('barack_quotes', JSON.stringify([quotePayload, ...existing]));
    } catch (err) {
      console.warn('LocalStorage unavailable', err);
    }

    setSubmittedQuoteRef(ref);
  };

  const activeSubitem = activeCategory.subitems.find(s => s.id === selectedProdId);

  // Generate WhatsApp message text
  const getWhatsAppUrl = () => {
    if (!submittedQuoteRef) return '#';
    const text = `Hello BARACK DESIGN,\nI would like to finalize my quotation request:\n\n*Reference:* ${submittedQuoteRef}\n*Service:* ${activeCategory.title}\n*Product:* ${activeSubitem?.name || 'Custom'}\n*Scope/Qty:* ${isCreativeOrDigital ? projectScope : quantity}\n*Finishes:* ${selectedFinishes.join(', ') || 'Standard'}\n*Client:* ${fullName} (${companyName || 'Individual'})\n*Phone:* ${phone}\n*Fulfillment:* ${fulfillment === 'pickup' ? 'Pickup in Kigali' : 'Delivery'}\n\nPlease confirm availability and official rate card. Thank you!`;
    return `https://wa.me/250789320757?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0B0D10] border border-[#191919] rounded-2xl shadow-2xl overflow-hidden my-8 text-left">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#191919] bg-[#000000]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#191919] border border-[#808080]/30 flex items-center justify-center font-heading font-extrabold text-sm text-[#C0C0C0]">
              BD
            </div>
            <div>
              <h2 className="font-heading font-bold text-lg text-white">Quotation Request</h2>
              <p className="text-xs text-[#808080]">BARACK DESIGN · Commercial Printing, Apparel & Creative Studio</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#808080] hover:text-white hover:bg-[#191919] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {submittedQuoteRef ? (
          /* Confirmation View */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#191919] text-[#C0C0C0] border border-[#C0C0C0]/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#808080]">Request Successfully Generated</span>
              <h3 className="font-heading font-extrabold text-2xl text-white mt-1">
                Quote Reference: <span className="text-[#C0C0C0]">{submittedQuoteRef}</span>
              </h3>
              <p className="text-sm text-[#808080] max-w-lg mx-auto mt-2">
                Your specifications for <strong className="text-white">{activeSubitem?.name}</strong> have been saved to your session (Ref: <strong className="text-[#C0C0C0]">{submittedQuoteRef}</strong>). Click below to transmit this formatted request directly to our Kigali workshop via WhatsApp.
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-[#191919]/60 border border-[#191919] rounded-xl p-6 text-left max-w-xl mx-auto space-y-3 text-xs text-[#E5E5E5]">
              <div className="flex justify-between border-b border-[#191919] pb-2">
                <span className="text-[#808080]">Service Division</span>
                <span className="font-semibold text-white">{activeCategory.title}</span>
              </div>
              <div className="flex justify-between border-b border-[#191919] pb-2">
                <span className="text-[#808080]">Selected Item</span>
                <span className="font-semibold text-white">{activeSubitem?.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#191919] pb-2">
                <span className="text-[#808080]">{isCreativeOrDigital ? 'Project Scope' : 'Quantity'}</span>
                <span className="font-semibold text-white">{isCreativeOrDigital ? projectScope : quantity}</span>
              </div>
              {selectedFinishes.length > 0 && (
                <div className="flex justify-between border-b border-[#191919] pb-2">
                  <span className="text-[#808080]">Custom Finishes</span>
                  <span className="font-semibold text-[#C0C0C0]">{selectedFinishes.join(', ')}</span>
                </div>
              )}
              <div className="flex justify-between pt-1">
                <span className="text-[#808080]">Client Contact</span>
                <span className="font-semibold text-white">{fullName} ({phone})</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#E5E5E5] hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp (+250 789 320 757)</span>
              </a>
              <button
                onClick={() => {
                  setSubmittedQuoteRef(null);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 border border-[#191919] hover:bg-[#191919] text-[#E5E5E5] font-semibold text-xs rounded-lg transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
            
            {/* Step 1: Select Service Division & Product */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#808080] uppercase tracking-wider">
                <span className="w-5 h-5 rounded-full bg-[#191919] text-[#C0C0C0] flex items-center justify-center text-[10px]">1</span>
                <span>Select Service Division & Product</span>
              </div>

              {/* Division Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {APPROVED_SERVICES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCatId(cat.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      selectedCatId === cat.id
                        ? 'border-[#C0C0C0] bg-[#191919] text-white shadow-sm'
                        : 'border-[#191919] bg-[#0B0D10] text-[#808080] hover:border-[#808080]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-heading font-bold text-xs text-[#C0C0C0]">Div {cat.letter}</span>
                      {selectedCatId === cat.id && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div className="text-[11px] font-semibold truncate text-white">
                      {cat.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* Product Subitem Selector */}
              {activeCategory.subitems.length > 0 && (
                <div className="mt-3">
                  <label className="block text-xs font-medium text-[#808080] mb-1.5">Select Specific Item or Service</label>
                  <select
                    value={selectedProdId}
                    onChange={(e) => setSelectedProdId(e.target.value)}
                    className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                  >
                    {activeCategory.subitems.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} — {item.description}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Step 2: Customization & Specifications */}
            <div className="space-y-4 pt-4 border-t border-[#191919]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#808080] uppercase tracking-wider">
                <span className="w-5 h-5 rounded-full bg-[#191919] text-[#C0C0C0] flex items-center justify-center text-[10px]">2</span>
                <span>Specifications & Finishes</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Quantity or Scope */}
                {isCreativeOrDigital ? (
                  <div>
                    <label className="block text-xs font-medium text-[#808080] mb-1">Project Scope / Complexity</label>
                    <select
                      value={projectScope}
                      onChange={(e) => setProjectScope(e.target.value)}
                      className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                    >
                      <option value="Starter Package">Starter Package (Core Identity / Landing Page)</option>
                      <option value="Standard Package">Standard Package (Full Brand Identity System)</option>
                      <option value="Enterprise Custom">Enterprise Custom (Full Suite & Master Guidelines)</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-medium text-[#808080] mb-1">Quantity (Units / Pieces)</label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 250, 500, 1000, 5000"
                      required
                      className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                    />
                  </div>
                )}

                {/* Custom Dimensions or Material */}
                <div>
                  <label className="block text-xs font-medium text-[#808080] mb-1">Dimensions / Sizes (Optional)</label>
                  <input
                    type="text"
                    value={customSize}
                    onChange={(e) => setCustomSize(e.target.value)}
                    placeholder="e.g. A4, 90x54mm, 2m x 1m banner, M/L/XL sizes"
                    className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                  />
                </div>
              </div>

              {/* Material Selection if available */}
              {activeCategory.materials && activeCategory.materials.length > 0 && (
                <div>
                  <label className="block text-xs font-medium text-[#808080] mb-1.5">Stock / Material Option</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {activeCategory.materials.map((mat) => (
                      <button
                        key={mat}
                        type="button"
                        onClick={() => setSelectedMaterial(mat)}
                        className={`p-2 rounded-lg text-xs font-medium border text-left transition-colors ${
                          selectedMaterial === mat
                            ? 'border-[#C0C0C0] bg-[#191919] text-white'
                            : 'border-[#191919] bg-[#0B0D10] text-[#808080] hover:text-white'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialty Finishes */}
              {activeCategory.finishes && activeCategory.finishes.length > 0 && (
                <div>
                  <label className="block text-xs font-medium text-[#808080] mb-1.5">Specialty Finishes & Craft Detailing</label>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.finishes.map((finish) => {
                      const isSelected = selectedFinishes.includes(finish);
                      return (
                        <button
                          key={finish}
                          type="button"
                          onClick={() => toggleFinish(finish)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                            isSelected
                              ? 'border-[#C0C0C0] bg-[#E5E5E5] text-black font-semibold'
                              : 'border-[#191919] bg-[#191919] text-[#808080] hover:text-white'
                          }`}
                        >
                          {isSelected ? `✓ ${finish}` : `+ ${finish}`}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Artwork Preflight Upload Simulation */}
            <div className="space-y-3 pt-4 border-t border-[#191919]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#808080] uppercase tracking-wider">
                <span className="w-5 h-5 rounded-full bg-[#191919] text-[#C0C0C0] flex items-center justify-center text-[10px]">3</span>
                <span>Artwork & Prepress Reference File (Optional)</span>
              </div>

              <div className="border-2 border-dashed border-[#2A2D35] hover:border-[#808080] rounded-xl p-5 text-center transition-colors bg-[#0B0D10]">
                <input
                  type="file"
                  id="artwork-upload"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.ai,.eps,.psd,.png,.jpg,.zip"
                />
                <label htmlFor="artwork-upload" className="cursor-pointer block">
                  <Upload className="w-6 h-6 text-[#808080] mx-auto mb-2" />
                  <span className="text-xs font-semibold text-white block">Click to upload print-ready vector or reference artwork</span>
                  <span className="text-[11px] text-[#808080] block mt-0.5">Supports PDF, AI, EPS, PSD, PNG, JPG, ZIP (Max 50MB)</span>
                </label>

                {uploadedFile && (
                  <div className="mt-3 p-3 bg-[#191919] rounded-lg flex items-center justify-between text-xs text-left border border-[#2A2D35]">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#C0C0C0]" />
                      <div>
                        <div className="font-semibold text-white truncate max-w-[200px]">{uploadedFile.name}</div>
                        <div className="text-[10px] text-[#808080]">{uploadedFile.size} · {uploadedFile.status}</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded text-[10px] font-semibold">Pre-Flight Passed</span>
                  </div>
                )}
              </div>
            </div>

            {/* Step 4: Contact & Delivery Information */}
            <div className="space-y-4 pt-4 border-t border-[#191919]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#808080] uppercase tracking-wider">
                <span className="w-5 h-5 rounded-full bg-[#191919] text-[#C0C0C0] flex items-center justify-center text-[10px]">4</span>
                <span>Client Contact & Collection / Delivery</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#808080] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Muhire Mugabe"
                    className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#808080] mb-1">Company / Organization</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Aether Tech / Kivu Reserve"
                    className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#808080] mb-1">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+250 789 320 757"
                    className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#808080] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                  />
                </div>
              </div>

              {/* Fulfillment Mode */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setFulfillment('pickup')}
                  className={`p-3 rounded-lg border text-left transition-colors flex items-center gap-3 ${
                    fulfillment === 'pickup'
                      ? 'border-[#C0C0C0] bg-[#191919] text-white'
                      : 'border-[#191919] bg-[#0B0D10] text-[#808080]'
                  }`}
                >
                  <Building className="w-5 h-5 text-[#C0C0C0] shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">Self Pickup in Kigali</div>
                    <div className="text-[10px] text-[#808080]">Town Centre Building, F5A-005, KN 70 St</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFulfillment('delivery')}
                  className={`p-3 rounded-lg border text-left transition-colors flex items-center gap-3 ${
                    fulfillment === 'delivery'
                      ? 'border-[#C0C0C0] bg-[#191919] text-white'
                      : 'border-[#191919] bg-[#0B0D10] text-[#808080]'
                  }`}
                >
                  <MapPin className="w-5 h-5 text-[#C0C0C0] shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">Courier Delivery</div>
                    <div className="text-[10px] text-[#808080]">Kigali & Nationwide Rwanda</div>
                  </div>
                </button>
              </div>

              {fulfillment === 'delivery' && (
                <div>
                  <label className="block text-xs font-medium text-[#808080] mb-1">Delivery Address & Instructions</label>
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Street / Building / Neighborhood in Kigali"
                    className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C0C0C0]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[#808080] mb-1">Additional Production Notes / Instructions</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention color matching references, Pantone codes, or rush delivery dates."
                  className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#C0C0C0]"
                />
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-4 border-t border-[#191919] flex items-center justify-between">
              <div className="text-xs text-[#808080]">
                Official rates calculated upon commercial review.
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#E5E5E5] hover:bg-white active:bg-[#C0C0C0] rounded-lg shadow-lg flex items-center gap-2 transition-colors"
              >
                <span>Generate Official Quote Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
