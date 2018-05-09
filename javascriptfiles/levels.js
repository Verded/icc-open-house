app = angular.module("dhsiccquiz");

app.factory("levels", function() {
  var levels = [
    {
      minimun_score: 0,
  		title: "Sorry!",
  		text: "You did not get enough answers correct to get a stamp."
  	},
    {
      minimun_score: 1,
  		title: "Sorry!",
  		text: "You did not get enough answers correct to get a stamp."
  	},
    {
      minimun_score: 2,
  		title: "Sorry!",
  		text: "You did not get enough answers correct to get a stamp."
  	},
    {
      minimun_score: 3,
  		title: "Congratulations!",
  		text: "You got a stamp!"
  	},
    {
      minimun_score: 4,
  		title: "Congratulations!",
  		text: "You got a stamp!"
  	},
    {
      minimun_score: 5,
  		title: "Congratulations!",
  		text: "You got a stamp!"
  	},

  ];

  return {
		getLevel: function(score) {
      filtered = levels.filter(function(level) {
        return level.minimun_score >= score;
      });

      return filtered[0];
		}
  };
});
