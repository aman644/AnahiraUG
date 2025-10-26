import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface ProjectsPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data } = await supabase
      .from('projects')
      .select('*, installer:installers(business_name)')
      .order('created_at', { ascending: false });

    if (data) setProjects(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Project Gallery</h1>
          <p className="text-lg text-slate-600">See our products in beautifully completed spaces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg h-96 animate-pulse"></div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                onClick={() => onNavigate('project-detail', { projectId: project.id })}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={project.featured_image_url || 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{project.description}</p>
                  {project.location && (
                    <p className="text-xs text-slate-500">{project.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600">No projects available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
