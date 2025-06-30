"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from "framer-motion";
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
  Smartphone,
  MoveRight,
  PhoneCall,
  Check,
  ArrowRight,
  UserPlus,
  PenTool,
  Search,
  Shield,
  Zap,
  Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function PibbleLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Konsultasi Online",
      description: "Chat langsung dengan dokter hewan berpengalaman 24/7"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Janji Temu",
      description: "Booking appointment dengan mudah di klinik terdekat"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Tracking",
      description: "Monitor kesehatan hewan peliharaan secara real-time"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Komunitas",
      description: "Bergabung dengan komunitas pecinta hewan"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Keamanan Data",
      description: "Data hewan peliharaan Anda aman dan terlindungi"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Respons Cepat",
      description: "Dapatkan bantuan dalam hitungan menit"
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
      title: "Mulai Konsultasi",
      description: "Hubungkan dengan dokter hewan dan dapatkan perawatan terbaik",
      icon: <MessageCircle className="w-12 h-12" />,
      color: "bg-green-500"
    }
  ];

  const teamMembers = [
    { name: "Dr. Sarah Johnson", role: "Lead Veterinarian", image: "/api/placeholder/100/100", rating: 4.9 },
    { name: "Dr. Michael Chen", role: "Senior Veterinarian", image: "/api/placeholder/100/100", rating: 4.8 },
    { name: "Dr. Lisa Park", role: "Pet Behaviorist", image: "/api/placeholder/100/100", rating: 4.9 },
    { name: "Dr. David Kim", role: "Emergency Specialist", image: "/api/placeholder/100/100", rating: 4.7 },
    { name: "Dr. Emma Wilson", role: "Exotic Animal Expert", image: "/api/placeholder/100/100", rating: 4.8 },
    { name: "Dr. Alex Rodriguez", role: "Surgery Specialist", image: "/api/placeholder/100/100", rating: 4.9 }
  ];

  const faqs = [
    {
      question: "Apa itu Pibble dan bagaimana cara kerjanya?",
      answer: "Pibble adalah platform komprehensif untuk perawatan hewan peliharaan yang menghubungkan pemilik hewan dengan dokter hewan, groomer, dan layanan perawatan lainnya. Aplikasi ini memungkinkan Anda untuk menjadwalkan janji temu, berkonsultasi online, dan melacak kesehatan hewan peliharaan Anda."
    },
    {
      question: "Bagaimana cara mendaftar dan memulai?",
      answer: "Anda dapat mendaftar dengan mudah melalui aplikasi mobile atau website kami. Cukup masukkan informasi dasar tentang Anda dan hewan peliharaan Anda, lalu ikuti 4 langkah sederhana untuk memulai konsultasi pertama."
    },
    {
      question: "Apakah layanan konsultasi online aman dan terpercaya?",
      answer: "Ya, semua konsultasi online kami dilakukan dengan dokter hewan berlisensi dan berpengalaman. Platform kami menggunakan teknologi enkripsi tingkat tinggi untuk menjaga keamanan dan privasi data Anda."
    },
    {
      question: "Berapa biaya untuk menggunakan layanan Pibble?",
      answer: "Kami menawarkan berbagai paket layanan mulai dari konsultasi gratis untuk pengguna baru hingga paket premium dengan fitur lengkap. Harga bervariasi tergantung jenis layanan yang Anda pilih."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full z-50 fixed top-0 left-0 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/images/pibblelogo.png" 
                alt="Pibble Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Pibble
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
              <Button variant="ghost">Login</Button>
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
                  <Button variant="ghost" className="w-full justify-start">Login</Button>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    Download App
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-6">
                🐾 Platform #1 untuk Perawatan Hewan
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Perawatan Terbaik untuk
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Sahabat Anda!
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Platform lengkap yang menghubungkan pemilik hewan peliharaan dengan dokter hewan profesional, 
                layanan grooming, dan komunitas pecinta hewan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Download className="mr-2 h-5 w-5" />
                  Download Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Play className="mr-2 h-5 w-5" />
                  Lihat Demo
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-purple-600">10K+</div>
                  <div className="text-sm text-gray-600">Pengguna Aktif</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Dokter Hewan</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">4.8★</div>
                  <div className="text-sm text-gray-600">Rating App</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop&crop=center" 
                  alt="Happy pets with owner"
                  className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl z-20 hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Dr. Sarah</p>
                    <p className="text-xs text-gray-600">Online sekarang</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl z-20 hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Appointment</p>
                    <p className="text-xs text-gray-600">Besok 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Fitur Unggulan</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Semua yang Anda Butuhkan dalam Satu Platform
            </h2>
            <p className="text-xl text-gray-600">
              Dilengkapi dengan berbagai fitur canggih untuk memastikan kesehatan dan kebahagiaan hewan peliharaan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index: number) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
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
                <div key={index} className="relative">
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
                </div>
              ))}
            </div>
          </div>

          {/* App Screenshots */}
          <div className="mt-20">
            <div className="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-white rounded-3xl p-6 shadow-xl mb-6 max-w-xs mx-auto transform hover:scale-105 transition-transform">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 mb-4">
                    <UserPlus className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Registrasi</h4>
                    <p className="text-sm text-gray-600">Daftar dengan mudah</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-3xl p-6 shadow-xl mb-6 max-w-xs mx-auto transform scale-110 hover:scale-115 transition-transform">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 mb-4">
                    <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Konsultasi</h4>
                    <p className="text-sm text-gray-600">Chat dengan dokter</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-3xl p-6 shadow-xl mb-6 max-w-xs mx-auto transform hover:scale-105 transition-transform">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 mb-4">
                    <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Monitoring</h4>
                    <p className="text-sm text-gray-600">Pantau kesehatan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <Badge variant="outline" className="mb-6">Tentang Pibble</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Misi Kami adalah Kesehatan Hewan Peliharaan Anda
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Pibble adalah platform inovatif yang didedikasikan untuk memberikan perawatan terbaik bagi hewan peliharaan Anda. 
                  Kami memahami bahwa hewan peliharaan adalah bagian dari keluarga, dan mereka pantas mendapatkan perawatan terbaik.
                </p>
                <p>
                  Dengan menggabungkan teknologi terdepan dan jaringan profesional veteriner terpercaya, kami menciptakan solusi 
                  komprehensif yang memudahkan pemilik hewan peliharaan dalam menjaga kesehatan dan kebahagiaan sahabat berbulu mereka.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Layanan Tersedia</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629196166180-4f37c2ee40bb?w=600&h=600&fit=crop&crop=center" 
                alt="Veterinarian team"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full border-4 border-white"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">500+ Dokter</p>
                    <p className="text-sm text-gray-600">Siap membantu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4">Tim Dokter</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bertemu dengan Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-600">
              Dokter hewan berpengalaman dan berlisensi siap memberikan perawatan terbaik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                  👨‍⚕️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <div className="flex justify-center items-center space-x-1 mb-4">
                                      {[...Array(5)].map((_, i: number) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{member.rating}</span>
                </div>
                <Button variant="outline" size="sm" className="hover:bg-purple-50">
                  Lihat Profil
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
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
                </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Siap Memberikan yang Terbaik untuk Hewan Peliharaan Anda?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pemilik hewan peliharaan yang telah mempercayakan perawatan hewan kesayangan mereka kepada Pibble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
                <span className="text-sm">Rating 4.8/5</span>
              </div>
            </div>
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
                <img 
                  src="/images/pibblelogo.png" 
                  alt="Pibble Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl font-bold">Pibble</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Platform terdepan untuk perawatan hewan peliharaan yang menghubungkan Anda dengan profesional veteriner terbaik. 
                Memberikan solusi lengkap untuk kesehatan dan kebahagiaan hewan kesayangan Anda.
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
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Layanan</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi Online</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Janji Temu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Grooming Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pet Insurance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Perusahaan</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tim Dokter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-400">Dapatkan tips perawatan hewan dan update terbaru dari Pibble</p>
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
                <p>© 2025 Pibble. All rights reserved.</p>
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