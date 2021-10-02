import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./hooks/useVideos";

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  //removed for a custom hook
  // useEffect(() => {
  //   onTermSubmit("Welcome");
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });
  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  return (
    <div className='ui container'>
      <SearchBar onPropFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;

// excerpt below removed from above. these are the same, if you wanna get rid of a callback !!! fuckkkkk
// {
//   VideoList
// onVideoSelect={(video) => setSelectedVideo(video)}
// videos={videos}
// />
//  VideoList
//  onVideoSelect={setSelectedVideo}
//  videos={videos}

// }

//converted into a function component
// class App extends React.Component {
// state = { videos: [], selectedVideo: null };

// componentDidMount() {
// this.onTermSubmit("WELCOME");
// }
// onTermSubmit = async (term) => {
//   const response = await youtube.get("/search", {
//     params: {
//       q: term,
//     },
//   });

//   this.setState({
//     videos: response.data.items,
//     selectedVideo: response.data.items[0],
//   });
// };

// onVideoSelect = (video) => {
//   this.setState({ selectedVideo: video });
// };

// render() {
//
// }
// }
