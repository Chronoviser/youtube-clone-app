import { Grid } from '@material-ui/core';
import VideoItem from './Video-Item';

function VideoList(props) {

    const videos = props.videos.map((video, i) => (i === 0) ? null : <VideoItem onVideoSelect={props.onVideoSelect} key={i} video={video} />)


    return (
        <Grid container spacing={10}>
            {videos}
        </Grid>
    );
}

export default VideoList;