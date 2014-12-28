$(document).ready(function() {
  var rotateX = -30
    , rotateY =  45

    var COLORS = [
    'red',
    'green',
    'light-green',
    'blue',
    'purple',
    'orange'
  ]

  var $cells = $('.cube div')
    , availableColors = _.shuffle(_.flatten(_.map(_.times(9), function() { return COLORS })))

  for (var i = 0; i < $cells.length; ++i) {
    $($cells[i]).addClass(availableColors[i])
  }

  $(document).on('keydown', function(e) {
    var $cube    = $('.cube')
      , interval = 25
    // up arrow
    if (e.keyCode === 38) rotateX += interval
    // left arrow
    if (e.keyCode === 37) rotateY -= interval
    // right arrow
    if (e.keyCode === 39) rotateY += interval
    // down arrow
    if (e.keyCode === 40) rotateX -= interval
    if (e.keyCode === 40 || e.keyCode === 38) e.preventDefault() // preventScroll
    $cube.css('webkit-transform',
      'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
    )
  })
})
