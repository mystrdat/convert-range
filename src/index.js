const penner = {
  linear: (t, b, c, d) => {
    return c * t / d + b;
  },
  easeInQuad: (t, b, c, d) => {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: (t, b, c, d) => {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: (t, b, c, d) => {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  },
  easeInCubic: (t, b, c, d) => {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: (t, b, c, d) => {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: (t, b, c, d) => {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  },
  easeInQuart: (t, b, c, d) => {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: (t, b, c, d) => {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: (t, b, c, d) => {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    } else {
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  },
  easeInQuint: (t, b, c, d) => {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: (t, b, c, d) => {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: (t, b, c, d) => {
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  },
  easeInSine: (t, b, c, d) => {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: (t, b, c, d) => {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: (t, b, c, d) => {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: (t, b, c, d) => {
    if (t === 0) {
      return b;
    } else {
      return c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
  },
  easeOutExpo: (t, b, c, d) => {
    if (t === d) {
      return b + c;
    } else {
      return c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
  },
  easeInOutExpo: (t, b, c, d) => {
    if (t === 0) {
      b;
    }
    if (t === d) {
      b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  },
  easeInCirc: (t, b, c, d) => {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: (t, b, c, d) => {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: (t, b, c, d) => {
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  },
  easeInElastic: (t, b, c, d) => {
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d) === 1) {
      b + c;
    }
    if (!p) {
      p = d * .3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: (t, b, c, d) => {
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d) === 1) {
      b + c;
    }
    if (!p) {
      p = d * .3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: (t, b, c, d) => {
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d / 2) === 2) {
      b + c;
    }
    if (!p) {
      p = d * (.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    }
  },
  easeInBack: (t, b, c, d, s) => {
    if (s === void 0) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: (t, b, c, d, s) => {
    if (s === void 0) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: (t, b, c, d, s) => {
    if (s === void 0) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else {
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  },
  easeInBounce: (t, b, c, d) => {
    var v;
    v = penner.easeOutBounce(d - t, 0, c, d);
    return c - v + b;
  },
  easeOutBounce: (t, b, c, d) => {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  },
  easeInOutBounce: (t, b, c, d) => {
    var v;
    if (t < d / 2) {
      v = penner.easeInBounce(t * 2, 0, c, d);
      return v * .5 + b;
    } else {
      v = penner.easeOutBounce(t * 2 - d, 0, c, d);
      return v * .5 + c * .5 + b;
    }
  }
};

const tweenRange = (val, from, to, easing = 'linear') => {
  const p = (val - from[0]) / (from[1] - from[0]),
        t = Math.min(Math.max(p, 0), 1),
        b = to[0],
        c = to[1] - to[0],
        d = 1;
  return penner[easing](t, b, c, d);
};

export default tweenRange;
