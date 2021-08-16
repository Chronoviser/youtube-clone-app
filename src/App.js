import { Grid } from '@material-ui/core';
import { useState } from 'react';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components';

function App() {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)


    async function handleSubmit(searchTerm) {
          const response = await youtube.get('search', {
              params: {
                  part: 'snippet',
                  maxResults: 10,
                  key: '[API_KEY]',
                  q: searchTerm
              }
          });
  
          setVideos(response.data.items)
          setSelectedVideo(response.data.items[0])
    }

    function onVideoSelect(video) {
        setSelectedVideo(video);
    }

    return (
        <div>
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
