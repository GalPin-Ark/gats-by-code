import React from "react";
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';



const Video = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hide:true,
    }
    this.handleLoad = this.handleLoad.bind(this);
    // this.handleHide = this.handleHide.bind(this);
  }

  handleLoad(){
   this.setState({loading:false,hide:false});
  };
  // handleHide(){
  //   this.setState({hide:false});
  //  };
  render() {
    const props = this.props;
    const { loading,hide } = this.state;
    const CreateSkeleton = () => {
      return(
      <Box pt={0.5}>
        <Skeleton variant="text" />
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="rect"  height={120} />
      </Box>
      )
    }

    return (
      <div className="pt-3">
      
          
        { loading ? (
           <CreateSkeleton/>
          ) : null }
        <div className="video" hidden={hide} style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}>
          <iframe
            src={props.videoSrcURL}
            title={props.videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            onLoad={this.handleLoad}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            className="shadow rounded"
            
          />
         </div>
      </div>
    )
  }
}
export default Video