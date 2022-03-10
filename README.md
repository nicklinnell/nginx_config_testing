# Nginx config testing

This repos contains a dockerised setup for testing multiple apps through one nginx ingress.
It was created specifically to test new `location` configuration.
There is a `nginx` front end with two `nodejs` apps containing different routes using simple
`express` setups.

## Testing
Ideally use Docker.

```
$ docker compose build
$ docker compose up
```
Point your browser at [http://localhost:8080](http://localhost:8080) and test the routes defined in
each of `app1` and `app2`.
