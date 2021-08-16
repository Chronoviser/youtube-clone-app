import { Grid, Paper, Typography } from '@material-ui/core';

function VideoItem(props) {
    return (
        <Grid item xs={12}>
            <Paper style={{ dispay: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => props.onVideoSelect(props.video)}>
                <img style={{ marginRight: '20px' }} alt='thumbnail' src={props.video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"><strong>{props.video.snippet.title}</strong></Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;