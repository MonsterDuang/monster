/**
 * Created by Administrator on 2017/9/14.
 */

(function () {
  function myQuery (selector) {
    return myQuery.prototype._init(selector)
  }
  myQuery.prototype = {
    _init (selector) {
      this.ele = document.querySelector(selector)
      return this
    },
    // 点击事件
    tap (callBack) {
      var startTime
      this.ele.addEventListener('touchstart', listener)
      this.ele.addEventListener('touchend', listener)
      function listener (event) {
        event.preventDefault()
        if (event.type === 'touchstart') {
          startTime = new Date()
        } else {
          if (new Date() - startTime <= 300) {
            callBack(event)
          }
        }
      }
    },
    // 右滑事件
    swipeRight (callBack) {
      var startX
      this.ele.addEventListener('touchstart', listener)
      this.ele.addEventListener('touchend', listener)
      function listener (event) {
        event.preventDefault()
        var touch = event.changedTouches[0]
        if (event.type === 'touchstart') {
          startX = touch.clientX
        } else {
          if (touch.clientX - startX > 18) {
            callBack(event)
          }
        }
      }
    },
    // 左滑事件
    swipeLeft (callBack) {
      var startX
      this.ele.addEventListener('touchstart', listener)
      this.ele.addEventListener('touchend', listener)
      function listener (event) {
        event.preventDefault()
        var touch = event.changedTouches[0]
        if (event.type === 'touchstart') {
          startX = touch.clientX
        } else {
          if (touch.clientX - startX < -18) {
            callBack(event)
          }
        }
      }
    },
    // 上滑事件
    swipeUp (callBack) {
      var startY
      this.ele.addEventListener('touchstart', listener)
      this.ele.addEventListener('touchend', listener)
      function listener (event) {
        event.preventDefault()
        var touch = event.changedTouches[0]
        if (event.type === 'touchstart') {
          startY = touch.clientY
        } else {
          if (touch.clientY - startY < -18) {
            callBack(event)
          }
        }
      }
    },
    // 下滑事件
    swipeDown (callBack) {
      var startY
      this.ele.addEventListener('touchstart', listener)
      this.ele.addEventListener('touchend', listener)
      function listener (event) {
        event.preventDefault()
        var touch = event.changedTouches[0]
        if (event.type === 'touchstart') {
          startY = touch.clientY
        } else {
          if (touch.clientX - startY > 18) {
            callBack(event)
          }
        }
      }
    },
    // 长按事件
    longTag (handler) {
      this.ele.addEventListener('touchstart', touchFn)
      this.ele.addEventListener('touchmove', touchFn)
      this.ele.addEventListener('touchend', touchFn)
      var timerId
      function touchFn (e) {
        switch (e.type) {
          case 'touchstart':  // 500ms之后执行
            timerId = setTimeout(function () {
              e.stopPropagation()
              handler.call(this, e)
            }, 500)
            break
          case 'touchmove' :
            // 如果中间有移动也清除定时器
            clearTimeout(timerId)
            break
          case 'touchend' :
            // 如果在500ms之内抬起了手指，则需要定时器
            clearTimeout(timerId)
            break
        }
      }
    }
  }
  window.myQuery = myQuery
  window.$ = myQuery
})()
