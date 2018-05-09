app = angular.module("dhsiccquiz");

app.factory("questions", function() {
  var questions = [
    {
  			question: "What does Infocomm promote?",
  			options: ["Promotes how to dance", "Promotes how to code", "Promote how to build robots", "Promote how to play games"],
  			answer: 2,
        links: [
          { name: "China on Wikipedia", link: "http://www.example.com" },
        ]
  		},

  		{
  			question: "Who invented telephone?",
  			options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
  			answer: 1,
        links: [
          { name: "The inventors index", link: "http://www.example.com" }
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
