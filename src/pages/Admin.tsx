
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Users, Calendar, BarChart3, Settings, 
  PlusCircle, Search, ArrowUpDown, MoreHorizontal 
} from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

// Mock data for elections
const mockElections = [
  { 
    id: 'e1', 
    title: 'Student Council 2023', 
    status: 'active', 
    startDate: '2023-09-01', 
    endDate: '2023-09-15',
    voters: 243,
    candidates: 8
  },
  { 
    id: 'e2', 
    title: 'Faculty Representative', 
    status: 'scheduled', 
    startDate: '2023-10-10', 
    endDate: '2023-10-20',
    voters: 120,
    candidates: 4
  },
  { 
    id: 'e3', 
    title: 'Department Head Selection', 
    status: 'completed', 
    startDate: '2023-08-01', 
    endDate: '2023-08-10',
    voters: 56,
    candidates: 3
  },
  { 
    id: 'e4', 
    title: 'Library Committee', 
    status: 'completed', 
    startDate: '2023-07-15', 
    endDate: '2023-07-25',
    voters: 89,
    candidates: 5
  },
];

// Mock data for users
const mockUsers = [
  { id: 'u1', name: 'John Smith', email: 'john.smith@example.com', role: 'admin', status: 'active' },
  { id: 'u2', name: 'Sarah Johnson', email: 'sarah.j@example.com', role: 'voter', status: 'active' },
  { id: 'u3', name: 'Michael Brown', email: 'michael.b@example.com', role: 'voter', status: 'inactive' },
  { id: 'u4', name: 'Emma Davis', email: 'emma.davis@example.com', role: 'voter', status: 'active' },
];

// Type for status badge variants
type StatusVariant = 'default' | 'success' | 'warning' | 'destructive' | 'outline' | 'secondary';

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCreateElection = () => {
    toast.info('Create election functionality will be implemented soon!');
  };

  const getStatusVariant = (status: string): StatusVariant => {
    switch (status) {
      case 'active': return 'success';
      case 'scheduled': return 'warning';
      case 'completed': return 'secondary';
      case 'inactive': return 'outline';
      default: return 'default';
    }
  };

  return (
    <div className="container mx-auto p-6 pt-24 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-dark">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Manage elections, users, and system settings
            </p>
          </div>
          <Button onClick={handleCreateElection}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Election
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Elections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-1">
                3 active, 2 scheduled, 7 completed
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Registered Voters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">842</div>
              <p className="text-xs text-muted-foreground mt-1">
                +24 since last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Votes Cast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,281</div>
              <p className="text-xs text-muted-foreground mt-1">
                Across all elections
              </p>
            </CardContent>
          </Card>
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

        <Tabs defaultValue="elections" className="mb-8">
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

          <div className="flex items-center mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search elections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <TabsContent value="elections" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Elections</CardTitle>
                <CardDescription>
                  Manage all elections in the system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Title</TableHead>
                      <TableHead className="w-[120px]">Status</TableHead>
                      <TableHead className="w-[150px]">Start Date</TableHead>
                      <TableHead className="w-[150px]">End Date</TableHead>
                      <TableHead className="w-[100px]">Voters</TableHead>
                      <TableHead className="w-[120px]">Candidates</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockElections.map((election) => (
                      <TableRow key={election.id}>
                        <TableCell className="font-medium">{election.title}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusVariant(election.status)}>
                            {election.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{election.startDate}</TableCell>
                        <TableCell>{election.endDate}</TableCell>
                        <TableCell>{election.voters}</TableCell>
                        <TableCell>{election.candidates}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Election</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                Delete Election
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                  Manage users and access permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Name</TableHead>
                      <TableHead className="w-[300px]">Email</TableHead>
                      <TableHead className="w-[150px]">Role</TableHead>
                      <TableHead className="w-[150px]">Status</TableHead>
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === 'admin' ? 'secondary' : 'outline'}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'active' ? 'success' : 'outline'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit User</DropdownMenuItem>
                              <DropdownMenuItem>Reset Password</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  View voting statistics and trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Analytics dashboard will be implemented soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure general system parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Settings panel will be implemented soon
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Admin;
