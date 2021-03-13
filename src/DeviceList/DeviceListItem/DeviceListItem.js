import React, {useEffect} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AndroidIcon from '@material-ui/icons/Android';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreIcon from '@material-ui/icons/More';
import Switch from '@material-ui/core/Switch';
import DataDisplayGraph from '../../Cards/DataDisplayGraph';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


export default function FolderList(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deviceData, setDeviceData] = React.useState(null);
    const [graph, setGraph] = React.useState(false);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const request = {
            method: 'GET',
            headers: new Headers({
                // 'id': props.device.writtenId
            }),
            mode   : 'cors',
            cache  : 'default'
        };
        console.log(request);
        fetch(`http://atom8api-dev.eu-central-1.elasticbeanstalk.com/v1/GetPlantById?id=${props.device.writtenId}`, request)
            .then(response => response.json())
            .then(json => setDeviceData(json));
        console.log(deviceData);
    }, []);
    const displayGraph = () => {

        setGraph(true);
    };

    const closeGraph = () => {
        setGraph(false);
    };

    return (
        <div>

            <ListItem button onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar>
                        <LocalFloristIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.device.name} secondary={props.device.writtenId}/>
            </ListItem>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                color="secondary"
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <AndroidIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Toggle Automate"/>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        color="primary"
                        name="checkedA"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <NotificationsIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Toggle Notifications"/>
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={displayGraph}
                >
                    <ListItemIcon>
                        <MoreIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Details About Device"/>
                </StyledMenuItem>
                <Modal
                    open={graph}
                    onClose={closeGraph}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={classes.modal}
                >
                    <DataDisplayGraph
                        deviceData={deviceData}
                    />
                </Modal>
                <StyledMenuItem>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Delete Device"/>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
