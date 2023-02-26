import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    videos: [],
    video:null
  },

  getters: {
    videos(state) {
      return state.video;
    },
    video(state) {
      return state.video;
    }
  },
  mutations: {
    setVideos(state, videos) {
      state.videos = videos;
    },
    setVideo(state, video) {
      state.video = video;
    }
  },
  actions: {
    fetchVideos(context, keyword = null) {
      if (!keyword) {
        context.commit("setVideos", []);
        return false;
      }

      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBjPuxKFyS74H7emOFe66jLL9wnJFrUUh4&type=video&part=snippet&maxResults=25&q=${keyword}`
        )
        .then((res) => context.commit("setVideos", res.data))
        .catch((err) => console.log("err", err));
    },

    fetchVideo(context, videoId) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyBjPuxKFyS74H7emOFe66jLL9wnJFrUUh4`
        )
        .then((res) => {
          context.commit("setVideo", res.data.items[0])
        })
        .catch((err) => console.log("err", err));
    }
  }
});

export default store;
