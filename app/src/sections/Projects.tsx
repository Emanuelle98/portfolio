import { ScrollReveal } from '@/components/ScrollReveal';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    title: 'Redstone App',
    description: 'Aplicación web desarrollada como proyecto personal. Una plataforma moderna y funcional que demuestra mis habilidades en desarrollo full stack, con enfoque en experiencia de usuario y rendimiento.',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    link: 'https://redstoneapp.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-orange/10 text-orange text-xs font-mono uppercase tracking-wider rounded-full mb-6">
              Portafolio
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-impact text-5xl md:text-6xl lg:text-7xl uppercase text-white tracking-wide">
              PROYECTOS
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="mt-6 font-mono text-base text-white/60 max-w-2xl mx-auto">
              Una selección de proyectos que representan mi trabajo y evolución como desarrollador.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
          
          {/* Coming Soon Card */}
          <ScrollReveal delay={0.3}>
            <div className="relative bg-new-black rounded-2xl overflow-hidden border border-white/10 border-dashed min-h-[320px] flex items-center justify-center">
              <div className="text-center p-8">
                <span className="inline-block w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">+</span>
                </span>
                <h3 className="font-impact text-2xl uppercase text-white/40 tracking-wide mb-2">
                  Próximamente
                </h3>
                <p className="font-mono text-sm text-white/30">
                  Más proyectos en desarrollo
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
