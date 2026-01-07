import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Badge } from '../ui/badge';

const skillsData = {
  'Frontend Development': {
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🎨'
  },
  'Backend Development': {
    skills: ['Java', 'Spring Boot', 'Python', 'Node.js', 'RESTful APIs'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '⚙️'
  },
  'Database Management': {
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-green-500 to-emerald-500',
    icon: '🗄️'
  },
  'Development Tools': {
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'AWS'],
    gradient: 'from-orange-500 to-red-500',
    icon: '🛠️'
  },
  'Professional Skills': {
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Agile Methodology'],
    gradient: 'from-pink-500 to-rose-500',
    icon: '💡'
  }
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 animate-gradient" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-gradient">
                Skills & Expertise
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
            </motion.div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6">
              A comprehensive set of technical and soft skills to deliver exceptional results 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, data], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300`} />
                <div className="relative bg-white/90 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 bg-gradient-to-br ${data.gradient} rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      {data.icon}
                    </div>
                    <h3 className={`text-xl bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`bg-gradient-to-r ${data.gradient} text-white border-0 shadow-md hover:shadow-lg transition-all cursor-pointer`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
