import http from 'axios'
import api from '@/api'
import util from '@/util'
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
  // 存储歌曲lrc
  SAVE_SONG_LRC (state) {
    state.nowPlayLrc = []
    state.noLrc = false
    let songId = state.nowPlay.songinfo.song_id
    let lrcUrl = api.song_id + 'song.lry&songid=' + songId
    http.get(lrcUrl).then(res => {
      if (res.data.error_code) {
        state.noLrc = true
      } else {
        let lrc = res.data.lrcContent
        if (lrc.indexOf('[') > -1) {
          lrc = lrc.split(/\n/)
          for (let i in lrc) {
            let str = lrc[i]
            let reg = /\[(.+)\](.+)?/
            if (str.match(reg)[2] !== undefined) {
              state.nowPlayLrc.push(str.match(reg))
            }
          }
        } else {
          let Lrc = lrc.split()
          Lrc.unshift('')
          Lrc.unshift('')
          state.nowPlayLrc[0] = Lrc
        }
      }
    })
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
  CHANGE_LRC (state, nowTime) {
    /* eslint-disable */
    let heightLight = '', afterColor = ''
    switch (state.nowPlayList) {
      case 1:
        heightLight = 'rgba(213, 132, 42, 0.9)'
        afterColor = 'rgba(213, 132, 42, 0.3)'
        break
      case 2:
        heightLight = 'rgba(23, 173, 75, 0.9)'
        afterColor = 'rgba(23, 173, 75, 0.3)'
        break
      case 3:
        heightLight = 'rgba(45, 32, 142, 0.9)'
        afterColor = 'rgba(45, 32, 142, 0.3)'
        break
      case 4:
        heightLight = 'rgba(200, 10, 242, 0.9)'
        afterColor = 'rgba(200, 10, 242, 0.3)'
        break
      case 5:
        heightLight = 'rgba(200, 12, 42, 0.9)'
        afterColor = 'rgba(200, 12, 42, 0.3)'
        break
    }
    state.nowPlayLrc.map((val, index) => {
      if (val[1].slice(0, 5) == util.sec_to_time(nowTime).slice(3, 8) && state.nowPlayLrc.length > 1) {
        val.push('color: ' + heightLight)
        let lrcScroll = document.getElementById('lrc_scroll')
        let lrcContainerTop = document.getElementsByClassName('lrc')[0].getBoundingClientRect().top
        let lrcContainerHeight = document.getElementsByClassName('lrc')[0].getBoundingClientRect().y
        let lrcTop = document.getElementById(val[1]).getBoundingClientRect().top
        if (lrcTop > (lrcContainerTop + lrcContainerHeight / 2)) {
          lrcScroll.scrollTop += lrcTop - (lrcContainerTop + lrcContainerHeight / 2)
        }
        if (index != 0) {
          if (state.nowPlayLrc[index - 1][3] != '') {
            state.nowPlayLrc[index - 1][3] = 'color: ' + afterColor
          }
        }
      } 
    })
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
    if (state.nowPlayList === 6) {
      state.nowPlay = {}
      state.isPlaying = false
      state.nowPlayList = 0
    }
  },
  CHANGE_NOW_PLAY_LIST (state) {
    state.nowPlayList = 6 // collection
    if (state.collection.length !== 0) {
      state.SongUrl = state.collection
      state.nowPlay = state.SongUrl[state.nowPlayId]
    }
  },
  CHANGE_NEIGHT (state) {
    state.Neight = state.Neight === '夜间' ? '白天' : '夜间'
    if (state.Neight === '白天') {
      state.isNeight = true
    } else {
      state.isNeight = false
    }
  }
}
