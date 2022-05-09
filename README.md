# PoC HTTP2 migration

### Prove

1. generate a valid ssl certificate for local host using [mkcert](https://github.com/FiloSottile/mkcert) (or equivalent)
2. copy `cert.pem` and `key.pem` into `cert` folder
3. run `docker-compose up`

Docker-compose will spin-up two containers for the same application, the first one (Dockerfile.Http1) named `nginx-one` using HTTP 1.1 and the second one (Dockerfile.Http2), named `nginx-two`, serving the content using HTTP/2.

