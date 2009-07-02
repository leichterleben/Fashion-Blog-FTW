require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe Marker do
  before(:each) do
    @valid_attributes = {
      :name => "value for name",
      :url => "value for url",
      :pos_x => 1,
      :pos_y => 1,
      :post_id => ,
      :price => 1
    }
  end

  it "should create a new instance given valid attributes" do
    Marker.create!(@valid_attributes)
  end
end
