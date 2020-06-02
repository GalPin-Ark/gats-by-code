import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Breadcumb from '../components/breadcumb'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import User from '@material-ui/icons/Person';
import Work from '@material-ui/icons/Work';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
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
    large: {
        width: '5rem',
        height: '5rem',
        border: 'red solid 2px'
    },
});
const avastyles = makeStyles(theme => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: '70px',
        height: '70px',
        borderRadius: '50%'
    },
}));
const AboutUs = () => {
    const classes = useStyles();
    const clastyles = avastyles();

    return (
        <Layout page="About Us">
            <SEO title="About Us" />
            <Breadcumb page="About Us" />
            <section className="section-50 section-md-top-50 bg-wild-wand">

                <div className="container">
                    <div className="row justify-content-center pb-3">
                        <Typography gutterBottom variant="h5" component="h5" >
                            Activities to do
                      </Typography>
                    </div>
                    <div className="row justify-content-center">

                        <Card style={{minHeight:`200px`}} className="col-5 col-lg-2 text-center p-3 bg-danger d-flex align-items-center  justify-content-center">
                            <CardContent>
                                <Typography className="" color="textSecondary" gutterBottom>
                                    Tour of a Christian school - 1hr 30 min school principal
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{minHeight:`200px`}} className="col-5 col-sm-6 col-lg-2 text-center p-3 bg-info d-flex align-items-center  justify-content-center">
                            <CardContent>
                                <Typography className="" color="textSecondary" gutterBottom>
                                    Visit an Orphanage and  Drug Rehab Center
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card style={{minHeight:`200px`}} className="col-5 col-sm-6 col-lg-2 text-center p-3 bg-warning d-flex align-items-center  justify-content-center">
                            <CardContent>
                                <Typography className="" color="textSecondary" gutterBottom>
                                    Traditional regional tours
                                </Typography>
                            </CardContent>
                        </Card>


                        <Card style={{minHeight:`200px`}} className="col-5 col-sm-6 col-lg-2 text-center p-3 bg-default d-flex align-items-center  justify-content-center">
                            <CardContent>
                                <Typography className="" color="textSecondary" gutterBottom>
                                    Christian Surfers Mexico 1 hr presentation surfing
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card style={{minHeight:`200px`}} className="col-5 col-sm-6 col-lg-2 text-center p-3 bg-primary d-flex align-items-center  justify-content-center">
                            <CardContent>
                                <Typography className="" color="textSecondary" gutterBottom>
                                    Tututepec - museum of iindigenous gods
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card style={{minHeight:`200px`}} className="col-5 col-sm-6 col-lg-2 p-3 bg-secondary d-flex align-items-center  justify-content-center">
                            <CardContent className="text-center "> 
                                <Typography  className="text-center" color="textSecondary" gutterBottom>
                                    Roca Blanca
                                </Typography>
                            </CardContent>
                        </Card>

                    </div>
                </div>

            </section>
            <section className="section-50 section-md-top-50 bg-white">

                <div className="container">
                    <div className="row justify-content-center">
                        <Typography gutterBottom variant="h5" component="h5">
                            Reviews
                      </Typography>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center p-3">
                            <Card className={classes.root}>
                                <CardContent>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="user2.jpg" className={`img-fluid ${clastyles.large}`} alt="..." />
                                        </div>
                                        <div className="col-8 " style={{ display: `flex`, float: `left`, paddingTop: `1rem` }}>
                                            <p> <User />Name Name
                                           <br />
                                                <Work />Work</p>
                                        </div>
                                    </div>

                                    <Typography className={classes.pos} color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     </Typography>
                                </CardContent>
                            </Card>
                        </div>


                        <div className="col-lg-6 text-center p-3">
                            <Card className={classes.root}>
                                <CardContent>


                                    <Typography className={classes.pos} color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     </Typography>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="user2.jpg" className={`img-fluid ${clastyles.large}`} alt="..." />
                                        </div>
                                        <div className="col-8 " style={{ display: `flex`, float: `left`, paddingTop: `1rem` }}>
                                            <p>Name Name
                                           <br />
                                                Work</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="col-lg-6 text-center p-3">
                            <Card className={classes.root}>
                                <CardContent>
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="user2.jpg" className={`img-fluid ${clastyles.large}`} alt="..." />
                                        </div>
                                        <div className="col-8 " style={{ display: `flex`, float: `left` }}>
                                            name
                                        </div>
                                    </div>

                                    <Typography className={classes.pos} color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     </Typography>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </div>
        
            </section>

        </Layout>
    )

}

export default AboutUs