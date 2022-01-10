import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "react-rating";
import "./PersonReview.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    borderRadius: 10,
    marginTop: "50%",
    paddingTop: 10,
    left: "50%",
    borderRadius: 10,
    position: "relative",
    transform: "translate(-50%, -50%)",
    backgroundSize: "200%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    transition: "0.6s",
    backgroundImage: "linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)",
    "&:hover": {
      backgroundPosition: "right",
    },
  },
});

const PersonReview = (props) => {
  const classes = useStyles();
  console.log(props);
  const { name, rating, comments, img } = props.review;
  console.log(rating);
  return (
    <Grid xs={4} sm={4} md={4} container>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          style={{
            width: "auto",
            height: "80px",
            margin: "0 auto",
            borderRadius: "50%",
          }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" color="black" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="white">
            {comments}
          </Typography>
          <span className="style">
            <div className="col-span-9">
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star icon-star"
                fullSymbol="fas fa-star icon-star"
                readonly
              ></Rating>
            </div>
          </span>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PersonReview;
