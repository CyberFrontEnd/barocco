$(document).ready(function () {

  var nonLinearSlider = document.getElementById('slider-snap');

  noUiSlider.create(nonLinearSlider, {
    connect: true,
    behaviour: 'tap',
    start: [0, 60000],
    range: {
      'min': [0],
      'max': [60000]
    },
    format: {
      to: function ( value ) {
        return value + '$';
      },
      from: function ( value ) {
        return value.replace('', '');
      }
    }
  });

  var nodes = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
  ];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
  nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodes[handle].innerHTML = values[handle];
  });

});
