
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent } from '@/components/ui/tabs';

// Admin Components
import AdminHeader from '@/components/admin/AdminHeader';
import DashboardStats from '@/components/admin/DashboardStats';
import TabNavigation from '@/components/admin/TabNavigation';
import SearchFilter from '@/components/admin/SearchFilter';
import ElectionsTable from '@/components/admin/ElectionsTable';
import UsersTable from '@/components/admin/UsersTable';
import PlaceholderCard from '@/components/admin/PlaceholderCard';

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto p-6 pt-24 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AdminHeader 
          title="Admin Dashboard"
          subtitle="Manage elections, users, and system settings"
        />

        <DashboardStats />

        <Tabs defaultValue="elections" className="mb-8">
          <TabNavigation />

          <SearchFilter 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search elections..."
          />

          <TabsContent value="elections" className="space-y-6">
            <ElectionsTable />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <UsersTable />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <PlaceholderCard
              title="Analytics"
              description="View voting statistics and trends"
              message="Analytics dashboard will be implemented soon"
            />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <PlaceholderCard
              title="System Settings"
              description="Configure general system parameters"
              message="Settings panel will be implemented soon"
            />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Admin;
