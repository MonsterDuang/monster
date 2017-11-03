import http from 'axios'
import api from '@/api'
export default {
  // 获取 新歌榜
  getNewSong ({commit}) {
    let url = api.host + 'billboard.billList&type=1&size=50&offset=0'
    return http.get(url).then(res => {
      commit('SAVE_SONG_ID', res.data.song_list)
    })
  },
  getNewSongUrl (store) {
    let result = []
    for (let i in store.state.SongId) {
      let songId = store.state.SongId[i]
      let url = api.host + 'song.play&songid=' + songId
      http.get(url).then(res => {
        result.push(res.data)
        store.state.nowPlayList = 1
        store.commit('SAVE_SONG_MSG', result)
      })
    }
  },
  // 获取 热歌榜
  getHotSong ({commit}) {
    let url = api.host + 'billboard.billList&type=2&size=50&offset=0'
    return http.get(url).then(res => {
      commit('SAVE_SONG_ID', res.data.song_list)
    })
  },
  getHotSongUrl (store) {
    let result = []
    for (let i in store.state.SongId) {
      let songId = store.state.SongId[i]
      let url = api.host + 'song.play&songid=' + songId
      http.get(url).then(res => {
        result.push(res.data)
        store.state.nowPlayList = 2
        store.commit('SAVE_SONG_MSG', result)
      })
    }
  },
  // 获取 欧美金曲
  getEusSong ({commit}) {
    let url = api.host + 'billboard.billList&type=21&size=50&offset=0'
    return http.get(url).then(res => {
      commit('SAVE_SONG_ID', res.data.song_list)
    })
  },
  getEusSongUrl (store) {
    let result = []
    for (let i in store.state.SongId) {
      let songId = store.state.SongId[i]
      let url = api.host + 'song.play&songid=' + songId
      http.get(url).then(res => {
        result.push(res.data)
        store.state.nowPlayList = 3
        store.commit('SAVE_SONG_MSG', result)
      })
    }
  },
  // 获取 经典老歌
  getOldSong ({commit}) {
    let url = api.host + 'billboard.billList&type=22&size=50&offset=0'
    return http.get(url).then(res => {
      commit('SAVE_SONG_ID', res.data.song_list)
    })
  },
  getOldSongUrl (store) {
    let result = []
    for (let i in store.state.SongId) {
      let songId = store.state.SongId[i]
      let url = api.host + 'song.play&songid=' + songId
      http.get(url).then(res => {
        result.push(res.data)
        store.state.nowPlayList = 4
        store.commit('SAVE_SONG_MSG', result)
      })
    }
  },
  // 获取 摇滚金曲
  getRockSong ({commit}) {
    let url = api.host + 'billboard.billList&type=11&size=50&offset=0'
    return http.get(url).then(res => {
      commit('SAVE_SONG_ID', res.data.song_list)
    })
  },
  getRockSongUrl (store) {
    let result = []
    for (let i in store.state.SongId) {
      let songId = store.state.SongId[i]
      let url = api.host + 'song.play&songid=' + songId
      http.get(url).then(res => {
        result.push(res.data)
        store.state.nowPlayList = 5
        store.commit('SAVE_SONG_MSG', result)
      })
    }
  },
  getToLike (store, data) {
    let url = api.db + 'usercollection'
    return http.post(url, data).then(res => {
      store.commit('GET_TO_LIKE', res.data)
    })
  },
  removeFromLike (store, data) {
    let url = api.db + 'user/' + store.state.userInfo.id + '?_embed=usercollection'
    return http.get(url).then(res => {
      let collection = res.data.usercollection
      for (let item of collection) {
        if (item.songinfo.song_id === data.songinfo.song_id) {
          let deleteItem = item
          let deleteApi = api.db + 'usercollection/' + deleteItem.id
          return http.delete(deleteApi).then(res => {
            store.commit('REMOVE_FROM_LIKE', res.data)
          })
        }
      }
    })
  },
  changeBg ({commit}, img) {
    commit('CHANGE_IMG', img)
  },
  changeNextSong ({commit}) {
    commit('CHANGE_NEXT_SONG')
  },
  changeBeforeSong ({commit}) {
    commit('CHANGE_BEFORE_SONG')
  },
  likeSong ({commit}, index) {
    commit('LIKE_SONG', index)
  },
  getAllBgImg ({commit}) {
    let url = api.db + 'background'
    return http.get(url).then(res => {
      commit('SAVE_ALL_BACKGROUND', res.data)
    })
  },
  getArticleData ({commit}) {
    let url = api.db + 'artic'
    return http.get(url).then(res => {
      commit('SAVE_ARTICLE_DATA', res.data)
    })
  },
  getSonglistData ({commit}) {
    let url = api.db + 'songlist'
    return http.get(url).then(res => {
      commit('SAVE_SONGLIST_DATA', res.data)
    })
  },
  getGiftData ({commit}) {
    let url = api.db + 'gift'
    return http.get(url).then(res => {
      commit('SAVE_GIFT_DATA', res.data)
    })
  },
  login ({commit}, phone) {
    let url = api.db + 'user?phone=' + phone
    return http.get(url)
      .then(res => {
        if (res.data.length > 0) {
          // 已有>>>登陆获取用户信息
          let data = res.data[0]
          commit('SAVE_USERINFO', data)
          // 获取该用户收藏夹
          let getCollectionApi = api.db + 'user/' + data.id + '?_embed=usercollection'
          http.get(getCollectionApi)
            .then(res => {
              // 保存收藏夹
              commit('SAVE_COLLECTION', res.data.usercollection)
            })
          return '登陆成功'
        } else {
          // 没有>>>注册
          let url = api.db + 'user'
          let userObj = {
            phone: phone
          }
          return http.post(url, userObj)
            .then(res => {
              // 用户信息保存userInfo
              commit('SAVE_USERINFO', res.data)
              return '注册成功'
            })
        }
      })
  }
}
