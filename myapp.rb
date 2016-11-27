require 'sinatra'
require 'sinatra/reloader' if development?
require 'thin'
require 'json'

 get '/' do 
    "You are on the internetz"  
 end
 
 get '/home' do
     erb :index
 end
 
 get '/test' do
     content_type :json
     quine = File.read("myapp.rb")
     {"code" => quine}.to_json
 end