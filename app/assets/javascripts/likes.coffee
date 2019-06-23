class Likes
  constructor: ->
    @bind()

  bind: ->
    $('.btn-like').on 'click', @updateLike

  updateLike: ->
    $this = $(this)
    $.ajax(
      method: 'PATCH',
      url: "/posts/#{$this.data('post-id')}/likes",
      success: (data) ->
        if data.like_status
          $this.addClass('active-like')
        else
          $this.removeClass('active-like')

        $this.find('.like-count').text(data.like_count)
    )

$ ->
  new Likes
