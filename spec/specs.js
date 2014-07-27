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

  it("Returns the written form of a nine digit number", function() {
  numberReader(500000000).should.equal("five hundred million");
  });

  it("Returns the written form of a ten digit number", function() {
  numberReader(1000000000).should.equal("one billion");
  });

  it("Returns the written form of a eleven digit number", function() {
  numberReader(20000000000).should.equal("twenty billion");
  });

  it("Returns the written form of a twelve digit number", function() {
  numberReader(300000000000).should.equal("three hundred billion");
  });

  it("Returns the written form of a thirteen digit number", function() {
  numberReader(1000000000000).should.equal("one trillion");
  });

  it("Returns the written form of a fourteen digit number", function() {
  numberReader(20000000000000).should.equal("twenty trillion");
  });

  it("Returns the written form of a fifteen digit number", function() {
  numberReader(300000000000000).should.equal("three hundred trillion");
  });
});