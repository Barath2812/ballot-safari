
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, CalendarDays, ThumbsUp, ClipboardCheck } from 'lucide-react';
import ElectionCard from '../components/ElectionCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('active');

  // Mock elections data
  const elections = [
    {
      id: '1',
      title: 'Student Council Elections',
      description: 'Vote for your representatives for the upcoming academic year. Choose the candidates who will voice your concerns.',
      startDate: 'May 10, 2023',
      endDate: 'May 15, 2023',
      participants: 1240,
      status: 'active',
    },
    {
      id: '2',
      title: 'Department Head Selection',
      description: 'Select the new head of the Computer Science department from the shortlisted candidates.',
      startDate: 'May 20, 2023',
      endDate: 'May 25, 2023',
      participants: 450,
      status: 'upcoming',
    },
    {
      id: '3',
      title: 'Campus Improvement Proposal',
      description: 'Vote on the proposed changes to campus facilities and infrastructure for the next semester.',
      startDate: 'Apr 5, 2023',
      endDate: 'Apr 12, 2023',
      participants: 2100,
      status: 'ended',
    },
    {
      id: '4',
      title: 'Student Activity Budget Allocation',
      description: 'Help decide how to allocate the student activity budget for various clubs and events.',
      startDate: 'May 8, 2023',
      endDate: 'May 16, 2023',
      participants: 985,
      status: 'active',
    },
  ];

  const filteredElections = elections.filter(election => {
    // Filter by search query
    const matchesSearch = election.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          election.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by tab
    const matchesTab = activeTab === 'all' || election.status === activeTab;
    
    return matchesSearch && matchesTab;
  });

  const handleElectionClick = (id: string) => {
    navigate(`/vote/${id}`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="pt-8 pb-12">
          <motion.h1 
            className="text-3xl font-bold text-navy-dark mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Student Dashboard
          </motion.h1>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            View and participate in current elections
          </motion.p>
        </div>

        {/* Search and filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              placeholder="Search elections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex space-x-2 mb-2 overflow-x-auto pb-2">
            <TabButton 
              active={activeTab === 'all'} 
              onClick={() => handleTabChange('all')}
              icon={<ClipboardCheck className="h-4 w-4" />}
            >
              All Elections
            </TabButton>
            <TabButton 
              active={activeTab === 'active'} 
              onClick={() => handleTabChange('active')}
              icon={<ThumbsUp className="h-4 w-4" />}
            >
              Active
            </TabButton>
            <TabButton 
              active={activeTab === 'upcoming'} 
              onClick={() => handleTabChange('upcoming')}
              icon={<CalendarDays className="h-4 w-4" />}
            >
              Upcoming
            </TabButton>
            <TabButton 
              active={activeTab === 'ended'} 
              onClick={() => handleTabChange('ended')}
              icon={<ClipboardCheck className="h-4 w-4" />}
            >
              Ended
            </TabButton>
          </div>
        </motion.div>

        {/* Elections grid */}
        {filteredElections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredElections.map((election, index) => (
              <ElectionCard
                key={election.id}
                title={election.title}
                description={election.description}
                startDate={election.startDate}
                endDate={election.endDate}
                participants={election.participants}
                status={election.status as 'active' | 'upcoming' | 'ended'}
                onClick={() => handleElectionClick(election.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-navy-dark mb-2">No elections found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Tab button component
const TabButton = ({ 
  children, 
  active, 
  onClick,
  icon
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
  icon: React.ReactNode;
}) => {
  return (
    <button
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
        active
          ? 'bg-primary text-white shadow-sm'
          : 'bg-white text-navy hover:bg-gray-50 border border-gray-200'
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Dashboard;
