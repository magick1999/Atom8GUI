import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Flower from '../resources/cactus/cactusFericit.png'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    card: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <CardContent>
                    <img
                        src={Flower}
                        alt='Logo' width={250} height={300}
                    />
                    <Typography variant="h5" component="h2">
                        Your Smart Solution To Home Automation
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Be Clever
                    </Typography>
                </CardContent>
            </div>
        </div>
    );
}
