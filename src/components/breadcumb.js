
import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Container from '@material-ui/core/Container';
const Breadcumb = ({ page }) => {

    return (
        <Container component="section" maxWidth={false} className="section-70 section-md-top-80 bg-gray" style={{ zIndex: `0`, backgroundImage: `url(1920Asset7.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center bottom`, maxHeight: `35rem`, height: `15rem`, display: `flex`, alignItems: `center` }} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="large" className="text-white" />} className="row justify-content-center">
                            <Link color="inherit" href="/" >
                                <Typography color="textPrimary" variant="h5" component="h1" className="text-white">Home</Typography>
                            </Link>
                            <Typography color="textPrimary" variant="h5" component="h1" className="text-white">{page}</Typography>
                        </Breadcrumbs>
                    </div>
                </div>
            </div>

        </Container>
    );

}

export default Breadcumb;
