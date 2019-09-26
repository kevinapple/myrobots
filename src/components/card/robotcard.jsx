import React from 'react';
import './robotcard.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#95dada",
      border: "1px solid grey",
      borderRadius: "5px",
      padding: "25px",
      cursor: "pointer",
      MozOsxFontSmoothing: "grayscale",
      backfaceVisibility: "hidden",
      transform: "translateZ(0)",
      transition: "transform 0.25s ease-out",
      "&:hover":{
        transform: "scale(1.05)"
    }
    },
    media: {
      height: 130,
    },
  });


export const RobotCard = (props) => {
    const classes = styles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}
                    title={props.monster.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.monster.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.monster.email}
                    </Typography>
                </CardContent>
            </CardActionArea> 
        </Card>
    );
};
