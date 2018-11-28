# Pick a Book - Backend Service
Simple API you can use to create, update or delete your favorite book titles.

This projet runs on: Node.js + MongoDB + Express.js
Container: Docker

## Installation

After cloning the project please run the following commands:

```bash
docker-compose build
```

```bash
docker-compose run --service-ports backend
```

## Basic Usage

`GET` request to `{HOST:8080}`

`POST` request to `{HOST:8080/books}`

`PUT` request to `{HOST:8080/books/:id}`

`DELETE` request to `{HOST:8080/books/:id}`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)