const $ = require('jquery');
const jQuery = $; // eslint-disable-line
require('bootstrap');
require('slick-carousel');

import HomePage from './pages/home';
import AboutUsPage from './pages/about-us';

HomePage($('.p-home'));
AboutUsPage($('.p-about-us'));
