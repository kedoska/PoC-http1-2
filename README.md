# PoC HTTP2 migration

This project wants to show the differences in networking between HTTP1 and HTTP/2. We provide this deliberately simple test to demonstrate how to configure NGINX to serve content using the current protocol. We also want to show how to set up the location directive to pre-configure and tune the responses.


> HTTP/2 [RFC7540](https://datatracker.ietf.org/doc/html/rfc7540) server push can accelerate the delivery of
> resources, but only resources for which the server is authoritative.
> The other limitation of server push is that the response will be
> transmitted regardless of whether the client has the response cached.


We are also trying to demonstrate how to automate the build process making the push configuration transparent for the operation department.
This project uses the custom Webpack Plug-In [Server Push Webpack Plugin](https://github.com/efureev/webpack-plugin-server-push).

## Requirements

1. Docker and Docker Compose.
2. A valid ssl certificate for _localhost_.
3. `cert.pem` and `key.pem` available into `cert` folder.

### Run

1. checkout this repository
2. run `npm install`
3. run `npm run build` _(warning this is only for demo. A real world example should implement this at docker build level)_
4. run `docker-compose up`

 - Dockerfile.HttpA named `nginx-one` serving via **HTTP 1.1**
 - Dockerfile.HttpB named `nginx-two` serving via **HTTP/2** using default settings
 - Dockerfile.HttpC named `nginx-three` serving via **HTTP/2** using explicit **push**
 - Dockerfile.HttpD named `nginx-four` serving via **HTTP/2** using explicit **http2_push_preload**

### Check

Compare network activity for the following applications.

- navigate to [https://localhost:8080/](https://localhost:8080/)
- navigate to [https://localhost:8081/](https://localhost:8081/)
- navigate to [https://localhost:8082/](https://localhost:8082/)
- navigate to [https://localhost:8082/](https://localhost:8083/)

In the last example, we are demostrating how `http2_max_concurrent_pushes` limits the response. More detail about how to configure the module are available here [ngx_http_v2_module](http://nginx.org/en/docs/http/ngx_http_v2_module.html).


### External links
 - [mkcert](https://github.com/FiloSottile/mkcert) _generate localhost ssl certificate_
 - [Configuring HTTP/2 Server Push](https://www.nginx.com/blog/nginx-1-13-9-http2-server-push/#configuring)
 - [Official build of Nginx](https://hub.docker.com/_/nginx)

### Online noise
There is an open discussion around Server Push (mostly driven by Goog and its [Intent to Remove: HTTP/2 and gQUIC server push](https://groups.google.com/a/chromium.org/g/blink-dev/c/K3rYLvmQUBY))
 - https://chromestatus.com/feature/6302414934114304
 - https://groups.google.com/a/chromium.org/g/blink-dev/c/K3rYLvmQUBY/m/vOWBKZGoAQAJ?pli=1
 - https://community.cloudflare.com/t/google-developers-intent-to-remove-http-2-push/261338/4