import { ArrowLeft } from 'lucide-react';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (page: string, data?: any) => void;
  onAddToCart: (productId: string) => void;
}

export default function ProjectDetailPage({ projectId, onNavigate }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Project details for {projectId}</p>
      </div>
    </div>
  );
}
