
import { Input } from "@/components/ui/input";

interface PersonalInfoFormProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfoForm = ({ formData, onChange }: PersonalInfoFormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-300 mb-2">Full Name *</label>
        <Input
          name="fullName"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={onChange}
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          required
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Email *</label>
        <Input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={onChange}
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          required
        />
      </div>
      <div className="md:col-span-1">
        <label className="block text-gray-300 mb-2">Phone Number *</label>
        <Input
          name="phone"
          placeholder="+233 123 456 789"
          value={formData.phone}
          onChange={onChange}
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          required
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
