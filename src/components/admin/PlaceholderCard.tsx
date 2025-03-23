
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PlaceholderCardProps {
  title: string;
  description: string;
  message: string;
}

const PlaceholderCard = ({ title, description, message }: PlaceholderCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaceholderCard;
