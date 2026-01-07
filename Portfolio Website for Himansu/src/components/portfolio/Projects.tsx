import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '../ui/badge';

const projects = [
  {
    title: 'Library Management System',
    description: 'A comprehensive library management solution with user authentication, book cataloging, and borrowing tracking functionality.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React.js'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Certicour',
    description: 'Online learning platform offering professional certifications with interactive courses, progress tracking, and assessment modules.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Mr-himansu2403/Certicoure',
    demo: '#'
  },
  {
    title: 'SwadOdisha',
    description: 'Authentic Odia food delivery platform connecting users with traditional Odia cuisine from local restaurants.',
    technologies: ['React.js', 'Spring Boot', 'MySQL', 'Payment Integration'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Senior Invitation',
    description: 'Interactive and elegant event invitation website with RSVP functionality and event management features.',
    technologies: ['React.js', 'Tailwind CSS', 'Motion', 'Firebase'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Nayak Assist',
    description: 'AI-powered voice assistant built with Python, featuring natural language processing and task automation.',
    technologies: ['Python', 'JSON', 'Speech Recognition', 'NLP'],
    github: '#',
    demo: '#'
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and technical capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Code2Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 border border-blue-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Code2Icon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
