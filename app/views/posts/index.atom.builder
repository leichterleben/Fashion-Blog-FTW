atom_feed(
  :url => posts_url(:format => 'atom', :only_path => false),
  :root_url => posts_path(:only_path => false),
  :schema_date => '2008'
) do |feed|
  feed.title "Atom Feed"
  feed.updated @posts.empty? ? Time.now.local : @posts.collect(&:updated_at).max
  feed.generator "Somewear.it", "uri" => root_url
 
  #feed.author do |xml|
  #  xml.name author.name
  #  xml.email author.email unless author.email.nil?
  #end
 
  @posts.each do |post|
   feed.entry(post, :url => post_url(post), :updated => post.updated_at) do |entry|
      entry.title post.title
      entry.content post.body + image_tag(post.foto.url(:thumb)), :type => 'html'
    end
  end
end