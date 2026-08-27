import { getWhatsAppLink } from '../utils/constants';

interface QuoteFormProps {
  equipmentName?: string;
}

export default function QuoteForm({ equipmentName }: QuoteFormProps) {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields: Record<string, string> = {};
    data.forEach((value, key) => { fields[key] = value.toString(); });

    let message = '';
    if (equipmentName) {
      message = `I am interested in learning more about:\n\nEquipment: ${equipmentName}\n\nName: ${fields.name || ''}\nOrganization: ${fields.organization || ''}\nEmail: ${fields.email || ''}\nPhone: ${fields.phone || ''}\nQuantity: ${fields.quantity || ''}\n\nMessage: ${fields.message || ''}`;
    } else {
      message = `I would like to make an enquiry:\n\nName: ${fields.name || ''}\nOrganization: ${fields.organization || ''}\nEmail: ${fields.email || ''}\nPhone: ${fields.phone || ''}\nEquipment Required: ${fields.equipment || ''}\nQuantity: ${fields.quantity || ''}\nLocation: ${fields.location || ''}\nPreferred Contact: ${fields.preferred || ''}\n\nAdditional Requirements: ${fields.additional || ''}`;
    }

    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <form onSubmit={handleWhatsAppSubmit} className="space-y-5 max-w-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">Full Name</label>
          <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">Organization</label>
          <input type="text" name="organization" required className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white" placeholder="Company or facility" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">Email Address</label>
          <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white" placeholder="email@example.com" />
        </div>
        <div>
          <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">Phone Number</label>
          <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white" placeholder="+234..." />
        </div>
      </div>
      {!equipmentName && (
        <>
          <div>
            <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">Equipment / Solution Required</label>
            <input type="text" name="equipment" required className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white" placeholder="Describe what you need" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">Quantity</label>
              <input type="text" name="quantity" className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white" placeholder="e.g. 1 unit" />
            </div>
            <div>
              <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">Location</label>
              <input type="text" name="location" className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white" placeholder="City / State" />
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">Preferred Contact Method</label>
            <select name="preferred" className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white">
              <option value="WhatsApp">WhatsApp</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Email">Email</option>
            </select>
          </div>
        </>
      )}
      <div>
        <label className="block text-xs tracking-wider uppercase font-medium text-navy mb-1.5">
          {equipmentName ? 'Additional Message' : 'Additional Requirements'}
        </label>
        <textarea name={equipmentName ? 'message' : 'additional'} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors bg-white resize-none" placeholder="Tell us more about your requirement..." />
      </div>
      <div className="flex flex-wrap gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy text-sm font-medium tracking-wider uppercase rounded-md hover:bg-gold-light transition-all duration-300 shadow-sm"
        >
          Send Request via WhatsApp
        </button>
        <button
          type="button"
          onClick={() => {
            const form = document.activeElement?.closest('form');
            if (form) {
              const event = new Event('submit', { bubbles: true });
              form.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = new FormData(form);
                const fields: Record<string, string> = {};
                data.forEach((value, key) => { fields[key] = value.toString(); });
                let body = equipmentName
                  ? `Equipment: ${equipmentName}\nName: ${fields.name || ''}\nOrganization: ${fields.organization || ''}\nEmail: ${fields.email || ''}\nPhone: ${fields.phone || ''}\nQuantity: ${fields.quantity || ''}\n\n${fields.message || ''}`
                  : `Name: ${fields.name || ''}\nOrganization: ${fields.organization || ''}\nEmail: ${fields.email || ''}\nPhone: ${fields.phone || ''}\nEquipment: ${fields.equipment || ''}\nQuantity: ${fields.quantity || ''}\nLocation: ${fields.location || ''}\n\n${fields.additional || ''}`;
                window.location.href = `mailto:azatechglobalsupplychain@gmail.com?subject=Enquiry from Azatech Website&body=${encodeURIComponent(body)}`;
              }, { once: true });
              form.dispatchEvent(event);
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-navy text-sm font-medium tracking-wider uppercase rounded-md hover:border-gold hover:text-gold transition-all duration-300"
        >
          Send Email
        </button>
      </div>
    </form>
  );
}