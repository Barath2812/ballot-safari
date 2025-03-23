
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatCard from './StatCard';

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <StatCard 
        title="Total Elections"
        value="12"
        description="3 active, 2 scheduled, 7 completed"
      />
      <StatCard 
        title="Registered Voters"
        value="842"
        description="+24 since last month"
      />
      <StatCard 
        title="Total Votes Cast"
        value="3,281"
        description="Across all elections"
      />
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            <div className="text-sm font-medium">Operational</div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            All systems running
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
