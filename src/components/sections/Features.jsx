"use client";
import { motion } from 'framer-motion';
import { Smartphone, BarChart3, Shield, Zap, Users, Globe } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Monitoring Real-time',
      description: 'Pantau kondisi tanaman Anda 24/7 dengan sensor IoT dan notifikasi langsung ke smartphone.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics Cerdas',
      description: 'Analisis data pertanian dengan AI untuk prediksi hasil panen dan optimasi produktivitas.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Data pertanian Anda aman dengan enkripsi tingkat enterprise dan backup otomatis.',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Fitur Unggulan
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Teknologi Terdepan untuk
            <span className="block text-green-600">Pertanian Modern</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolusi cara bertani dengan teknologi AI, IoT, dan analytics yang membantu 
            meningkatkan produktivitas hingga 200%.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn 
                key={feature.title}
                direction="up"
                delay={index * 0.1}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    className="h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-6"
                  />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;