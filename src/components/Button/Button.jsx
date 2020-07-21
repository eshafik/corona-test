import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ContainedButtons({is_enable, handleLoader, questions}) {
    const classes = useStyles();
    const is_submit = true;
    if(is_enable){
        return (
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={()=>handleLoader(questions, is_submit)}>
                    Submit
                </Button>
            </div>
        );
    }
    else {
        return(
            <div className={classes.root}>
                <Button variant="contained" disabled>
                    Submit
                </Button>
            </div>
            )
    }


}
