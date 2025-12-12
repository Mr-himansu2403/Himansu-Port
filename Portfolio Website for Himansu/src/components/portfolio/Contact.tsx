import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any of these channels.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <a
              href="mailto:himansunayak183@gmail.com"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Mail className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-900">Email</p>
              <p className="text-sm text-gray-500 mt-1">himansunayak183@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Linkedin className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-900">LinkedIn</p>
              <p className="text-sm text-gray-500 mt-1">Connect with me</p>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Github className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-900">GitHub</p>
              <p className="text-sm text-gray-500 mt-1">View my code</p>
            </a>

            <a
              href="https://wa.me/917846805157"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <MessageCircle className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-900">WhatsApp</p>
              <p className="text-sm text-gray-500 mt-1">+91 7846805157</p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl mb-4">Ready to Start a Project?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can contribute to your team or project. I'm currently available for full-time opportunities and freelance work.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
