app = angular.module("dhsiccquiz");

app.factory("results", function() {
  var results = [
    {
      minimum_score: 0,
  		title: "Sorry!",
  		text: "You did not get enough answers correct to get a stamp."
  	},
    {
      minimum_score: 3,
  		title: "Congratulations!",
  		text: "You got a stamp!"
  	},

  ];

  return {
		getResult: function(score) {
      filtered = results.filter(function(result) {
        return result.minimum_score >= score;
      });

      return filtered[0];
		}
  };
});
