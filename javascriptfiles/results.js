app = angular.module("dhsiccquiz");

app.factory("result", function() {
  var Result = [
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
      filtered = levels.filter(function(stage) {
        return level.minimum_score >= score;
      });

      return filtered[0];
		}
  };
});
