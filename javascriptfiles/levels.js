app = angular.module("dhsiccquiz");

app.factory("levels", function() {
  var levels = [
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
		getLevel: function(score) {
      filtered = levels.filter(function(result) {
        return level.minimum_score >= score;
      });

      return filtered[0];
		}
  };
});
