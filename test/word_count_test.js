
var expect = chai.expect;

describe("word_count.js",function(){

  it("wordCount returns an array with five elements",function(done){
    var input = "Mr. Jones, I have been researching our choices for internet providers over the past week, & I wanted to update you on my progress. We got two options: H.C. Cable & Toll South. Both offer business plans, & I will go over the business pricing of each plan at the meeting on Tuesday. Both of the business options I listed have comparable speed & data usage offerings as well. I called your personal provider, GoGo Satellite, but they did not have any business offerings. They primarily do residential internet service. I will talk with Joe & Susan in IT about these options & get their suggestions. I will also send out meeting requests to everyone, including Mr. Morris in operations. If you have any questions prior to the meeting, please let me know."
    console.log(wordCount(input));
    expect(wordCount(input).length).to.equal(5)
    done();
  });

  it("wordCount returns correct words for given input", function(done){
    var input = "Mr. Jones, I have been researching our choices for internet providers over the past week, & I wanted to update you on my progress. We got two options: H.C. Cable & Toll South. Both offer business plans, & I will go over the business pricing of each plan at the meeting on Tuesday. Both of the business options I listed have comparable speed & data usage offerings as well. I called your personal provider, GoGo Satellite, but they did not have any business offerings. They primarily do residential internet service. I will talk with Joe & Susan in IT about these options & get their suggestions. I will also send out meeting requests to everyone, including Mr. Morris in operations. If you have any questions prior to the meeting, please let me know."
    var topWords = wordCount(input);
    expect(topWords[0][0]).to.equal('business')
    expect(topWords[1][0]).to.equal('mr.')
    expect(topWords[2][0]).to.equal('over')
    expect(topWords[3][0]).to.equal('you')
    expect(topWords[4][0]).to.equal('on')
    done();
  });
});
