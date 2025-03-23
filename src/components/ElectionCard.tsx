
import { motion } from 'framer-motion';
import { CalendarIcon, Users, Clock } from 'lucide-react';

interface ElectionCardProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: number;
  status: 'active' | 'upcoming' | 'ended';
  onClick: () => void;
}

const ElectionCard = ({
  title,
  description,
  startDate,
  endDate,
  participants,
  status,
  onClick
}: ElectionCardProps) => {
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ended': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'upcoming': return 'Upcoming';
      case 'ended': return 'Ended';
      default: return status;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="glass-card cursor-pointer overflow-hidden"
    >
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-navy-dark">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {getStatusText(status)}
          </span>
        </div>
        
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="pt-2 border-t border-gray-100 grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm">
              <p className="text-muted-foreground">{startDate} - {endDate}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{participants} Participants</span>
          </div>
        </div>

        <div className="mt-4">
          {status === 'active' && (
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Vote now</span>
              </div>
              <motion.div 
                className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ElectionCard;
