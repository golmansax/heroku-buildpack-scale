buildpack_list = [
  ['https://github.com/heroku/heroku-buildpack-ruby.git', 12],
  ['https://github.com/rishihahs/heroku-buildpack-libreoffice.git', 68],
]

buildpack_list.each do |url, weight_in_mb|
  Buildpack.create(url: url, weight_in_mb: weight_in_mb)
end
