import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import profileImage from 'figma:asset/0f64cc868d2542e4c2d6094c77b6987adb0b3205.png';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient" />
      
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full"
            >
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Available for opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent animate-gradient leading-tight">
                Himansu Nayak
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Aspiring Full Stack Developer
              </h2>
              <div className="absolute -bottom-2 left-0 w-40 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              🚀 Passionate about building <span className="text-blue-600">scalable web applications</span> with modern technologies. 
              Specializing in <span className="text-purple-600">Java Spring Boot</span>, <span className="text-pink-600">React.js</span>, 
              and <span className="text-orange-600">Python</span> to create innovative digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-blue-500/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="mailto:himansu@example.com" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-pink-500/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-green-500/50"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MessageCircle className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Circular Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div 
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main circular image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-2 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-white p-2">
                    <img
                      src={profileImage}
                      alt="Himansu Nayak"
                      className="w-full h-full rounded-full object-cover shadow-2xl"
                    />
                  </div>
                </div>
                
                {/* Floating particles */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <span className="text-xl">🚀</span>
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 -right-6 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ 
                    x: [0, 10, 0],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <span className="text-xl">⚡</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-600">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
