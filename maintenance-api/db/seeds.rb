# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 7.times do
#   make = Faker::Vehicle.make
#   model = Faker::Vehicle.model(make_of_model: make)

#   Car.create(make:make , model:model, year:Faker::Vehicle.year)
# end

10.times do 
  services = ["oil change", "tire rotation", "engine oil filter", "cabin oil filter", "transmission flush", "clutch replacement"]
  Log.create(mileage: Faker::Vehicle.mileage, service: services.sample, car_id:rand(1..7))
end