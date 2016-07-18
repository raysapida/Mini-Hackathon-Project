var expect = chai.expect;

describe("formality.js",function(){

  it("analyzeFormality function returns valid wordMap",function(done){
    var input = "Mr. Jones, I have been researching our choices for internet providers over the past week, & I wanted to update you on my progress. We got two options: H.C. Cable & Toll South. Both offer business plans, & I will go over the business pricing of each plan at the meeting on Tuesday. Both of the business options I listed have comparable speed & data usage offerings as well. I called your personal provider, GoGo Satellite, but they did not have any business offerings. They primarily do residential internet service. I will talk with Joe & Susan in IT about these options & get their suggestions. I will also send out meeting requests to everyone, including Mr. Morris in operations. If you have any questions prior to the meeting, please let me know."
    var wordMap = analyzeFormality(input)
    expect(Object.keys(wordMap).length).to.equal(97)
    done();
  });

  it("formalityCounter returns correct number", function(done){
    var input = "Mr. Jones, I have been researching our choices for internet providers over the past week, & I wanted to update you on my progress. We got two options: H.C. Cable & Toll South. Both offer business plans, & I will go over the business pricing of each plan at the meeting on Tuesday. Both of the business options I listed have comparable speed & data usage offerings as well. I called your personal provider, GoGo Satellite, but they did not have any business offerings. They primarily do residential internet service. I will talk with Joe & Susan in IT about these options & get their suggestions. I will also send out meeting requests to everyone, including Mr. Morris in operations. If you have any questions prior to the meeting, please let me know."
    var wordMap = analyzeFormality(input)
    expect(formalityCounter(wordMap)).to.equal(60);
    done();
  });
});
