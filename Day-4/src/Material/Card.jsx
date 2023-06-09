import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function MyCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          My Card Title
        </Typography>
        <Typography color="textSecondary">
          My Card Subtitle
        </Typography>
        <Typography variant="body2" component="p">
          My Card Content
        </Typography>
      </CardContent>
    </Card>
  );
}
