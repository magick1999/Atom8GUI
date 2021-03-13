import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeviceListItem from './DeviceListItem/DeviceListItem';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

export default function PinnedSubheaderList(props) {
    const classes = useStyles();

    return (
        <List className={classes.root} subheader={<li />}>
            {[0, 1].map((sectionId) => (
                <li key={`section-${sectionId}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>{`House ID: ${sectionId}`}</ListSubheader>
                        {props.deviceList.map((item) => (
                            <div key={`item-${sectionId}-${item.id}`}>
                                <DeviceListItem
                                    device={item}
                                />
                            </div>

                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
}
