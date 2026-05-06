import { ShieldCheck } from 'lucide-react'

export function FDADisclaimer() {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-nt-earth-200 rounded-xl p-4 flex gap-3 text-xs text-nt-earth-600 leading-relaxed">
      <ShieldCheck className="w-4 h-4 text-nt-green-600 shrink-0 mt-0.5" />
      <p>
        <strong>Disclaimer:</strong> These statements have not been evaluated by the Food and Drug
        Administration. These products are not intended to diagnose, treat, cure, or prevent any
        disease. Results may vary. Consult a qualified healthcare professional before use if you are
        pregnant, nursing, taking medications, or have a medical condition.
      </p>
    </div>
  )
}
