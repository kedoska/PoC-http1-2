# PoC HTTP2 migration

This project wants to show the differences in networking between HTTP1 and HTTP/2. We provide this deliberately simple test to demonstrate how to configure NGINX to serve content using the current protocol. We also want to show how to set up the location directive to pre-configure and tune the responses.

## Requirements

1. Docker and Docker Compose.
2. A valid ssl certificate for _localhost_.
3. `cert.pem` and `key.pem` available into `cert` folder.

### Run

1. checkout this repository
2. run `docker-compose up`

 - Dockerfile.Http1 named `nginx-one` serving via **HTTP 1.1**
 - Dockerfile.Http2 named `nginx-two` serving via **HTTP/2** using default settings
 - Dockerfile.Http3 named `nginx-three` serving via **HTTP/2** using explicit **push**

### Check

Compare network activity for the following applications.

- navigate to [http://localhost:8080/](http://localhost:8080/)
- navigate to [https://localhost:8081/](http://localhost:8081/)
- navigate to [https://localhost:8082/](http://localhost:8082/)

In the last example, we are demostrating how `http2_max_concurrent_pushes` limits the response. More detail about how to configure the module are available here [ngx_http_v2_module](http://nginx.org/en/docs/http/ngx_http_v2_module.html).


### External links
 - [mkcert](https://github.com/FiloSottile/mkcert) _generate localhost ssl certificate_
 - [Configuring HTTP/2 Server Push](https://www.nginx.com/blog/nginx-1-13-9-http2-server-push/#configuring)
 - [Official build of Nginx](https://hub.docker.com/_/nginx)

