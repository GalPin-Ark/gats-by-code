import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ImageFixed from "./imageFixed";
import Divider from '@material-ui/core/Divider';
import Face from '@material-ui/icons/Facebook'
import Twi from '@material-ui/icons/Twitter'
import What from '@material-ui/icons/WhatsApp'
import Insta from '@material-ui/icons/Instagram'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">

            {new Date().getFullYear()}
            {'. '}
            {'Copyright © '}

                Two Fish Travel. All rights reserved.
            {' '}
            <Link color="inherit" href="https://material-ui.com/">
                Developed by UnoZero Code SA de CV.
      </Link>
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({

    footer: {
        padding: theme.spacing(3, 2),
        backgroundColor: '#D9CCE6',

        position: 'relative',
        bottom: '0px',
        left: '0px',

    }
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.footer} id="footer">
            <CssBaseline />
            <footer>

                <section className="container " >
                    <div className="row justify-content-center">

                        <div className="col-12 col-lg-6 text-center pb-3 ">
                            <ImageFixed src="logo.png" />
                            <Typography className="col-12" variant="body1">My sticky footer can be found here.</Typography>
                        </div>

                        <div className="col-12 col-lg-6 text-center pb-3 ">
                            <Typography className="col-12" variant="body1">Deserunt tempor ullamco do commodo officia.</Typography>
                            <Box m={1}>
                                <span className="material-icons pr-1"><Face /></span>
                                <span className="material-icons pr-1"><Insta /></span>
                                <span className="material-icons pr-1"><Twi /></span>
                                <span className="material-icons pr-1"><What /></span>
                            </Box>
                        </div>

                        <div className="col-12 text-center">
                            <Divider className="m-3" />
                            <Copyright className="col-12" />
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
}