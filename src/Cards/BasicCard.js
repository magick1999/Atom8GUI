import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import ButtonBase from '@material-ui/core/ButtonBase';
import { purple } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';



import {makeStyles} from "@material-ui/core";

const PurpleSwitch = withStyles({
    switchBase: {
        color: purple[300],
        '&$checked': {
            color: purple[500],
        },
        '&$checked + $track': {
            backgroundColor: purple[500],
        },
    },
    checked: {},
    track: {},
})(Switch);

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '20px',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '150px',
        minWidth: '100px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        margin: '20px',
        justifyContent: 'space-evenly',
        alignItems:'center'
    },
    text:{
        margin: '10px',
    }
}));

export default function BasicCard(props) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Card className={classes.card}>
            <ButtonBase>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.text}>
                    {props.text}
                </Typography>
                {props.image}
                {props.addSwitch &&
                    <PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />
                    }
            </CardContent>
            </ButtonBase>
        </Card>);
}
