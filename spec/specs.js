describe("numberReader", function() {
  it("Returns the written form of a single digit", function() {
  numberReader("1").should.equal("one");
  });

  it("Returns the written form of a two digit number", function() {
  numberReader("10").should.equal("ten");
  });

  it("Returns the written form of a three digit number", function() {
  numberReader("559").should.equal("five hundred fifty nine");
  });

  it("Returns the written form of a four digit number", function() {
  numberReader("1559").should.equal("one thousand five hundred fifty nine");
  });

  it("Returns the written form of a five digit", function() {
  numberReader(21000).should.equal("twenty one thousand");
  });

  it("Returns the written form of a six digit number", function() {
  numberReader(100000).should.equal("one hundred thousand");
  });

  it("Returns the written form of a seven digit number", function() {
  numberReader(3000000).should.equal("three million");
  });

  it("Returns the written form of a eight digit number", function() {
  numberReader(46100000).should.equal("forty six million one hundred thousand");
  });
});