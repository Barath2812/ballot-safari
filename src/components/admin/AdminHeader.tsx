
import { PlusCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

interface AdminHeaderProps {
  title: string;
  subtitle: string;
}

const AdminHeader = ({ title, subtitle }: AdminHeaderProps) => {
  const handleCreateElection = () => {
    toast.info('Create election functionality will be implemented soon!');
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy-dark">{title}</h1>
        <p className="text-muted-foreground mt-1">
          {subtitle}
        </p>
      </div>
      <Button onClick={handleCreateElection}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create Election
      </Button>
    </div>
  );
};

export default AdminHeader;
