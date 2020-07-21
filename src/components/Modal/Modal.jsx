import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { useHistory } from "react-router-dom";
import ContainedButtons from "../Button/Button";
import Loading from "../Loading/Loading"; // web.cjs is required for IE 11 support

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export default function SpringModal({total, handleLoader}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        const questions = [];
        const is_submit = false;
        handleLoader(questions, is_submit);
        history.push("/corona-test");
    };

    return (
        <div>
            {/*<button type="button" onClick={handleOpen}>*/}
            {/*    Submit*/}
            {/*</button>*/}
            {/*<ContainedButtons is_enable={is_enable} handleOpen={handleOpen}/>*/}
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Loading total={total}/>
                        {/*<h2 id="spring-modal-title">Spring modal</h2>*/}
                        {/*<p id="spring-modal-description">react-spring animates me.</p>*/}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
