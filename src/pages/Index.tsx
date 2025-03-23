
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock, BarChart3 } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: 'Secure & Transparent',
      description: 'Blockchain-powered voting ensures complete transparency and tamper-proof results.'
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: 'Private & Anonymous',
      description: 'Your identity remains protected while your vote is securely recorded.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: 'Real-time Results',
      description: 'View election outcomes as they happen with instant, verifiable counting.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero section */}
      <section className="pt-24 pb-16 px-6 sm:px-12 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy-dark mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Secure Digital Voting for Modern Elections
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Experience the future of voting with our blockchain-powered platform designed for transparency, security, and ease of use.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/login"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                <span className="flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
              <a 
                href="#learn-more"
                className="bg-white hover:bg-gray-50 text-navy-dark font-medium py-3 px-8 rounded-lg border border-gray-200 transition-all"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated graphic */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative py-24 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl"></div>
            <div className="glass-card p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                  <div className="p-6 bg-white rounded-xl shadow-soft mb-6">
                    <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 w-2/3 bg-navy-light/10 rounded mb-6"></div>
                    <div className="space-y-3">
                      <div className="h-10 bg-ballot rounded-lg"></div>
                      <div className="h-10 bg-ballot rounded-lg"></div>
                      <div className="h-10 bg-ballot rounded-lg"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-6">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-0.5 flex-1 mx-2 bg-green-200"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-0.5 flex-1 mx-2 bg-green-200"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-dark mb-4" id="learn-more">
                    The Most Secure Way to Cast Your Vote
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our platform combines cutting-edge blockchain technology with an intuitive interface, 
                    making it easy to participate in elections while ensuring maximum security and 
                    transparency for all stakeholders.
                  </p>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start"
                      >
                        <div className="mr-4 mt-1 p-2 bg-primary/10 rounded-lg">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-dark">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to action */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-navy-dark mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to experience the future of voting?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of organizations that trust our platform for their election needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/login"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <span className="flex items-center justify-center">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-navy font-semibold text-lg">BS</span>
            </div>
            <span className="font-bold text-xl text-white">
              Ballot Safari
            </span>
          </div>
          <p className="text-white/60 mb-6">
            Secure, transparent, and user-friendly voting platform
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Ballot Safari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
