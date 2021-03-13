import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from '../resources/logo-mare.png'
import Tipa from '../resources/pozaPS.png'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    card: {
        height: '100%',
        width: '100%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
            <Card className={classes.card}>
                <CardContent>
                    <img
                        src={Logo}
                        alt='Logo' width={500} height={300}
                    />
                    <Typography variant="h5" component="h2">
                        Your Smart Solution To Home Automation
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Be Clever
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
