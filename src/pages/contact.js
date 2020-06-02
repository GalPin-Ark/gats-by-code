import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Breadcumb from '../components/breadcumb'
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
const stylesStripe = makeStyles(theme => ({

  stripeStyle: {
    backgroundColor: '#f7f8f9',
  },
  stripeElement: {
    height: '40px',
    padding: '10px 12px',
    color: '#32325d',
    backgroundColor: 'white',
    border: '1px solid transparent',
    borderRadius: '4px',
    boxShadow: '0 1px 3px 0 #e6ebf1',
    transition: 'box-shadow 150ms ease',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '&::placeholder': {
      color: '#aab7c4'
    },
    '&:focus': { boxShadow: '0 0px 3px  #93CEFF', outline: `none` },
  },
  stripeButton: {
    display: 'inline-block',
    height: '40px',
    width: '100%',
    marginTop: '40px',
    fontSize: '15px',
    fontWeight: '600',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    backgroundColor: '#32325d',
    border: 'none',
    '&:focus': { boxShadow: '0 1px 3px 0 #cfd7df', outline: `none` },
    '&:hover': { backgroundColor: '#32327d', outline: `none` },
  }

}));
const ContactUs = () => {
  const classes = stylesStripe();


  return (
    <Layout page="Contacto">
      <SEO title="Contacto" />
      <Breadcumb page="Contact Us" />
      {/* <section className="section-50 section-md-top-50 bg-wild-wand">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center p-3">
              Tour of a Christian school - 1hr 30 min school principal
                        </div>


            <div className="col-lg-6 text-center p-3">
              Visit an Orphanage and  Drug Rehab Center
                        </div>

          </div>
        </div>

      </section> */}
      <section className="section-80">
        <div className="container">
          <div className="row row-50 justify-content-sm-center justify-content-lg-between text-md-left">


            <div className="col-md-10 col-lg-6">
              <h5 className="text-ubold">Any Questions?</h5>

              <form className="rd-mailform text-left" data-form-output="form-output-global" data-form-type="contact" method="post" action="">
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" className={`form-control ${classes.stripeElement}`} id="inputName" name="inputName" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input type="email" className={`form-control ${classes.stripeElement}`} id="inputEmail" name="inputEmail" placeholder="example@mail.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="areaMessage">Message</label>
                  <textarea className={`form-control ${classes.stripeElement}`} id="areaMessage" name="areaMessage" data-constraints="@Required" placeholder="Insert your questions here." style={{ height: `120px` }}></textarea>
                </div>

                <div className="form-button text-center text-md-left d-flex justify-content-center">
                  <button className="btn btn-primary" type="submit">SEND MESSAGE</button>
                </div>
              </form>
            </div>
            <div className="col-md-10 col-lg-6">
              <h5 className="text-ubold">Our Contacts</h5>

              <address className="contact-info text-left pt-4 pl-3">
                <p className="d-block text-small contact-info-address">
                  <a className="text-gray" href="#">
                    <span className="unit flex-row unit-spacing-xs">
                      <span className="unit-left pr-3">
                        <LocationOnIcon />
                      </span>
                      <span className="unit-body">
                        <span>732/21 Second Street, Manchester, King Street, Kingston United Kingdom</span>
                      </span>
                    </span>
                  </a>
                </p>
                <p className="d-block text-small">
                  <a className="text-gray" href="tel:#">
                    <span className="unit align-items-center flex-row unit-spacing-xs">
                      <span className="unit-left pr-3">
                        <PhoneIcon />
                      </span>
                      <span className="unit-body">
                        <span>345-677-554</span>
                      </span>
                    </span>
                  </a>
                </p>

                <p className="d-block text-small">
                  <a className="text-gray" href="mailto:#">
                    <span className="unit align-items-center flex-row unit-spacing-xs">
                      <span className="unit-left pr-3">
                        <MailIcon />
                      </span>
                      <span className="unit-body">
                        <span>info@demolink.org</span>
                      </span>
                    </span>
                  </a>
                </p>

              </address>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-4 bg-white">
        <div className="container" >
          <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.897573527011!2d-97.08125488514419!3d15.861979789009318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8f7f11fa8f6cb%3A0xcf60f0785c9270ed!2sHotel%20Suites%20Brisas%20Carrizalillo!5e0!3m2!1ses-419!2smx!4v1579539283938!5m2!1ses-419!2smx"} width="100%" height="450"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            style={{
              border: `0`
            }}
            className="shadow-lg rounded"
          />

        </div>
      </section>
    </Layout>
  )

}

export default ContactUs