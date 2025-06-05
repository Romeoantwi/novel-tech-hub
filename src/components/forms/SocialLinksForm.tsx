
import { Input } from "@/components/ui/input";

interface SocialLinksFormProps {
  formData: {
    portfolio: string;
    linkedIn: string;
    github: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SocialLinksForm = ({ formData, onChange }: SocialLinksFormProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2">Portfolio/Website</label>
          <Input
            name="portfolio"
            placeholder="https://yourportfolio.com"
            value={formData.portfolio}
            onChange={onChange}
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">LinkedIn Profile</label>
          <Input
            name="linkedIn"
            placeholder="https://linkedin.com/in/yourname"
            value={formData.linkedIn}
            onChange={onChange}
            className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-300 mb-2">GitHub Profile</label>
        <Input
          name="github"
          placeholder="https://github.com/yourusername"
          value={formData.github}
          onChange={onChange}
          className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default SocialLinksForm;
