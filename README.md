Node js boilerplate for microservice

# dependencies

- esm (babel-less ES module)
- eslint (airbnb styles)
- docker
- express with bodyparser
- mongodb with mongoose
- mocha with expect.js

# Run

## Development env

Local
```
yarn start
```

or

Docker 
```
docker build -t service . 
docker run -ti -p 1213:1213 service:latest
```

## Test env

```
yarn test
```


## REST Documentation

You can access the documentation to http://localhost:1213/api-docs or http://localhost:1213/api-spec
