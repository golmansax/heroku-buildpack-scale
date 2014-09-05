class BuildpackSerializer < ActiveModel::Serializer
  attributes :url, :weight_in_mb, :pretty_name
end
