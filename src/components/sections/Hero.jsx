"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf, Users, TrendingUp } from "lucide-react";
import Button from "../common/Button";

const Hero = () => {
  const stats = [
    { icon: Users, value: "10K+", label: "Petani Bergabung" },
    { icon: Leaf, value: "50K+", label: "Tanaman Dikelola" },
    { icon: TrendingUp, value: "200%", label: "Peningkatan Hasil" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full bg-gradient-to-br from-green-400 via-green-500 to-green-600"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
          >
            <Leaf className="w-4 h-4 mr-2" />
            Platform Pertanian Modern
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Revolusi
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
            >
              Pertanian Digital
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Tingkatkan produktivitas pertanian Anda dengan teknologi AI, dan
            monitoring real-time.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-50 shadow-2xl"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Mulai Gratis
          </Button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 ml-1" />
            </div>
            <span className="font-medium">Lihat Demo</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
