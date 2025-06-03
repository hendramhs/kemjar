"use client";
import { motion } from "framer-motion";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "Tentang Kami", href: "#about" },
      { name: "Tim", href: "#team" },
      { name: "Karir", href: "#career" },
      { name: "Blog", href: "#blog" },
    ],
    services: [
      { name: "Monitoring Tanaman", href: "#monitoring" },
      { name: "Analytics", href: "#analytics" },
      { name: "Marketplace", href: "#marketplace" },
      { name: "Edukasi", href: "#education" },
    ],
    support: [
      { name: "Pusat Bantuan", href: "#help" },
      { name: "Kontak", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Komunitas", href: "#community" },
    ],
    legal: [
      { name: "Kebijakan Privasi", href: "#privacy" },
      { name: "Syarat & Ketentuan", href: "#terms" },
      { name: "Cookies", href: "#cookies" },
      { name: "Lisensi", href: "#license" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-2 mb-6"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AgriTech</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 mb-6 leading-relaxed"
              >
                Platform pertanian modern yang menghubungkan teknologi dengan
                tradisi, membantu petani meningkatkan produktivitas dan
                kesejahteraan.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>info@agritech.id</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>+62 21 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-6 capitalize">
                  {category === "company"
                    ? "Perusahaan"
                    : category === "services"
                    ? "Layanan"
                    : category === "support"
                    ? "Dukungan"
                    : "Legal"}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-all duration-300"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 AgriTech. Semua hak dilindungi undang-undang.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
