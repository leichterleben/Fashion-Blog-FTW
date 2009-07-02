class Marker < ActiveRecord::Base
  belongs_to :post
  
  validates_presence_of :name
  validates_numericality_of :pos_x, :pos_y
  
end
