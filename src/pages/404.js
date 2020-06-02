import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '@material-ui/core/Container';
import Video from "../components/video"
const videoSrcURL = "https://www.youtube.com/embed/zV2J1esiQM8";
const videoTitle = "Official Music Video on YouTube";



const NotFoundPage = () => {

  return (
    <Layout>
      <SEO title="404: Not found" />
      


      <Container component="section" maxWidth={false} className="section-80 section-md-top-70 bg-white">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center" >
              <h1>NOT FOUND</h1>
              <p>You just hit a page that doesn't exist... the sadness.</p>
              <p>May I suggest a video instead?</p>
              <h1>NOT FOUND</h1>
              <p>You just hit a page that doesn't exist... the sadness.</p>
              <p>May I suggest a video instead?</p>
              <h1>NOT FOUND</h1>
              <p>You just hit a page that doesn't exist... the sadness.</p>
              <p>May I suggest a video instead?</p>

            </div>
            <div className="col-lg-6 text-center">
              <div >
                <Video videoSrcURL={videoSrcURL} videoTitle={videoTitle} />
              </div>
            </div>
          </div>
        </div>
      </Container>

    </Layout>
  )
}
export default NotFoundPage