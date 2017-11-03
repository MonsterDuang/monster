export default {
  // 存储歌曲id
  SAVE_SONG_ID (state, data) {
    let result = []
    for (var item of data) {
      result.push(item.song_id)
    }
    state.SongId = result
    state.nowPlay = {}
    state.nowPlayId = 0
  },
  // 存储歌曲url
  SAVE_SONG_MSG (state, data) {
    state.SongUrl = data
    state.nowPlay = state.SongUrl[state.nowPlayId]
  },
  CHANGE_NEXT_SONG (state) {
    state.nowPlayId += 1
    if (state.nowPlayId === state.SongUrl.length) {
      state.nowPlayId = 0
    }
    state.nowPlay = state.SongUrl[state.nowPlayId]
  },
  CHANGE_BEFORE_SONG (state) {
    state.nowPlayId -= 1
    if (state.nowPlayId === -1) {
      state.nowPlayId = state.SongUrl.length - 1
    }
    state.nowPlay = state.SongUrl[state.nowPlayId]
  },
  CHANGE_PERCENT (state, percent) {
    state.percent = percent
  },
  GET_TO_LIKE (state, data) {
    state.collection.push(data)
  },
  REMOVE_FROM_LIKE (state, data) {
    state.collection.splice(state.collection.indexOf(data), 1)
  },
  SAVE_COLLECTION (state, data) {
    state.collection = data
  },
  LIKE_SONG (state, index) {
    state.nowPlayId = index
    state.SongUrl = state.collection
    state.nowPlay = state.SongUrl[state.nowPlayId]
  },
  SAVE_ALL_BACKGROUND (state, data) {
    state.backgroundImg = data
  },
  CHANGE_IMG (state, img) {
    state.nowBackgroundUrl = img
  },
  SAVE_ARTICLE_DATA (state, data) {
    state.article = data.reverse()
  },
  SAVE_SONGLIST_DATA (state, data) {
    state.songlist = data.reverse()
  },
  SAVE_GIFT_DATA (state, data) {
    state.gift = data
  },
  CHANGE_IS_PLAYING_TRUE (state) {
    state.isPlaying = true
  },
  CHANGE_IS_PLAYING_FALSE (state) {
    state.isPlaying = false
  },
  SAVE_USERINFO (state, data) {
    state.userInfo = data
  },
  LOGOUT (state) {
    state.userInfo = {}
  },
  CHANGE_NOW_PLAY_LIST (state) {
    state.nowPlayList = 6 // collection
    state.SongUrl = state.collection
    state.nowPlay = state.SongUrl[state.nowPlayId]
  }
}
