import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: 35
    },
    media: {
        height: 140,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Test Covid-19" value="/corona-test" component={Link} to="/corona-test"/>
                <Tab label="Developer" value="/corona-test/about" component={Link} to="/corona-test/about"/>
            </Tabs>
        </Paper>
    );
}