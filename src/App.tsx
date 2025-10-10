import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Trophy, 
  GamepadIcon, 
  MapPin, 
  Music, 
  Video, 
  Phone, 
  Mail,
  ExternalLink,
  Star,
  Zap,
  Sparkles,
  Mic,
  Palette,
  Camera,
  Code,
  Drama,
  BookOpen,
  ArrowLeft,
  UserCheck,
  Award,
  Briefcase,
  TrendingUp,
  Crown,
  Brain,
  FileText,
  Eye,
  Handshake,
  Target
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setCurrentPage('event-detail');
  };

  const handleJuryClick = () => {
    setCurrentPage('jury');
  };

  const goBackToHome = () => {
    setCurrentPage('home');
    setSelectedEvent(null);
  };

  const goBackToEvent = () => {
    setCurrentPage('event-detail');
  };

  const day1Events = [
    {
      title: "AD-O-LOGY (ADZAP)",
      prize: "TBA",
      icon: TrendingUp,
      description: "Brandstrom - Creative advertising challenge",
      color: "from-blue-400 to-cyan-500",
      fullDescription: "Showcase your creativity and marketing skills in this dynamic advertising competition. Create compelling ad campaigns that capture attention and drive results.",
      rules: [
        "Team size: 2-4 members",
        "Time limit: 2 hours for campaign creation",
        "All mediums allowed (digital, print, video)",
        "Original concepts only"
      ],
      contact: "Marketing Coordinator: +91 9876543210",
      posterUrl: "https://example.com/poster-adzap.jpg"
    },
    {
      title: "PLANOVATE (B PLAN)",
      prize: "TBA",
      icon: Briefcase,
      description: "Business plan competition",
      color: "from-green-400 to-teal-500",
      fullDescription: "Present your innovative business ideas and entrepreneurial vision. Develop comprehensive business plans that showcase market potential and feasibility.",
      rules: [
        "Team size: 3-5 members",
        "15-minute presentation + 5 min Q&A",
        "Business plan submission required",
        "Focus on innovation and sustainability"
      ],
      contact: "Business Coordinator: +91 9876543211",
      posterUrl: "https://example.com/poster-bplan.jpg"
    },
    {
      title: "CROWN THE BOSS",
      prize: "TBA",
      icon: Crown,
      description: "Best Manager Challenge",
      color: "from-purple-400 to-pink-500",
      fullDescription: "Demonstrate your leadership and management skills through strategic challenges and case studies. Prove you have what it takes to be the best manager.",
      rules: [
        "Individual competition",
        "Multiple rounds of challenges",
        "Case study analysis required",
        "Leadership skills assessment"
      ],
      contact: "Management Coordinator: +91 9876543212",
      posterUrl: "https://example.com/poster-bestmanager.jpg"
    },
    {
      title: "BIZWHIZ",
      prize: "TBA",
      icon: Brain,
      description: "Business Quiz Competition",
      color: "from-orange-400 to-red-500",
      fullDescription: "Test your business knowledge and current affairs awareness in this comprehensive quiz competition covering various business domains.",
      rules: [
        "Team size: 2-3 members",
        "Multiple rounds: Prelims, Semi-finals, Finals",
        "Topics: Business, Finance, Current Affairs",
        "Buzzer round in finals"
      ],
      contact: "Quiz Coordinator: +91 9876543213",
      posterUrl: "https://example.com/poster-bizquiz.jpg"
    },
    {
      title: "SCHOLAR SPARK",
      prize: "TBA",
      icon: FileText,
      description: "Paper Presentation",
      color: "from-indigo-400 to-purple-500",
      fullDescription: "Present your research and innovative ideas through comprehensive paper presentations. Share your academic insights and technical expertise.",
      rules: [
        "Individual or team (max 2 members)",
        "15-minute presentation + 5 min Q&A",
        "Abstract submission deadline: 27.10.25",
        "Technical or business topics"
      ],
      contact: "Academic Coordinator: +91 9876543214",
      posterUrl: "https://example.com/poster-scholar.jpg"
    },
    {
      title: "MODERN WALK",
      prize: "TBA",
      icon: Eye,
      description: "Solo Entry Competition",
      color: "from-cyan-400 to-blue-500",
      fullDescription: "Individual showcase of talent and vision. Demonstrate your unique perspective and skills in this solo competition format.",
      rules: [
        "Individual participation only",
        "Open category - showcase any talent",
        "Time limit: 5-8 minutes",
        "Original content preferred"
      ],
      contact: "Solo Event Coordinator: +91 9876543215",
      posterUrl: "https://example.com/poster-modernwalk.jpg"
    }
  ];

  const day2Events = [
    {
      title: "Short Film",
      prize: "₹1000",
      icon: Video,
      description: "Showcase your cinematic vision",
      color: "from-cyan-400 to-blue-500",
      fullDescription: "Create compelling short films that tell powerful stories. Showcase your filmmaking skills, creativity, and technical expertise.",
      rules: [
        "Duration: 5-15 minutes",
        "Team size: 3-8 members",
        "All genres welcome",
        "Submit by 28.10.25"
      ],
      contact: "Film Coordinator: +91 9876543216",
      posterUrl: "https://example.com/poster-shortfilm.jpg"
    },
    {
      title: "Esports",
      prize: "₹1000",
      icon: GamepadIcon,
      description: "4 members per team",
      color: "from-purple-400 to-pink-500",
      fullDescription: "Compete in popular gaming tournaments and prove your gaming skills. Team up with friends for the ultimate gaming challenge.",
      rules: [
        "Games: PUBG Mobile, Free Fire",
        "Team size: 4 members",
        "Own devices required",
        "Registration closes 28.10.25"
      ],
      contact: "Gaming Coordinator: +91 9876543217",
      posterUrl: "https://example.com/poster-esports.jpg"
    },
    {
      title: "Treasure Hunt",
      prize: "₹1500",
      icon: MapPin,
      description: "3 members per team",
      color: "from-green-400 to-cyan-500",
      fullDescription: "Solve clues, crack puzzles, and navigate through challenges in this exciting treasure hunt across the campus.",
      rules: [
        "Team size: 3 members",
        "Duration: 2 hours",
        "Campus-wide event",
        "Smartphones required"
      ],
      contact: "Hunt Coordinator: +91 9876543218",
      posterUrl: "https://example.com/poster-treasurehunt.jpg"
    },
    {
      title: "Group Dance",
      prize: "₹1250 & ₹750",
      icon: Users,
      description: "3-8 members per team",
      color: "from-pink-400 to-rose-500",
      fullDescription: "Express yourself through dance with your team. Showcase choreography, synchronization, and creative expression.",
      rules: [
        "Team size: 3-8 members",
        "Time limit: 6-8 minutes",
        "All dance forms welcome",
        "Own music required"
      ],
      contact: "Dance Coordinator: +91 9876543219",
      hasJury: true,
      posterUrl: "https://example.com/poster-groupdance.jpg"
    },
    {
      title: "Adaptune",
      prize: "₹1000 & ₹500",
      icon: Music,
      description: "Individual",
      color: "from-yellow-400 to-orange-500",
      fullDescription: "Adapt and perform songs in your unique style. Show your musical versatility and creativity in this adaptation challenge.",
      rules: [
        "Individual performance",
        "Time limit: 4-6 minutes",
        "Song adaptation required",
        "Instruments allowed"
      ],
      contact: "Music Coordinator: +91 9876543220",
      hasJury: true,
      posterUrl: "https://example.com/poster-adaptune.jpg"
    },
    {
      title: "Solo Dance",
      prize: "₹500",
      icon: Star,
      description: "Individual performance",
      color: "from-indigo-400 to-purple-500",
      fullDescription: "Showcase your individual dance skills and creativity. Express your personality through movement and rhythm.",
      rules: [
        "Individual performance",
        "Time limit: 3-5 minutes",
        "All dance styles welcome",
        "Props allowed"
      ],
      contact: "Solo Dance Coordinator: +91 9876543221",
      hasJury: true,
      posterUrl: "https://example.com/poster-solodance.jpg"
    },
    {
      title: "Singing Solo",
      prize: "₹500",
      icon: Music,
      description: "Individual",
      color: "from-blue-400 to-cyan-500",
      fullDescription: "Showcase your vocal talents in this solo singing competition. Perform your favorite songs and mesmerize the audience.",
      rules: [
        "Individual performance",
        "Time limit: 4-6 minutes",
        "Karaoke or live music",
        "All languages welcome"
      ],
      contact: "Vocal Coordinator: +91 9876543222",
      hasJury: true,
      posterUrl: "https://example.com/poster-solosinging.jpg"
    },
    {
      title: "Singing Group",
      prize: "₹1000",
      icon: Users,
      description: "Group performance",
      color: "from-teal-400 to-green-500",
      fullDescription: "Harmonize with your team in this group singing competition. Show teamwork, vocal coordination, and musical creativity.",
      rules: [
        "Team size: 3-6 members",
        "Time limit: 6-8 minutes",
        "Harmony and coordination judged",
        "Accompaniment allowed"
      ],
      contact: "Group Vocal Coordinator: +91 9876543223",
      hasJury: true,
      posterUrl: "https://example.com/poster-groupsinging.jpg"
    }
  ];

  const currentEvents = selectedDay === 1 ? day1Events : day2Events;

  const coordinators = [
    {
      name: "Prathiksha N",
      role: "Secretary",
      phone: "6374561354"
    },
    {
      name: "Yashwanth J",
      role: "Joint Secretary",
      phone: "7010976569"
    }
  ];

  const juryMembers = [
    {
      name: "Dr. Ramesh Kumar",
      role: "Chief Judge",
      expertise: "Classical Dance & Choreography",
      experience: "15+ years in performing arts",
      achievements: "Former principal dancer at National Ballet"
    },
    {
      name: "Ms. Priya Sharma",
      role: "Music Judge",
      expertise: "Vocal Performance & Music Composition",
      experience: "12+ years as music director",
      achievements: "Award-winning composer and vocalist"
    },
    {
      name: "Mr. Arjun Nair",
      role: "Dance Judge",
      expertise: "Contemporary & Hip-Hop",
      experience: "10+ years as choreographer",
      achievements: "International dance competition winner"
    },
    {
      name: "Prof. Sunita Desai",
      role: "Cultural Judge",
      expertise: "Traditional Arts & Folk Performance",
      experience: "20+ years in cultural studies",
      achievements: "Padma Shri recipient for cultural preservation"
    }
  ];

  // Jury Page Component
  const JuryPage = () => (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={goBackToEvent}
            className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Event
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
              <UserCheck size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Meet Our Jury
            </h1>
            <p className="text-xl text-gray-300">Expert judges evaluating performances with years of experience</p>
          </motion.div>

          {/* Centered Jury Member */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <Card className="backdrop-blur-lg bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 inline-block">
              <CardHeader>
                <div className="flex items-center gap-4 justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Dr. Ramesh Kumar</CardTitle>
                    <p className="text-orange-400 font-semibold">Chief Judge</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">Expertise</h4>
                    <p className="text-gray-300 text-sm">Classical Dance & Choreography</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-1">Experience</h4>
                    <p className="text-gray-300 text-sm">15+ years in performing arts</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-1">Achievements</h4>
                    <p className="text-gray-300 text-sm">Former principal dancer at National Ballet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );

  // Event Detail Page Component
  const EventDetailPage = ({ event }: { event: any }) => (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={goBackToHome}
            className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Events
          </motion.button>

          {/* Event Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center`}>
              <event.icon size={40} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {event.title}
            </h1>
            <p className="text-xl text-gray-300">{event.description}</p>
          </motion.div>

          {/* Event Poster Space */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <div className="relative inline-block">
              <div className="w-full max-w-2xl mx-auto h-96 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-2xl flex items-center justify-center border border-white/10">
                <img
                  src="/images/Frame 36.png"
                  alt="Event Poster"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </motion.div>

          {/* Event Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">About This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {event.fullDescription}
                  </p>
                  <div className="flex items-center gap-2 text-green-400">
                    <Trophy size={20} />
                    <span className="text-xl font-semibold">Prize: {event.prize}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Rules */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Rules & Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {event.rules.map((rule: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact & Jury */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-400 text-center">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
                    <Phone size={20} className="text-green-400" />
                    <span>{event.contact}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Jury Information */}
            {event.hasJury && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Card className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl hover:border-orange-500/30 transition-all duration-300 cursor-pointer" onClick={handleJuryClick}>
                  <CardHeader>
                    <CardTitle className="text-2xl text-orange-400 text-center">Expert Jury Panel</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-center gap-2 text-lg text-gray-300 mb-4">
                      <UserCheck size={20} className="text-cyan-400" />
                      <span>Professional judges with expertise</span>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                    >
                      Meet the Jury →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2" size={20} />
              Register Now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );

  if (currentPage === 'event-detail' && selectedEvent) {
    return <EventDetailPage event={selectedEvent} />;
  }

  if (currentPage === 'jury') {
    return <JuryPage />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              CREVANTE
            </h1>
            <div className="text-4xl md:text-6xl font-bold text-white mb-2">2K25</div>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-cyan-300 mb-6">
              <Calendar size={24} />
              <span>29.10.25</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            A day of creativity, competition, and performance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('events')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2" size={20} />
              View Events
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/5 transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2" size={20} />
              Contact
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About CREVANTE
            </h2>
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <p className="text-xl text-gray-300 leading-relaxed">
                CREVANTE is a multi-day college festival combining cultural performances, 
                competitions, and technology showcases. Experience the perfect blend of 
                creativity, innovation, and entertainment as students from across the region 
                come together to celebrate talent and achievement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Festival Events
            </h2>
            
            {/* Day Selector */}
            <div className="flex justify-center mb-12">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-2 border border-white/10 shadow-2xl">
                <div className="flex gap-2">
                  <motion.button
                    onClick={() => setSelectedDay(1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                      selectedDay === 1
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-2 text-lg font-semibold">
                      <Calendar size={20} />
                      Day 1
                    </div>
                    {selectedDay === 1 && (
                      <motion.div
                        layoutId="daySelector"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setSelectedDay(2)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                      selectedDay === 2
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-2xl shadow-pink-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-2 text-lg font-semibold">
                      <Calendar size={20} />
                      Day 2
                    </div>
                    {selectedDay === 2 && (
                      <motion.div
                        layoutId="daySelector"
                        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>

            <motion.p 
              key={selectedDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl text-gray-400"
            >
              {selectedDay === 1 
                ? "Business and management competitions" 
                : "Performance events and competitive challenges"
              }
            </motion.p>
          </motion.div>

          <motion.div 
            key={selectedDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <Card className="h-full backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <event.icon size={28} className="text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-400 text-sm mb-4">
                      {event.description}
                    </p>
                    <div className="text-sm text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                      Click for details →
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fees & Passes Section */}
      <section id="fees" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Fees & Passes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center backdrop-blur-lg bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-400">Entry Fee</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white mb-2">₹118</div>
                  <p className="text-gray-400">Basic entry to the festival</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center backdrop-blur-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">Solo Pass</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white mb-2">₹150</div>
                  <p className="text-gray-400">Individual participation</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center backdrop-blur-lg bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Best Value
                </Badge>
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-400">Premium Pass</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white mb-2">₹599</div>
                  <p className="text-gray-400">6 members included</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section id="coordinators" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Coordinators
            </h2>
            <p className="text-xl text-gray-400">Get in touch with our event coordinators</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coordinators.map((coordinator, index) => (
              <motion.div
                key={coordinator.name}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center backdrop-blur-lg bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                  <CardHeader>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center">
                      <Users size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{coordinator.name}</CardTitle>
                    <p className="text-orange-400 font-semibold">{coordinator.role}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
                      <Phone size={20} className="text-green-400" />
                      <span>{coordinator.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Stay Connected
            </h2>
            
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl mb-12">
              <p className="text-xl text-gray-300 mb-8">
                Follow us for updates and announcements about CREVANTE 2K25
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white"
                >
                  <ExternalLink className="mr-2" size={20} />
                  Follow on Social Media
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white backdrop-blur-sm bg-white/5"
                >
                  <Mail className="mr-2" size={20} />
                  Get Updates
                </Button>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-400">
                © CREVANTE 2K25 — Built with care
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}