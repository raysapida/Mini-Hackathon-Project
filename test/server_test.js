let supertest = require("supertest");
let { expect } = require('chai');

let server = supertest.agent("http://localhost:3000");

describe("http server",function(){

  it("root domain returns html page",function(done){
    server
      .get("/")
      .expect("Content-type",/html/)
      .expect(200)
      .end(function(err,res){
        expect(res.status).to.equal(200);
        expect(err).to.equal(null)
        done();
      });
  });
});
