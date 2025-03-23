
import { MoreHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

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

const getStatusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" | "success" | "warning" => {
  switch (status) {
    case 'active': return 'success';
    case 'scheduled': return 'warning';
    case 'completed': return 'secondary';
    case 'inactive': return 'outline';
    default: return 'default';
  }
};

const ElectionsTable = () => {
  return (
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
  );
};

export default ElectionsTable;
