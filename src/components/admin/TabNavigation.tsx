
import { Calendar, Users, BarChart3, Settings } from 'lucide-react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const TabNavigation = () => {
  return (
    <TabsList className="mb-6">
      <TabsTrigger value="elections" className="flex items-center">
        <Calendar className="mr-2 h-4 w-4" />
        Elections
      </TabsTrigger>
      <TabsTrigger value="users" className="flex items-center">
        <Users className="mr-2 h-4 w-4" />
        Users
      </TabsTrigger>
      <TabsTrigger value="analytics" className="flex items-center">
        <BarChart3 className="mr-2 h-4 w-4" />
        Analytics
      </TabsTrigger>
      <TabsTrigger value="settings" className="flex items-center">
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </TabsTrigger>
    </TabsList>
  );
};

export default TabNavigation;
