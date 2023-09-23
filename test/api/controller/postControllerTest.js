const express = require("express");
const supertest = require("supertest");

const app = express();
const routes = require("../../../src/api/routes/index");

app.use("/", routes);

describe("project test", () => {
  it("Check if the website is up & running", (done) => {
    supertest(app)
      .get("/api/ping")
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("Return list of posts full sorted using url query", (done) => {
    supertest(app)
      .get("/api/posts/?tags=anime&sortBy=likes&direction=asc")
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("Return 400 error when url does not contain all query parameter", (done) => {
    supertest(app)
      .get("/api/posts/?tags=anime&sortBy=&direction=asc")
      .expect(400)
      .expect({ error: "sortBy parameter is required" })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("Return 400 error when url contain wrong query parameter", (done) => {
    supertest(app)
      .get("/api/posts/?tags=anime&sortBy=id&direction=bvc")
      .expect(400)
      .expect({ error: "direction parameter is required" })
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
