import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InfoType } from "../types/InfoType";
import { Link } from "react-router-dom";


const InfoCard = ({ title, description, image, link, buttonText }: InfoType) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 275, m: 2 }}>
      <CardMedia component="img" height="130" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={link} style={{ textDecoration: "none" }}>
          <Button size="small">{buttonText}</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
