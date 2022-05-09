# PoC HTTP2 migration

### Requirements

1. Docker and Docker Compose.
2. A valid ssl certificate for _localhost_.
3. `cert.pem` and `key.pem` available into `cert` folder.

### Run

1. checkout this repository
2. run `docker-compose up`

Docker-compose will spin-up three containers for the same application:
 - Dockerfile.Http1 named `nginx-one` serving via **HTTP 1.1**
 - Dockerfile.Http2 named `nginx-two` serving via **HTTP/2** using default settings
 - Dockerfile.Http3 named `nginx-three` serving via **HTTP/2** using explicit **push**

### External links
 - [mkcert](https://github.com/FiloSottile/mkcert) _generate localhost ssl certificate_
 - [Configuring HTTP/2 Server Push](https://www.nginx.com/blog/nginx-1-13-9-http2-server-push/#configuring)
 - [Module ngx_http_v2_module](http://nginx.org/en/docs/http/ngx_http_v2_module.html)
 - [Official build of Nginx](https://hub.docker.com/_/nginx)

