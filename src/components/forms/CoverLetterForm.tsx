
import { Textarea } from "@/components/ui/textarea";

interface CoverLetterFormProps {
  formData: {
    coverLetter: string;
  };
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CoverLetterForm = ({ formData, onChange }: CoverLetterFormProps) => {
  return (
    <div>
      <label className="block text-gray-300 mb-2">Cover Letter *</label>
      <Textarea
        name="coverLetter"
        placeholder="Tell us about your skills, experience, and why you want to join APEX Technologies..."
        rows={6}
        value={formData.coverLetter}
        onChange={onChange}
        className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 resize-none"
        required
      />
    </div>
  );
};

export default CoverLetterForm;
