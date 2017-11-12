---
title: Passport.js Simple Example
date: 2017-07-02 01:48:10
toc: true
categories: Javascript
tags:
- javascript
- password.js
- express
- mocha
---

This is a simple example to demonstrate [Passport.js](http://passportjs.org/) using a basic local strategy.

<!--more-->

## Create new project
```sh
npm i -S express passport passport-http mocha
touch server.js test.js
npm init -y
```


## Create Server boilerplate
```javascript
// server.js
const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;
const app = require("express")();

passport.use(
  new BasicStrategy((userid, password, done) => {
    // TODO: Replace with database check
    if (userid !== "foo" || password !== "bar") {
      return done(null, false);
    }
    return done(null, { username: "Foobar" });
  })
);

app.get("/", passport.authenticate("basic", { session: false }), (req, res) => {
  res.send(req.user);
});

app.listen(8080, () => { console.log("listening") });
```

## Build our test cases
```javascript
// test.js
const assert = require("assert");
const http = require("http");

describe("Test", () => {

  it("should reject no username/password", done => {
    http.get("http://localhost:8080", res => {
      assert.equal(401, res.statusCode);
      done();
    });
  });

  it("should reject incorrect username/password", done => {
    http.get(
      {
        host: "localhost",
        port: "8080",
        auth: "foo:foo"
      },
      res => {
        assert.equal(401, res.statusCode);
        done();
      }
    );
  });

  it("should accept correct username/password", done => {
    http.get(
      {
        host: "localhost",
        port: "8080",
        auth: "foo:bar"
      },
      res => {
        let json = {};
        let data = "";
        res.on("data", chunk => { data += chunk });
        res.on("end", () => {
          json = JSON.parse(data);
          assert.equal(200, res.statusCode);
          assert.equal("Foobar", json.username);
          done();
        });
      }
    );
  });
});
```

## Start server
```sh
npm start
```

## Test requests
```sh
$ npm test
Test
  √ should reject no username/password
  √ should reject incorrect username/password
  √ should accept correct username/password
$ curl localhost:8080
Unauthorized
$ curl localhost:8080 --user foo:bar
{"username":"Foobar"}
```

## Next...
Go back to the TODO in BasicStrategy and replace with database call.
Also don't forget that you can dump the header with `curl -D - localhost:8080 --user foo:bar`
