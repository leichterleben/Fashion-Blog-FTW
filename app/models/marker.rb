class Marker < ActiveRecord::Base
  belongs_to :post
  
  validates_presence_of :name
  validates_numericality_of :pos_x, :pos_y
  validates_inclusion_of :pos_x, :in => 0..100
  validates_inclusion_of :pos_y, :in => 0..100


end
