// Avoid `console` errors in browsers that lack a console.
(function(){var method;var noop=function(){};var methods=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeline','timelineEnd','timeStamp','trace','warn'];var length=methods.length;var console=(window.console=window.console||{});while(length--){method=methods[length];if(!console[method]){console[method]=noop}}}());

/*
var consoleMsg = ["\n%c%c %c Made By ZORRAQUINO - www.zorraquino.com %c \n\n","color: #000000; background: #000000; padding:0 0 0 81px; font-size:12px;","color: #000000 background: #ffffff; padding:0;","background: #ffffff; padding:0;","color: #fff; background: #ffffff; padding:0;"];
if (window.console.log.apply) window.console.log.apply(console, consoleMsg);
*/


// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame']}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(id){clearTimeout(id)}}());

Date.now = Date.now || function() { return +new Date; };

/*!
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2014
  */
!function(e,t){typeof module!="undefined"&&module.exports?module.exports.browser=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=n(/edge\/(\d+(\.\d+)?)/i),a=n(/version\/(\d+(\.\d+)?)/i),f=/tablet/i.test(t),l=!f&&/[^-]mobi/i.test(t),c;/opera|opr/i.test(t)?c={name:"Opera",opera:e,version:a||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?c={name:"Yandex Browser",yandexbrowser:e,version:a||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?(c={name:"Windows Phone",windowsphone:e},u?(c.msedge=e,c.version=u):(c.msie=e,c.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?c={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?c={name:"Microsoft Edge",msedge:e,version:u}:/chrome|crios|crmo/i.test(t)?c={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?(c={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},a&&(c.version=a)):/sailfish/i.test(t)?c={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?c={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(c={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(c.firefoxos=e)):/silk/i.test(t)?c={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:o?c={name:"Android",version:a}:/phantom/i.test(t)?c={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?c={name:"BlackBerry",blackberry:e,version:a||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(c={name:"WebOS",webos:e,version:a||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(c.touchpad=e)):/bada/i.test(t)?c={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?c={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||a}:/safari/i.test(t)?c={name:"Safari",safari:e,version:a}:c={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!c.msedge&&/(apple)?webkit/i.test(t)?(c.name=c.name||"Webkit",c.webkit=e,!c.version&&a&&(c.version=a)):!c.opera&&/gecko\//i.test(t)&&(c.name=c.name||"Gecko",c.gecko=e,c.version=c.version||n(/gecko\/(\d+(\.\d+)?)/i)),!c.msedge&&(o||c.silk)?c.android=e:i&&(c[i]=e,c.ios=e);var h="";c.windowsphone?h=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(h=n(/os (\d+([_\s]\d+)*) like mac os x/i),h=h.replace(/[_\s]/g,".")):o?h=n(/android[ \/-](\d+(\.\d+)*)/i):c.webos?h=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):c.blackberry?h=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):c.bada?h=n(/bada\/(\d+(\.\d+)*)/i):c.tizen&&(h=n(/tizen[\/\s](\d+(\.\d+)*)/i)),h&&(c.osversion=h);var p=h.split(".")[0];if(f||i=="ipad"||o&&(p==3||p==4&&!l)||c.silk)c.tablet=e;else if(l||i=="iphone"||i=="ipod"||o||c.blackberry||c.webos||c.bada)c.mobile=e;return c.msedge||c.msie&&c.version>=10||c.yandexbrowser&&c.version>=15||c.chrome&&c.version>=20||c.firefox&&c.version>=20||c.safari&&c.version>=6||c.opera&&c.version>=10||c.ios&&c.osversion&&c.osversion.split(".")[0]>=6||c.blackberry&&c.version>=10.1?c.a=e:c.msie&&c.version<10||c.chrome&&c.version<20||c.firefox&&c.version<20||c.safari&&c.version<6||c.opera&&c.version<10||c.ios&&c.osversion&&c.osversion.split(".")[0]<6?c.c=e:c.x=e,c}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n._detect=t,n});
var browser = bowser;

//console.log(browser);

// Place any jQuery/helper plugins in here.




// Vendor prefixes
var prefixes = ["-webkit-", "-moz-", "-o-", "-ms-"],
	cssPrefixes = ["Webkit", "Moz", "O", "ms"],
	domPrefixes = ["webkit", "moz", "o", "ms"];

// Añadir segunda variable 'pfx' para saber si devolver prefijo o booleano
function getSupportedProp(prop, ret) {
	ret = typeof ret !== 'undefined' ? ret : 'pfx';
	var root = document.documentElement,
		ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
		props = (prop + ' ' + cssPrefixes.join(ucProp + ' ') + ucProp).split(' '),
		propsDom = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');

	for (var i in props) {
		if (root.style[props[i]] !== undefined) return (ret == 'pfx') ? props[i] : true;
	}

	return false;
}

function extend() {
	for (var i = 1; i < arguments.length; i++)
		for (var key in arguments[i])
			if (arguments[i].hasOwnProperty(key))
				arguments[0][key] = arguments[i][key];

	return arguments[0];
}

function addEvent(obj, type, fn) {
    if (obj.attachEvent) {
        obj['e' + type + fn] = fn;
        obj[type + fn] = function () {
            obj['e' + type + fn](window.event);
        };
        obj.attachEvent('on' + type, obj[type + fn]);
    } else
        obj.addEventListener(type, fn, false);
}

function removeEvent(obj, type, fn) {
    if (obj.detachEvent) {
        obj.detachEvent('on' + type, obj[type + fn]);
        obj[type + fn] = null;
    } else
        obj.removeEventListener(type, fn, false);
}

var retina = window.devicePixelRatio > 1 ? true : false;

var SUPPORTS_TOUCHES = ("createTouch" in document),
    START_EVENT = SUPPORTS_TOUCHES ? "touchstart" : "mousedown",
    MOVE_EVENT = SUPPORTS_TOUCHES ? "touchmove" : "mousemove",
    END_EVENT = SUPPORTS_TOUCHES ? "touchend" : "mouseup";

var transEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
},
transEndEventName = transEndEventNames[ getSupportedProp('transition') ],
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
animEndEventName = animEndEventNames[ getSupportedProp('animation') ],
        support = {
            animations: getSupportedProp('animationName', 'bool'),
            transitions: getSupportedProp('transition', 'bool'),
            transforms: getSupportedProp('transform', 'bool'),
            transforms3d: Modernizr.csstransforms3d
        },
addEvent = window.attachEvent || window.addEventListener,
        removeEvent = window.detachEvent || window.removeEventListener;

var easeCSS = {
    'linear': 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    'ease': 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
    'ease-in': 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
    'ease-out': 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
    'ease-in-out': 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
    'easeInSine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    'easeOutSine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    'easeInOutSine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    'easeInQuad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    'easeOutQuad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    'easeInOutQuad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    'easeInCubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    'easeOutCubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    'easeInOutCubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    'easeInQuart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    'easeOutQuart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    'easeInOutQuart': 'cubic-bezier(0.77, 0, 0.175, 1)',
    'easeInQuint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    'easeOutQuint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    'easeInOutQuint': 'cubic-bezier(0.86, 0, 0.07, 1)',
    'easeInExpo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    'easeOutExpo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    'easeInOutExpo': 'cubic-bezier(1, 0, 0, 1)',
    'easeInCirc': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    'easeOutCirc': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    'easeInOutCirc': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    'easeInBack': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    'easeOutBack': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    'easeInOutBack': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    'easeSwiftOut': 'cubic-bezier(0.35, 0, 0.25, 1)'
};



var USE_WEBSQL = false;
var onPost = false;

// Easeing Extends
$.extend(jQuery.easing, {
    easeSwiftOut: function (x, t, b, c, d) {
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (-2.5 * tc * ts + 10 * ts * ts + -14.5 * tc + 8 * ts);
    }
});

$.extend(jQuery.easing, {
    linear: function (x, t, b, c, d) {
        t /= d;
        return b + c * (t);
    }
});

/*
$(function() {
	FastClick.attach(document.body);
});
*/







/* ================================
   WINDOW VARS & EVENTS
   ================================ */

var windowTop = $(window).scrollTop() || 0,
	windowHeight = $(window).height(),
	windowWidth = Math.max($(window).width(), window.outerWidth),
	mql = (window.matchMedia)?window.matchMedia("(orientation: portrait)"):false,
	windowOrientation = (mql.matches)?"portrait":"landscape";

$(window).on('resize orientationchange', function(e) {
	windowHeight = (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone)?window.innerHeight:$(window).height();
	windowWidth = Math.max($(window).width(), window.outerWidth);
	windowOrientation = window.orientation;

/*
	if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone && window.innerHeight < $(window).height()) {
		window.scrollTo(0, 0);
	}
*/

	//enhaceBody();
	resizeFunctions();
	if (e.type == "orientationchange") orientationFunctions();
});

function resizeFunctions() {
	if (window.matchMedia) mql = window.matchMedia("(orientation: portrait)");
	windowOrientation = (mql.matches)?"portrait":"landscape";

	return;
}

function orientationFunctions() {

	return;
}

resizeFunctions();









/* ================================
   SCROLL VARS & EVENTS
   ================================ */

var scroller = (browser.mozilla || browser.msie) ? $('html') : $('body'),
	scrollDelay = 0,
	scrollBack = 0;
	scrollTop = 0;

$(window).scroll(function(){
	windowTop = $(window).scrollTop();

	scrollFunctions();
});

function scrollToOffset(offset, options) {
	var defaults = {
		time: 500, // time to scroll a windowHeight unit
		mintime: 0,
		balance: 0,
		duration: 0,
		easing: 'easeOutCubic'
	};

	var opts = extend(defaults, options);
	var dest = 0;
	var vel = 0;

	if (offset > $(document).height()-windowHeight) {
		dest = $(document).height()-windowHeight;
		vel = ((dest-windowTop)/windowHeight)*opts.time;
	} else {
		dest = offset;
		vel = ((windowTop-dest)/windowHeight)*opts.time;
	}
	if (Math.abs(vel.toFixed(0)) < opts.mintime) { vel = opts.mintime; }

	scroller.stop().animate({ scrollTop: dest-opts.balance }, Math.abs(vel.toFixed(0))+opts.duration, opts.easing);
}

function scrollToElement(element, options) {
	if(typeof element.offset()!='undefined') scrollToOffset(element.offset().top, options);
}

function scrollToHash(hash, options) {
	var defaults = {
		origin: undefined
	};

	var opts = extend(defaults, options);
	scrollToElement($(hash), opts);

	if (opts.origin !== 'popstate') {
		if (typeof history.pushState !== "undefined") {
			var newlocation = location.href.split('#')[0];
			history.pushState({hash: hash, opts: opts}, 'New URL: '+newlocation+hash, newlocation+hash);
			popEventListnerAdded = true;
		}
	}
}


function scrollFunctions() {
	if ($('.page__header').outerHeight() < windowTop && windowTop > scrollTop) {
		if (!$('.page__header').hasClass('is-hidden')) {
			$('.page__header').addClass('is-hidden').one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend', function() {
				if (!$('.page__header').hasClass('is-fixed') && windowTop > 0) { $('.page__header').addClass('is-fixed'); }
			});

		}
		scrollTop = windowTop;
	}

	if (windowTop < scrollTop) {
		if ($('.page__header').hasClass('is-hidden')) { $('.page__header').removeClass('is-hidden'); }
		scrollTop = windowTop;
	}

	if (windowTop == 0) {
		$('.page__header').removeClass('is-fixed');
	}

	return;
};








// NEW

(function() {
	if (!Event.prototype.preventDefault) {
		Event.prototype.preventDefault=function() {
			this.returnValue=false;
		};
	}
	if (!Event.prototype.stopPropagation) {
		Event.prototype.stopPropagation=function() {
			this.cancelBubble=true;
		};
	}
	if (!Element.prototype.addEventListener) {
		var eventListeners=[];

		var addEventListener=function(type,listener) {
			var self=this;
			var wrapper=function(e) {
				e.target=e.srcElement;
				e.currentTarget=self;
				if (typeof listener.handleEvent != 'undefined') {
					listener.handleEvent(e);
				} else {
					listener.call(self,e);
				}
			};
			if (type=="DOMContentLoaded") {
				var wrapper2=function(e) {
					if (document.readyState=="complete") {
						wrapper(e);
					}
				};
				document.attachEvent("onreadystatechange",wrapper2);
				eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});

				if (document.readyState=="complete") {
					var e=new Event();
					e.srcElement=window;
					wrapper2(e);
				}
			} else {
				this.attachEvent("on"+type,wrapper);
				eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
			}
		};
		var removeEventListener=function(type,listener) {
			var counter=0;
			while (counter<eventListeners.length) {
				var eventListener=eventListeners[counter];
				if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
					if (type=="DOMContentLoaded") {
						this.detachEvent("onreadystatechange",eventListener.wrapper);
					} else {
						this.detachEvent("on"+type,eventListener.wrapper);
					}
					eventListeners.splice(counter, 1);
					break;
				}
				++counter;
			}
		};
		Element.prototype.addEventListener=addEventListener;
		Element.prototype.removeEventListener=removeEventListener;
		if (HTMLDocument) {
			HTMLDocument.prototype.addEventListener=addEventListener;
			HTMLDocument.prototype.removeEventListener=removeEventListener;
		}
		if (Window) {
			Window.prototype.addEventListener=addEventListener;
			Window.prototype.removeEventListener=removeEventListener;
		}
	}
})();


function getElementsByClassName(element, className) {
	if (element.getElementsByClassName) // Returns NodeList here
		return element.getElementsByClassName(className);

	className = className.replace(/ *$/, '');

	if (element.querySelectorAll) // Returns NodeList here
		return element.querySelectorAll((' ' + className).replace(/ +/g, '.'));

	className = className.replace(/^ */, '');

	var classes = className.split(/ +/),
		clength = classes.length;
	var els = element.getElementsByTagName('*'),
		elength = els.length;
	var results = [];
	var i, j, match;

	for (i = 0; i < elength; i++) {
		match = true;
		for (j = clength; j--;)
			if (!RegExp(' ' + classes[j] + ' ').test(' ' + els[i].className + ' '))
				match = false;
		if (match)
			results.push(els[i]);
	}

	// Returns Array here
	return results;
};


Element.prototype.hasClass = function(className) {
	if (this.classList)
		return this.classList.contains(className);

	return !!this.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
};

Element.prototype.addClass = function(className) {
	if (this.classList) {
		this.classList.add(className);
	} else {
		if (!this.hasClass(element, className)) this.className += ' '+className;
	}
};

Element.prototype.removeClass = function(className) {
	if (this.classList) {
		this.classList.remove(className);
	} else {
		if (this.hasClass(element, className)) {
			var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
			this.className = this.className.replace(reg, ' ');
		}
	}
};


function extend() {
	if (arguments.length > 1) {
		var master = arguments[0];
		for (var i = 1, l = arguments.length; i < l; i++) {
			var object = arguments[i];
			for (var key in object) {
				master[key] = object[key];
			}
		}
	}
};


// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if (!("previousElementSibling" in document.documentElement)) {
	Object.defineProperty(Element.prototype, "previousElementSibling", {
		get: function() {
			var e = this.previousSibling;
			while(e && 1 !== e.nodeType)
				e = e.previousSibling;
			return e;
		}
	});
}

if (!("nextElementSibling" in document.documentElement)) {
    Object.defineProperty(Element.prototype, "nextElementSibling", {
        get: function() {
            var e = this.nextSibling;
            while(e && 1 !== e.nodeType)
                e = e.nextSibling;
            return e;
        }
    });
}


// element.closest() Polyfill
if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
if (!Element.prototype.closest) Element.prototype.closest = function (selector) {
	var el = this;
	while (el) {
		if (el.matches(selector)) {
			return el;
		}
		el = el.parentElement;
	}
};













/* ================================
   IMAGE PRELOADER
   ================================ */

(function (global) {
	'use strict';

	function defer() {
		var resolve,
			reject,
			promise = new Promise(function (a, b) {
				resolve = a;
				reject = b;
			});

		return {
			resolve: resolve,
			reject: reject,
			promise: promise
		};
	}

	var ImagePreloader = function (options) {
		this.options = options || {};
		this.options.parallel = this.options.parallel || false;
		this.items = [];
		this.max = 0;
	};

	ImagePreloader.prototype.queue = function (array) {
		if (!Array.isArray(array)) {
			array = [array];
		}

		if (array.length > this.max) {
			this.max = array.length;
		}

		var deferred = defer();

		this.items.push({
			collection: array,
			deferred: deferred
		});

		return deferred.promise;
	};

	ImagePreloader.prototype.preloadImage = function (path) {
		return new Promise(function (resolve, reject) {
			var image = new Image();
			image.onload = resolve;
			image.onerror = resolve;
			image.src = path;
		});
	};

	ImagePreloader.prototype.preload = function () {
		var deck, decks = [];

		if (this.options.parallel) {
			for (var i = 0; i < this.max; i++) {
				this.items.forEach(function (item) {
					if (typeof item.collection[i] !== 'undefined') {
						item.collection[i] = this.preloadImage(item.collection[i]);
					}
				}, this);
			}
		} else {
			this.items.forEach(function (item) {
				item.collection = item.collection.map(this.preloadImage);
			}, this);
		}

		this.items.forEach(function (item) {
			deck = Promise.all(item.collection)
				.then(item.deferred.resolve.bind(item.deferred))
				.catch(console.log.bind(console));

			decks.push(deck);
		});

		return Promise.all(decks);
	};

	global.ImagePreloader = ImagePreloader;
}(window));





// jQuery Plugins




(function($) {
	$.fn.padSetup = function(o, mainCallback) {

		this.each(function() {

			var _this = $(this),
				options = $.extend({}, $.fn.padSetup.defaults, o),
				//input = _this.find('input, textarea'),
				//label = _this.find('label'),
				output = _this.find('.pad__lcd input'),
				numbersGroup = _this.find('.pad__input__numbers'),
				numbers = numbersGroup.find('.btn'),
				operationsGroup = _this.find('.pad__input__operations'),
				operations = operationsGroup.find('.btn'),
				padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
			var _clear = $('<div/>').addClass('input-clear'),
				_clearIcon = $('<span/>').addClass('icon-clear');
			_clearIcon.appendTo(_clear);
			_clear.appendTo(_this);

			var _pad = $('<div/>').addClass('pad').addClass('pad--' + options.type);
			_pad.appendTo(_this);
*/

/*
			function shuffle(array) {
				var currentIndex = array.length, temporaryValue, randomIndex;

				while (0 !== currentIndex) {
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}

				return array;
			}
*/


			var onEndTransitionFn = function() {
				if (support.transitions) {
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}

				newPad();
			};


			var numbersInit = function() {
				//var newOrder = shuffle(padNumbers)

				numbers.on('click', function(event) {
					//if (SUPPORTS_TOUCHES) return;
					if ('ontouchstart' in document) return;

					console.log("click");

					onPadNumberClick(this, event);
				});

				numbers.on('touchstart', function(event) {
					//if ('ontouchstart' in document.documentElement) { console.log(SUPPORTS_TOUCHES, "sss"); }
					console.log("touch");
					if (preventDoubleTap(this, event)) {
						onPadNumberClick(this, event);
					}
				});

/*
				for (var i = 0; i < newOrder.length; i++) {
					var _padNum = $('<div/>').addClass('pad__number btn btn--black').html(newOrder[i]).data('value', newOrder[i]);
					_padNum.appendTo(_pad);

					_padNum.on('click', function(event) {
						//if (SUPPORTS_TOUCHES) return;
						if ('ontouchstart' in document) return;

						console.log("click");

						onPadNumberClick(this, event);
					});

					_padNum.on('touchstart', function(event) {
						//if ('ontouchstart' in document.documentElement) { console.log(SUPPORTS_TOUCHES, "sss"); }
						console.log("touch");
						if (preventDoubleTap(this, event)) {
							onPadNumberClick(this, event);
						}
					});
				}

				_pad.fadeTo(200, 1);
*/
			};

			var preventDoubleTap = function(element, event) {
				var t2 = event.timeStamp,
					t1 = $(element).data('lastTouch') || t2,
					dt = t2 - t1,
					fingers = event.originalEvent.touches.length;

				$(element).data('lastTouch', t2);

				if (!dt || dt > 500 || fingers > 1) return true; // not double-tap

				event.preventDefault(); // double tap - prevent the zoom
				onPadNumberClick(element, event);
				//$(event.target).trigger('click');
			};


			var onPadNumberClick = function(element, event) {
				//console.log("CLICK_EVENT over Pad Number");

				var num = $(element).data('value'),
					maxLength = parseInt(output.attr('maxlength'));

				//if (output.val().length < maxLength) output.val(output.val() + num);
				output.val(output.val() + num);
				output.trigger('change');
			}

/*
			var openPad = function() {
				if (_this.hasClass(options.className + '-open')) return;

				if (support.transitions) {
					_this[0].addEventListener( transEndEventName, onEndTransitionFn );
					_this.addClass(options.className + '-open');
				} else {
					_this.addClass(options.className + '-open');
					onEndTransitionFn();
				}
			}
*/

			var closePad = function() {
				if (!_this.hasClass(options.className + '-open')) return;

				_pad.html('').attr('style', '');
				_this.removeClass(options.className + '-open');
			}

			var clearPad = function() {
				input.val('');
				input.trigger('change');
			}

			var onClearClick = function(element, event) {
				//console.log("CLICK_EVENT over input");

				clearPad();
			}


			var onInputClick = function(element, event) {
				//console.log("CLICK_EVENT over input");

				//openPad();
			}

			var onInputFocus = function(element, event) {
				//console.log("FOCUS_EVENT over input");

				//openPad();
			}

			var onInputBlur = function(element, event) {
				//console.log("BLUR_EVENT over input");

				//closePad();
			}

			var onInputChange = function(element, event) {
				//console.log("CHANGE_EVENT over input");
			}

			var onInputKeyPress = function(element, event) {
				//console.log("KEYPRESS_EVENT over input");

				var code = (event.charCode ? event.charCode : event.keyCode);

				if (($(element).val().length =='1') && (code === 8 || code === 46)) {
					_this.removeClass(options.className + '--hastext').removeClass(options.className + '--overlay').addClass(options.className + '--focus');
				} else {
					_this.removeClass(options.className + '--overlay').removeClass(options.className + '--focus').addClass(options.className + '--hastext');
				}
			}

			var onInputKeyDown = function(element, event) {
				//console.log("KEYDOWN_EVENT over input");
			}

			var onInputKeyUp = function(element, event) {
				//console.log("KEYUP_EVENT over input");
			}


/*
			_clear.on('click', function(event) {
				onClearClick(this, event);
			});
*/

			output.on('click', function(event) {
				onInputClick(this, event);
			});

			output.on('focus', function(event) {
				onInputFocus(this, event);
			});

			output.on('blur', function(event) {
				onInputBlur(this, event);
			});

			output.on('change', function(event) {
				onInputChange(this, event);
			});

			output.on('keydown', function(event) {
				onInputKeyPress(this, event);
			});

			output.on('keypress', function(event) {
				onInputKeyDown(this, event);
			});

			output.on('keyup', function() {
				onInputKeyUp(this, event);
			});


			numbersInit();


		});
	}


	$.fn.padSetup.defaults = {
		type: 'password',
		className: 'form__element--pad',
		time: 300,
		ease: "cubic-bezier(0.280, 0.000, 0.115, 1.000)"
	}
}(jQuery));





