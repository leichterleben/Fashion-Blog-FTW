xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Somewear.it"
    xml.description "Newest Styles on Somewear.it"
    xml.link posts_url(:format => :rss)
    
    for post in @posts 
      xml.item do
        xml.title post.title
        xml.description post.body + image_tag(post.foto.url(:thumb))
        xml.pubDate post.created_at.to_s(:rfc822)
        xml.link post_url(post)
      end
    end
  end
end
