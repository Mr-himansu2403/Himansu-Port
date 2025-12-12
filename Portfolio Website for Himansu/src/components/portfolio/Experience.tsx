import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full Stack Developer Intern',
    company: 'SPARC Pvt. Ltd.',
    period: 'Jun 2025 – Aug 2025',
    description: [
      'Developed backend and frontend modules using Java Spring Boot and React.js',
      'Contributed to data container and office management systems',
      'Collaborated with cross-functional teams in an Agile environment',
      'Implemented RESTful APIs for seamless data integration'
    ]
  },
  {
    type: 'work',
    title: 'E-Commerce Associate',
    company: 'Self-Employed',
    period: '2023 – Present',
    description: [
      'Worked with Amazon, Flipkart, and Meesho sellers to improve sales and visibility',
      'Enhanced customer engagement through strategic product positioning',
      'Analyzed market trends and optimized product listings',
      'Managed inventory and customer service operations'
    ]
  }
];

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Regional College of Management, Bhubaneswar',
    period: '2024 – Present',
    description: 'Focusing on advanced software development, algorithms, and system design'
  },
  {
    degree: 'B.Sc. Physics (Honours)',
    institution: 'North Orissa University',
    period: '2021 – 2024',
    description: 'Built strong analytical and problem-solving foundation'
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl text-gray-900">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
                      <h4 className="text-xl text-gray-900 mb-1">{exp.title}</h4>
                      <p className="text-blue-600 mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-700 flex items-start gap-2">
                            <span className="text-blue-600 mt-1.5 text-xl leading-none">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl text-gray-900">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full" />
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
                      <h4 className="text-xl text-gray-900 mb-1">{edu.degree}</h4>
                      <p className="text-blue-600 mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
