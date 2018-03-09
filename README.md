# similar-listings-service

Service for recommending similar listings for Airbnb clone site.


## Setup DB.

In a new tab open a mongod instance.
```
$ mongod
```
Then open a mongodb tab to the db IP

```
$ mongo --host 127.0.0.1:27017
```


## Build & Deploy

```
$ git clone https://github.com/The-Untouchables/similar-listings-service
$ cd similar-listings-service
$ npm install && npm start
$ DEBUG=myapp:* npm start #Debug mode
$ npm run react-dev #open in a new tab
$ npm test #runs enzyme, jest tests from terminal
$ docker build -t similar-listings-service . 
$ docker compose up
```

## Contributing

Start by starring and Forking this repository. Follow the basic instruction in the [CONTRIBUTING](CONTRIBUTING.md) file.

## License

similar-listings-service is licensed under [The MIT Licence](LICENSE.md).

## Author
This project was created and maintained by [Nyah Check](https://twitter.com/nyah_check). Please feel free to reach out, I could always use your help or advice. :-)