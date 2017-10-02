import {TimelineMax} from 'gsap';

var tl = new TimelineMax();
var logo = $('.logo');
var nav = $('.nav');
var blog = $('.blog');
var left = $('.page__title__left-side');
var right = $('.page__title__right-side');
var center = $('.page__title__center');

tl.from(center, 0.5, {opacity: 0});
tl.from(logo, 0.5, {opacity: 0, x: -70});
tl.from(nav, 0.5, {opacity: 0, y: -70}, '-=0.5');
tl.from(left, 0.5, {x: -300}, '-=0.5');
tl.from(right, 0.5, {x: 300}, '-=0.5');
tl.from(blog, 0.5, {opacity: -5, y: -500}, '=0.5');
