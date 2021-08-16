import { Paper, Typography } from '@material-ui/core';

function VideoDetail(props) {
    if (!props.video) return <div>Loading...</div>;

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

    return (
        <>
            <Paper elevation={6} style={{ height: "100vh" }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h6">{props.video.snippet.title}</Typography>
                <Typography variant="subtitle1">{props.video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{props.video.snippet.description}</Typography>
            </Paper>
        </>
    );
}

export default VideoDetail;