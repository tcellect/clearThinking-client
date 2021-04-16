import React from "react";
import {
    Typography,
    Grid,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    makeStyles,
    CardActionArea,
    List,
    Button,
    Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 50,
    },
});

export default function Cognition() {
    const classes = useStyles();

    const handleClick = () => {};

    return (
        <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/200/300?blur"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lorem Ipsum
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Dolor non duis minim labore quis Lorem. Ex eu elit
                            Lorem cillum dolor sunt adipisicing esse aliquip
                            amet enim enim. Reprehenderit tempor officia veniam
                            nisi exercitation deserunt incididunt adipisicing
                            labore labore anim quis irure. Duis nulla pariatur
                            sit nostrud elit qui do Lorem cillum commodo
                            consequat anim id elit. Ipsum mollit in in et. Anim
                            proident officia aliqua minim tempor amet culpa aute
                            culpa.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary" onClick={handleClick}>
                        Edit
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
