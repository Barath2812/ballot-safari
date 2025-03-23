
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface CandidateProps {
  id: string;
  name: string;
  position: string;
  image?: string;
}

interface BallotCardProps {
  title: string;
  description: string;
  candidates: CandidateProps[];
  onVote: (candidateId: string) => void;
}

const BallotCard = ({ title, description, candidates, onVote }: BallotCardProps) => {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSelect = (id: string) => {
    if (!confirmed) {
      setSelectedCandidate(id);
    }
  };

  const handleVote = () => {
    if (selectedCandidate) {
      setProcessing(true);
      // Simulate API call
      setTimeout(() => {
        onVote(selectedCandidate);
        setConfirmed(true);
        setProcessing(false);
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass-card overflow-hidden max-w-3xl mx-auto"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold text-navy-dark mb-2">{title}</h2>
        <p className="text-muted-foreground mb-8">{description}</p>

        <AnimatePresence mode="wait">
          {!confirmed ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Select a candidate
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {candidates.map((candidate) => (
                  <motion.div
                    key={candidate.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleSelect(candidate.id)}
                    className={`p-5 rounded-lg cursor-pointer border transition-all ${
                      selectedCandidate === candidate.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {candidate.image ? (
                          <img
                            src={candidate.image}
                            alt={candidate.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-ballot flex items-center justify-center">
                            <span className="text-navy font-medium text-lg">
                              {candidate.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-navy-dark">{candidate.name}</h4>
                        <p className="text-sm text-muted-foreground">{candidate.position}</p>
                      </div>
                      {selectedCandidate === candidate.id && (
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <button
                  onClick={handleVote}
                  disabled={!selectedCandidate || processing}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    selectedCandidate && !processing
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  {processing ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    'Submit Vote'
                  )}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Vote Submitted Successfully</h3>
              <p className="text-muted-foreground mb-6">
                Your vote has been securely recorded on the blockchain.
              </p>
              <div className="bg-muted p-4 rounded-lg text-left">
                <p className="text-xs font-medium text-muted-foreground mb-1">Transaction Hash:</p>
                <p className="text-sm font-mono break-all text-navy">
                  0x72f764d252f5d72821559e46845bd3c817da43a89876e8ef15ba4249f6fdb2c5
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default BallotCard;
