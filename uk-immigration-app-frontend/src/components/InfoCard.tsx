import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type InfoCardProps = {
  id: string;
  title: string;
  description: string;
  learnMoreLink?: string;
};

const InfoCard = ({ id, title, description, learnMoreLink }: InfoCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 275, m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {learnMoreLink && (
        <CardActions>
          <Button
            size="small"
            href={learnMoreLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default InfoCard;
