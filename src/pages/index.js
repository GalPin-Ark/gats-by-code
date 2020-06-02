import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Link } from "gatsby"
const IndexPage = () => {
  
  
  return (
    <Layout page="Home">
      <SEO title="Home" />
     

      <Container component="section" maxWidth={false} className="section-50 section-md-top-50 bg-white">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>


            <div className="col-lg-6 text-center">
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image src="gatsby-astronaut.png" />

              </div>
            </div>
          </div>
        </div>

      </Container>

      <Container component="section" maxWidth={false} className="section-50 section-md-bottom-50 bg-wild-wand">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-10 col-lg-8 text-center text-md-right">
              <h2 className="col-12 text-center ">Get a custom tour</h2>
              <h6 className="col-12 text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
            </div>
            <div className="col-lg-2 text-center d-flex align-items-center"><Link to="/page-2" style={{ textDecoration: `none` }}>
               <Button variant="contained" color="secondary">
                Make tour
              </Button> 
              
            </Link></div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage