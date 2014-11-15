'use strict';

module.exports = {
  options: {
    reset: true,
    stoponerror: true,
    relaxerror: [],
    profile: 'css3', // possible profiles are: none, css1, css2, css21, css3, svg, svgbasic, svgtiny, mobile, atsc-tv, tv
    medium: 'all', // possible media are: all, aural, braille, embossed, handheld, print, projection, screen, tty, tv, presentation
    warnings: '2' // possible warnings are: 2 (all), 1 (normal), 0 (most important), no (no warnings)
  },
  files: {
    src: ['<%= config.production %>/app/assets/stylesheets/main.css']
  }
};