(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.tweenRange = factory());
}(this, (function () { 'use strict';

const easings = {
  none: (t, b, c, d) => c * t / d + b,
  easeInQuad: (t, b, c, d) => c*(t/=d)*t + b,
  easeOutQuad: (t, b, c, d) => -c *(t/=d)*(t-2) + b,
  easeOutElastic: (t, b, c, d) => {
    var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  }
};

const tweenRange = (from, to, val, easing = 'none') => {
  const p = (val - from[0]) / (from[1] - from[0]),
        t = Math.min(Math.max(p, 0), 1),
        b = to[0],
        c = to[1] - to[0],
        d = 1;
  return easings[easing](t, b, c, d);
};

return tweenRange;

})));
