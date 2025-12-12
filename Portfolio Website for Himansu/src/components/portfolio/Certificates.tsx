import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Badge } from '../ui/badge';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  { name: 'SPARC Internship - Full Stack Developer', issuer: 'SPARC Pvt. Ltd.', year: '2025', link: '#' },
  { name: 'Java Fundamentals', issuer: 'Simplilearn', year: '2024', link: '#' },
  { name: 'Technology Certification', issuer: 'Deloitte', year: '2024', link: '#' },
  { name: 'Agile Project Management', issuer: 'HP Life', year: '2024', link: '#' },
  { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2024', link: '#' },
  { name: 'Python Programming', issuer: 'LearnTube', year: '2023', link: '#' }
];

export function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Certificates & Achievements
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional certifications and continuous learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Award className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-gray-900 group-hover:text-blue-600 transition-colors">{cert.name}</h3>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                    <Badge className="bg-blue-50 text-blue-700 border border-blue-200">
                      {cert.year}
                    </Badge>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
