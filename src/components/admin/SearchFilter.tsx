
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  placeholder?: string;
}

const SearchFilter = ({ 
  searchQuery, 
  setSearchQuery, 
  placeholder = "Search..." 
}: SearchFilterProps) => {
  return (
    <div className="flex items-center mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
};

export default SearchFilter;
