module PostsHelper
  def to_html(text)
    return if text.nil?
    text.gsub(/\*(.*)\*/, '<strong>\1</strong>').html_safe
  end
end
