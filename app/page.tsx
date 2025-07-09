"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { 
  ChevronDown, 
  Heart, 
  Users, 
  Calendar, 
  MessageCircle, 
  Star, 
  Menu, 
  X, 
  Play, 
  Download, 
  Apple, 
  UserPlus,
  PenTool,
  Search,
  Shield,
  Zap,
  Clock,
  CreditCard,
  Video,
  Award,
  Home,
  ShoppingBag,
  Building2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PibbleLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => ["terbaik", "terpercaya", "profesional", "berkualitas", "modern"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Features", href: "#features" },
    { title: "How It Works", href: "#how-it-works" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Sesuai dengan pitch deck - Features dari slide 4
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Booking Service",
      description: "Booking layanan perawatan hewan dengan mudah dan cepat"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rewarding System",
      description: "Dapatkan reward setiap menggunakan layanan Pibble"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pet Profile",
      description: "Kelola profil lengkap hewan peliharaan Anda"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Online Payments",
      description: "Pembayaran online yang aman dan mudah"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Monitoring Schedule",
      description: "Pantau jadwal perawatan hewan peliharaan"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Camera",
      description: "Pantau hewan peliharaan secara real-time"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Daftar Akun",
      description: "Buat akun dengan mudah menggunakan email atau nomor telepon",
      icon: <UserPlus className="w-12 h-12" />,
      color: "bg-blue-500"
    },
    {
      step: "02", 
      title: "Profil Hewan",
      description: "Tambahkan informasi lengkap tentang hewan peliharaan Anda",
      icon: <PenTool className="w-12 h-12" />,
      color: "bg-purple-500"
    },
    {
      step: "03",
      title: "Pilih Layanan",
      description: "Pilih jenis layanan yang Anda butuhkan untuk hewan peliharaan",
      icon: <Search className="w-12 h-12" />,
      color: "bg-pink-500"
    },
    {
      step: "04",
      title: "Booking & Bayar",
      description: "Lakukan booking dan pembayaran online dengan mudah",
      icon: <CreditCard className="w-12 h-12" />,
      color: "bg-green-500"
    }
  ];

  // Market Opportunities dari slide 6
  const marketOpportunities = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Pet Clinic",
      description: "Klinik hewan professional untuk kesehatan pet"
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Pet Shop",
      description: "Toko perlengkapan dan makanan hewan lengkap"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Pet Adoption",
      description: "Platform adopsi hewan yang aman dan terpercaya"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Pet Hotel",
      description: "Tempat penitipan hewan yang nyaman dan aman"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Pet Grooming",
      description: "Layanan grooming professional untuk hewan kesayangan"
    }
  ];

  // Team dari slide 8
  const teamMembers = [
    { name: "Andries Nauvalentin Roestam", role: "Web Developer", avatar: "👨‍💻" },
    { name: "Enjelita Samosir", role: "Web UI Designer", avatar: "👩‍🎨" },
    { name: "Frenky", role: "Quality Assurance", avatar: "🔍" },
    { name: "Iren Abel Tarina", role: "Project Manager", avatar: "👩‍💼" },
    { name: "Muhammad Alvin Firdaus", role: "Mobile Developer", avatar: "📱" },
    { name: "Satria Tuladha Jati", role: "Mobile UI Designer", avatar: "🎨" }
  ];

  const faqs = [
    {
      question: "Apa itu Pibble dan bagaimana cara kerjanya?",
      answer: "Pibble adalah aplikasi yang menjembatani pemilik hewan peliharaan dengan penyedia layanan dan jasa perawatan hewan. Seperti yang dialami Keysha, kami hadir untuk mengatasi masalah antrian panjang dan transparansi harga yang tidak jelas."
    },
    {
      question: "Layanan apa saja yang tersedia di Pibble?",
      answer: "Pibble menyediakan berbagai layanan seperti Pet Clinic, Pet Shop, Pet Adoption, Pet Hotel, dan Pet Grooming. Semua terintegrasi dalam satu platform untuk kemudahan Anda."
    },
    {
      question: "Bagaimana sistem pembayaran di Pibble?",
      answer: "Pibble menggunakan sistem Online Payments yang aman dan transparan. Anda dapat melihat harga layanan dengan jelas sebelum melakukan booking, tidak ada biaya tersembunyi."
    },
    {
      question: "Apakah ada sistem reward untuk pengguna?",
      answer: "Ya! Pibble memiliki Rewarding System dimana Anda dapat mengumpulkan poin setiap menggunakan layanan dan menukarkannya dengan berbagai keuntungan."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full z-50 fixed top-0 left-0 bg-background/95 backdrop-blur-sm border-b"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/pibblelogo.png" 
                alt="Pibble Logo" 
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PIBBLE
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-background">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    Download App
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Hero Content */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Badge variant="secondary" className="mb-6">
                  🐾 Pet Care and Health Service App
                </Badge>
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Perawatan
                <span className="relative flex w-full justify-center lg:justify-start overflow-hidden text-center lg:text-left md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index: number) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                untuk sahabat Anda!
              </h1>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Solusi untuk mengatasi antrian panjang dan transparansi harga yang tidak jelas. 
                Aplikasi yang menjembatani pemilik hewan peliharaan dengan penyedia layanan perawatan hewan.
              </motion.p>
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Download className="mr-2 h-5 w-5" />
                  Download Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Play className="mr-2 h-5 w-5" />
                  Lihat Demo
                </Button>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-3 gap-6 mt-12 text-center lg:text-left"
              >
                <div>
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-600">Layanan Utama</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">6</div>
                  <div className="text-sm text-gray-600">Fitur Unggulan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">Transparan</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full max-w-lg mx-auto aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🐕🐱</div>
                    <p className="text-gray-600 font-medium">Happy Pets with Owner</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl z-20 hidden lg:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Booking</p>
                    <p className="text-xs text-gray-600">Mudah & Cepat</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl z-20 hidden lg:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Payment</p>
                    <p className="text-xs text-gray-600">Online & Aman</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <Badge variant="outline" className="mb-6">Problem Statement</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Masalah yang Dialami Pemilik Hewan Peliharaan
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong>Keysha</strong>, seorang pemilik hewan peliharaan, mengalami kesulitan saat pertama kali pergi ke klinik hewan. 
                  Dia merasa capek karena harus mengantri karena disaat itu klinik memang sedang padat jadwalnya.
                </p>
                <p>
                  Ketika tiba saat pembayaran layanan/jasa, dia terkejut dengan harga yang tidak terduga tingginya, 
                  karena tidak adanya transparansi yang jelas mengenai harga.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-2">😫</div>
                  <div className="text-sm text-gray-600">Antrian Panjang</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">💸</div>
                  <div className="text-sm text-gray-600">Harga Tidak Transparan</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">😫💸</div>
                  <p className="text-gray-600 font-medium">Pet Owner Problems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Fitur Unggulan</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PIBBLE APPS FEATURES
            </h2>
            <p className="text-xl text-gray-600">
              6 fitur unggulan yang memudahkan perawatan hewan peliharaan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index: number) => (
              <motion.div 
                key={index} 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Cara Kerja</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              4 Langkah Mudah Memulai
            </h2>
            <p className="text-xl text-gray-600">
              Proses yang sederhana dan cepat untuk memberikan perawatan terbaik bagi hewan peliharaan Anda
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index: number) => (
                <motion.div 
                  key={index} 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform translate-x-4 z-0"></div>
                  )}
                  
                  <div className="relative z-10 text-center group">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-105 transition-transform`}>
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Mobile App Preview</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience PIBBLE Mobile App
            </h2>
            <p className="text-xl text-gray-600">
              Lihat tampilan aplikasi mobile PIBBLE yang user-friendly dan feature-rich
            </p>
          </div>

          {/* Dashboard & Member Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Dashboard & Member Management
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong>Dashboard yang Intuitif</strong> - Kelola semua aktivitas hewan peliharaan Anda dalam satu tampilan yang mudah dipahami.
                </p>
                <p>
                  <strong>Member System</strong> - Sistem keanggotaan yang memberikan berbagai keuntungan dan akses eksklusif untuk layanan premium.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Profile management untuk hewan peliharaan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Tracking jadwal dan riwayat perawatan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span>Member benefits dan reward points</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center space-x-6"
            >
              {/* Dashboard Mobile Mockup */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-white rounded-[2.5rem] shadow-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[2rem] p-4 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Header */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900">Dashboard</h4>
                      <p className="text-sm text-gray-600">Selamat datang kembali!</p>
                    </div>
                    
                    {/* Pet Cards */}
                    <div className="space-y-4 mb-6">
                      <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-orange-300 rounded-full flex items-center justify-center text-lg">🐱</div>
                          <div>
                            <p className="font-semibold text-gray-900">Li Bro</p>
                            <p className="text-xs text-gray-600">3 Bulan</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center text-lg">🐶</div>
                          <div>
                            <p className="font-semibold text-gray-900">Bee G</p>
                            <p className="text-xs text-gray-600">1 Tahun</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <div className="bg-blue-500 text-white rounded-lg p-3 text-center">
                        <p className="text-sm font-medium">Next Appointment</p>
                        <p className="text-xs">Today 10:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Member Mobile Mockup */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-white rounded-[2.5rem] shadow-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-b from-purple-50 to-white rounded-[2rem] p-4 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h4 className="text-lg font-bold text-gray-900">Member</h4>
                    </div>
                    
                    {/* Member Card */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white mb-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-lg">⭐</span>
                        </div>
                        <div>
                          <p className="font-bold">BUDDY</p>
                          <p className="text-xs opacity-90">Premium Member</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">1,500</p>
                        <p className="text-xs opacity-90">Points</p>
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-gray-900">Point Loyalty</p>
                        <p className="text-xs text-gray-600">Dapatkan point setiap transaksi</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm font-medium text-gray-900">Promo Spesial</p>
                        <p className="text-xs text-gray-600">Akses promo eksklusif member</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Rewards & Services Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-6"
            >
              {/* Rewards Mobile Mockup */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-white rounded-[2.5rem] shadow-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white rounded-[2rem] p-4 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Buddy Header */}
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl p-4 text-white mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold">BUDDY {'>'}</p>
                          <p className="text-xs opacity-90">💰 1,500 Point</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="mt-3">
                        <div className="bg-white/20 rounded-full h-2">
                          <div className="bg-white rounded-full h-2 w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Vouchers */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-200 rounded-lg"></div>
                          <div>
                            <p className="text-sm font-medium">Voucher Pawsitastic</p>
                            <p className="text-xs text-gray-600">Diskon 20%</p>
                          </div>
                        </div>
                        <div className="bg-orange-400 text-white text-xs px-2 py-1 rounded">Tukar</div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-200 rounded-lg"></div>
                          <div>
                            <p className="text-sm font-medium">Voucher Groom & Glam</p>
                            <p className="text-xs text-gray-600">Gratis grooming</p>
                          </div>
                        </div>
                        <div className="bg-green-400 text-white text-xs px-2 py-1 rounded">Tukar</div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-200 rounded-lg"></div>
                          <div>
                            <p className="text-sm font-medium">Voucher Purrfect</p>
                            <p className="text-xs text-gray-600">Consultation</p>
                          </div>
                        </div>
                        <div className="bg-purple-400 text-white text-xs px-2 py-1 rounded">Tukar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Mobile Mockup */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-white rounded-[2.5rem] shadow-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[2rem] p-4 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">Services</h4>
                        <p className="text-sm text-gray-600">Choose your service</p>
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">🔔</span>
                      </div>
                    </div>
                    
                    {/* Service Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-100 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-sm">🏥</span>
                        </div>
                        <p className="text-xs font-medium">Veterinary</p>
                      </div>
                      
                      <div className="bg-pink-100 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-pink-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-sm">✂️</span>
                        </div>
                        <p className="text-xs font-medium">Grooming</p>
                      </div>
                      
                      <div className="bg-green-100 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-sm">🏨</span>
                        </div>
                        <p className="text-xs font-medium">Pet Hotel</p>
                      </div>
                      
                      <div className="bg-purple-100 rounded-xl p-4 text-center">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-sm">🛒</span>
                        </div>
                        <p className="text-xs font-medium">Pet Shop</p>
                      </div>
                    </div>
                    
                    {/* Featured Service */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-4 text-white">
                      <p className="text-sm font-bold mb-1">CHECK UP</p>
                      <p className="text-xs opacity-90">Free health consultation</p>
                      <div className="mt-3 bg-white/20 rounded-lg p-2 text-center">
                        <p className="text-xs font-medium">Book Now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Rewards & Services Management
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong>Reward System yang Menguntungkan</strong> - Dapatkan reward yang akan diberikan oleh Pibble dengan cara menggunakan layanan yang disediakan.
                </p>
                <p>
                  <strong>Layanan Lengkap</strong> - Akses berbagai layanan perawatan hewan dalam satu aplikasi yang mudah digunakan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Reward points untuk setiap transaksi</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Voucher dan promo eksklusif</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span>Berbagai layanan pet care terintegrasi</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Vaccine & Checkup Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Vaccine Management & Health Checkup
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong>Pengelolaan Vaksin Terpadu</strong> - Mencapai yang tidak diinginkan lebih awal dengan pengingat vaksin dan jadwal kesehatan.
                </p>
                <p>
                  <strong>Checkup Berkala</strong> - Pantau kesehatan hewan peliharaan Anda secara rutin dengan sistem reminder otomatis.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Jadwal vaksinasi otomatis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Reminder checkup kesehatan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Riwayat medis lengkap</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              {/* Vaccine Mobile Mockup */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-white rounded-[2.5rem] shadow-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-white rounded-[2rem] p-4 relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-bold text-gray-900">Vaksin</h4>
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">+</span>
                      </div>
                    </div>
                    
                    {/* Pet Selection */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-3">Pilih Hewan Peliharaan</p>
                      <div className="flex space-x-3">
                        <div className="bg-blue-100 rounded-lg p-3 text-center flex-1">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-1 flex items-center justify-center text-white">🐱</div>
                          <p className="text-xs font-medium">Li Bro</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3 text-center flex-1">
                          <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-1 flex items-center justify-center">🐶</div>
                          <p className="text-xs text-gray-600">Bee G</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Vaccine Schedule */}
                    <div className="space-y-3">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-green-800">Rabies Vaccine</p>
                            <p className="text-xs text-green-600">Due: Next Week</p>
                          </div>
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-blue-800">DHPP Vaccine</p>
                            <p className="text-xs text-blue-600">Scheduled: Tomorrow</p>
                          </div>
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">!</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-yellow-800">Health Checkup</p>
                            <p className="text-xs text-yellow-600">Monthly checkup</p>
                          </div>
                          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📅</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Market Opportunity</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              PIBBLE APPS - Market Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              5 segmen pasar utama yang dapat dilayani oleh platform Pibble
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {marketOpportunities.map((opportunity, index: number) => (
              <motion.div 
                key={index} 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform mx-auto">
                  {opportunity.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Meet The Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tim Profesional PIBBLE
            </h2>
            <p className="text-xl text-gray-600">
              Tim developer dan designer berpengalaman yang membangun aplikasi Pibble
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index: number) => (
              <motion.div 
                key={index} 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{member.avatar}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">FAQ</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-xl text-gray-600">
                Temukan jawaban untuk pertanyaan umum tentang layanan Pibble
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index: number) => (
                <motion.div 
                  key={index} 
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-purple-600 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 border-t bg-gray-50">
                      <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Masih ada pertanyaan lain?</p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Siap Menggunakan PIBBLE untuk Hewan Peliharaan Anda?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan revolusi perawatan hewan peliharaan. Tidak ada lagi antrian panjang dan harga mengejutkan. 
                Semua transparan dan mudah di PIBBLE!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Apple className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">100% Aman & Terpercaya</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm">Support 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="text-sm">Transparansi Harga</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span className="text-sm">Rewarding System</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Image 
                  src="/images/pibblelogo.png" 
                  alt="Pibble Logo" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-2xl font-bold">PIBBLE</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Platform Pet Care and Health Service App yang menjembatani pemilik hewan peliharaan 
                dengan penyedia layanan perawatan hewan. Solusi untuk antrian panjang dan transparansi harga.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">📱</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">🐦</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">📧</span>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Fitur Utama</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Booking Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rewarding System</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pet Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Online Payments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Live Camera</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Monitoring Schedule</a></li>
              </ul>
            </div>
            
            {/* Market */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Layanan</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pet Clinic</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pet Shop</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pet Adoption</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pet Hotel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pet Grooming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Stay Updated with PIBBLE</h3>
                <p className="text-gray-400">Dapatkan update terbaru tentang fitur dan layanan PIBBLE untuk hewan peliharaan Anda</p>
              </div>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row gap-4 text-gray-400 text-sm">
                <p>© 2025 PIBBLE. All rights reserved. Pet Care and Health Service App.</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>for pet lovers</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}