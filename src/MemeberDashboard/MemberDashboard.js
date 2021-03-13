import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import BasicCard from "../Cards/BasicCard";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Flower from '../resources/cactus/cactusFericit.png'
import Water from '../resources/rezervor/gifFull.gif'
import DeviceList from '../DeviceList/DeviceList'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-around'
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {},
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    cardsContainer: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
}));

const cards = [
    // {image: <AndroidIcon/>, text: 'Automate', addSwitch: true},
    {image: <AddBoxIcon/>, text: 'Add Device', addSwitch: false},
    // {image: <NotificationsIcon/>, text: 'Notifications', addSwitch: true},
    // {image: <ListIcon/>, text: 'List Devices', addSwitch: false}
];

export default function MemberDashboard() {
    const classes = useStyles();
    const [deviceList, setDeviceList] = useState([]);
    useEffect(() => {
            const request = {
                method: 'GET',
                headers: {'Origin': '*'}
            };

            // window.fetch('https://jsonplaceholder.typicode.com/posts', request)
            fetch('http://atom8api-dev.eu-central-1.elasticbeanstalk.com/v1/GetAllPlants', request)
                .then(response => response.json())
                .then(json => setDeviceList(json));
        }


        , []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Box>
                        <img src={Water} alt='Water' height={100}/>
                        <Typography>The elixir of life for your plant</Typography>
                    </Box>
                    <Box>
                        <img src={Flower} alt='Flower' height={100}/>
                        <Typography>Your precious flower</Typography>
                    </Box>
                </div>
                {/* End hero unit */}
                <Box className={classes.cardsContainer}>
                    <DeviceList
                        deviceList={deviceList}
                    />
                    {cards.map((card) => {
                        return (<div key={card.text}><BasicCard
                            image={card.image}
                            text={card.text}
                            addSwitch={card.addSwitch}
                        /></div>)
                    })}
                </Box>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright/>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
