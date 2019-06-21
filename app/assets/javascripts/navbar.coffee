navbar =
  init: ->
    do @setActiveLink
    do @bind

  bind: ->
    $('ul.nav li a').on 'click', @setActiveLink

  setActiveLink: ->
    console.log(location.pathname + location.search)
    $('li a.active').removeClass('active')
    $('a[href="' + location.pathname + location.search + '"]').addClass('active')

$(document).on 'ready', ->
  do navbar.init