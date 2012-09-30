module Jekyll
  class Vimeo < Liquid::Tag

    def initialize(name, id, tokens)
      super
      @id = id
    end

    def render(context)
      %(<div class="embed-video-extra-container"><div class="embed-video-container"><iframe src="http://player.vimeo.com/video/#{@id}?autoplay=1&color=16a95b&player_id=vimeoplayer""></iframe></div></div>)
    end
  end
end

Liquid::Template.register_tag('vimeo', Jekyll::Vimeo)