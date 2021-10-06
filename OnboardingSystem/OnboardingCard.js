

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width:250 ,
    height: 300,
  },
  expand: {
        marginLeft: "auto",
      },
});

export default function OnboardingCard({cardImage,cardTitle,cardContent,}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={cardImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <div className={classes.expand}>
          <Button color='primary'>ShortList</Button>
          <Button color='primary'>cancel</Button>
        </div>
      </CardActions>
    </Card>
  );
}
