import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Target, Users, Award } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Technical Excellence',
    description: 'Proficient in modern web technologies including Java, React, and Python',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Focused on delivering high-quality solutions that meet business objectives',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Strong collaboration skills with experience in Agile environments',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Award,
    title: 'Continuous Learning',
    description: 'Committed to staying updated with the latest industry trends and technologies',
    gradient: 'from-orange-500 to-red-500'
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
      
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
                About Me
              </h2>
              <div className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Full Stack Developer</span> currently 
                pursuing my MCA at Regional College of Management, Bhubaneswar. With a strong foundation in both frontend and backend technologies, 
                I specialize in creating robust, scalable web applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise lies in <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded">Java Spring Boot</span>, 
                <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-purple-200 rounded mx-1">React.js</span>, 
                and <span className="px-2 py-1 bg-gradient-to-r from-pink-100 to-pink-200 rounded">Python</span>. I've had the opportunity to 
                apply my skills during my internship at <span className="text-blue-600">SPARC Pvt. Ltd.</span>, where I contributed to 
                enterprise-level applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in writing clean, maintainable code and following best practices. My approach combines technical 
                expertise with strong problem-solving skills, effective communication, and a commitment to continuous learning. 🌟
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl" />
              <div className="relative bg-white/80 backdrop-blur-sm border-2 border-transparent bg-clip-padding rounded-2xl p-8 shadow-xl" style={{ 
                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}>
                <h3 className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                    <span className="text-gray-700">Current Role</span>
                    <span className="text-gray-900">MCA Student & Developer</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                    <span className="text-gray-700">Education</span>
                    <span className="text-gray-900">MCA (2024-Present)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg border border-pink-100">
                    <span className="text-gray-700">Location</span>
                    <span className="text-gray-900">Bhubaneswar, India 🇮🇳</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                    <span className="text-gray-700">Experience</span>
                    <span className="text-gray-900">Internship at SPARC</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                    <span className="text-gray-700">Availability</span>
                    <span className="text-green-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Open to Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-all duration-300`} />
                <div className="relative bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className={`text-xl bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
