const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const throttle =function (func, wait, options) {
    let time, context, args, result;
    let previous = 0;
    if (!options) options = {};
  
    let later = function() {
      previous = options.leading === false ? 0 : new Date().getTime();
      time = null;
      func.apply(context, args);
      if (!time) context = args = null;
    };
  
    let throttled = function() {
      let now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      let remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (time) {
          clearTimeout(time);
          time = null;
        }
        previous = now;
        func.apply(context, args);
        if (!time) context = args = null;
      } else if (!time && options.trailing !== false) {
        time = setTimeout(later, remaining);
      }
    };
    return throttled;
  }

module.exports = {
  formatTime,
  throttle
}
