
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Info, AlertTriangle } from 'lucide-react';
import BallotCard from '../components/BallotCard';

// Mock election data
const electionData = {
  '1': {
    id: '1',
    title: 'Student Council Elections',
    description: 'Vote for your representatives for the upcoming academic year. Choose the candidates who will voice your concerns.',
    candidates: [
      { id: 'c1', name: 'Alex Johnson', position: 'Computer Science Major, Junior Year' },
      { id: 'c2', name: 'Emma Rodriguez', position: 'Biology Major, Senior Year' },
      { id: 'c3', name: 'Michael Chen', position: 'Engineering Major, Junior Year' },
    ]
  },
  '4': {
    id: '4',
    title: 'Student Activity Budget Allocation',
    description: 'Help decide how to allocate the student activity budget for various clubs and events.',
    candidates: [
      { id: 'c4', name: 'Proposal A: Arts & Culture Focus', position: 'Increase funding for arts and cultural events' },
      { id: 'c5', name: 'Proposal B: Sports & Recreation Focus', position: 'Boost sports facilities and recreational activities' },
      { id: 'c6', name: 'Proposal C: Balanced Approach', position: 'Equal distribution across all existing programs' },
    ]
  }
};

const Vote = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [election, setElection] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call to fetch election details
    setLoading(true);
    setTimeout(() => {
      if (id && electionData[id as keyof typeof electionData]) {
        setElection(electionData[id as keyof typeof electionData]);
        setError(null);
      } else {
        setError('Election not found or no longer active');
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleVote = (candidateId: string) => {
    console.log(`Vote cast for candidate: ${candidateId}`);
    // In a real app, this would send the vote to the backend
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-navy-dark">Loading ballot...</h2>
          <p className="text-muted-foreground">Please wait while we securely load your ballot</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-xl font-semibold text-navy-dark mb-2">Error Loading Ballot</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="pt-8 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center mb-6"
          >
            <button
              onClick={handleBack}
              className="flex items-center text-navy-dark hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-lg bg-blue-50 border border-blue-200 flex items-start space-x-3 mb-8"
          >
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-navy-dark">Secure Voting Process</h3>
              <p className="text-sm text-muted-foreground">
                Your vote is anonymous and will be securely recorded on the blockchain. 
                You will receive a transaction receipt after your vote is submitted.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Ballot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <BallotCard
            title={election.title}
            description={election.description}
            candidates={election.candidates}
            onVote={handleVote}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Vote;
