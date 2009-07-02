class Post < ActiveRecord::Base
  
  has_attached_file :foto, :styles =>{:standard =>"500x500>", :thumb => "100x100>"}
  
  has_many :markers, :order => 'created_at ASC'

  named_scope :published, {:conditions => {:published => true}}
end
