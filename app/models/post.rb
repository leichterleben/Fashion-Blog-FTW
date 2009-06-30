class Post < ActiveRecord::Base
  
  has_attached_file :foto, :styles =>{:standard =>"500x500>", :thumb => "100x100>"}
  
end
