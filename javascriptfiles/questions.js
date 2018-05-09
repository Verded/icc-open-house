app = angular.module("dhsiccquiz");

app.factory("questions", function() {
  var questions = [
    {
  			question: "What does Infocomm promote?",
  			options: ["Promotes how to dance", "Promotes how to code", "Promote how to build robots", "Promote how to play games"],
  			answer: 2,
        links: [
          { name: "Our CCA promotes coding through the hardwork of our very own Infocomm members, encouraging their peers to learn basic coding through fun and interactive platforms" },
        ]
  		},
    {
  			question: "How do our members learn ?",
  			options: ["Only through IMDA courses", "Only through self-learning", "Only through lessons conducted by seniors", "All of the above"],
  			answer: 4,
        links: [
          { name: "Our members learn more about programming through a good mix of exposure from courses" },
        ]
  		},
    {
  			question: "Which competition does ICC participate every year?",
  			options: ["NIC Ace Of Coders", "I-Love-Computers Award", "eSports Championships", "Red Dot Design Awards"],
  			answer: 1,
        links: [
          { name: "Our CCA takes part in the NIC Ace of Coders competition every year. In fact, it is one of the competitions that Dunman High School has excelled in, constantly being the top performing school for a various number of years." }
        ]
  		},
    {
  			question: "What are ICC members trained to do?",
  			options: ["Coding", "Gaming", "Designing", "Animating"],
  			answer: 1 and 2,
        links: [
          { name: "In our CCA, we mainly focus on coding and design." }
        ]
  		},
    {
  			question: "When are Infocomm Club sessions mainly held on?",
  			options: ["Mondays, 1230 to 1530", "Tuesdays, 1400 to 1730", "Thursdays, 1400 to 1730", "Fridays, 1430 to 1730"],
  			answer: 4,
        links: [
          { name: "Our CCA sessions are mostly held on Fridays, 2.30pm-5.30pm with occassional sessions held on Mondays,3.30pm - 5.30pm (may vary due to the courses we are taking)" }
        ]
  		}
  ];

  return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
  };
});
