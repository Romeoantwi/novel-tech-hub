
import { Input } from "@/components/ui/input";

interface ProfessionalInfoFormProps {
  formData: {
    expertise: string;
    experience: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const expertiseAreas = [
  "Software Development",
  "Web Development",
  "Mobile App Development",
  "Cyber Security",
  "Network Administration",
  "Cloud Architecture",
  "DevOps",
  "Data Science",
  "AI/Machine Learning",
  "UI/UX Design",
  "Database Administration",
  "Quality Assurance",
  "Other"
];

const ProfessionalInfoForm = ({ formData, onChange }: ProfessionalInfoFormProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-300 mb-2">Primary Expertise *</label>
        <select
          name="expertise"
          value={formData.expertise}
          onChange={onChange}
          className="w-full h-10 rounded-md border border-slate-600 bg-slate-800 text-white px-3 py-2"
          required
        >
          <option value="">Select your expertise</option>
          {expertiseAreas.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Years of Experience *</label>
        <Input
          name="experience"
          placeholder="e.g., 5 years"
          value={formData.experience}
          onChange={onChange}
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          required
        />
      </div>
    </div>
  );
};

export default ProfessionalInfoForm;
