ils.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://localhost:3000'
      # once I add heroku, I need to update the above line to ['localhost:3000', 'reading-challenge.herokuapp.com or whaterer it is name']
  
      resource '*',
        headers: :any, # maybe add this: ‘Access-Control-Allow-Origin’,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
  end