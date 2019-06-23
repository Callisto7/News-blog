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
      error: (data) ->
        if data.status == 401
          window.location.href = '/users/sign_in'
    )

$ ->
  new Likes
