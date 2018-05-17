app = angular.module("dhsiccquiz");

app.factory("questions", function() {
  var questions = [
    {
  			question: "What does Infocomm Club promote?",
  			options: ["how to dance", 
					  "how to code", 
					  "how to build robots", 
					  "how to play games"],
  			answer: 1,
        links: [
          { name: "Our CCA promotes coding through the hardwork of our very own Infocomm members, encouraging their peers to learn basic coding through fun and interactive platforms" },
        ]
  		},
    {
  			question: "How do our members learn ?",
  			options: ["Only through IMDA courses", 
					  "Only through self-learning", 
					  "Only through lessons conducted by seniors", 
					  "All of the above"],
  			answer: 3,
        links: [
          { name: "Our members learn more about programming through a good mix of exposure from courses" },
        ]
  		},
    {
  			question: "Which competition does ICC participate every year?",
  			options: ["NIC Ace Of Coders", 
					  "I-Love-Computers Award", 
					  "eSports Championships", 
					  "Red Dot Design Awards"],
  			answer: 0,
        links: [
          { name: "Our CCA takes part in the NIC Ace of Coders competition every year. In fact, it is one of the competitions that Dunman High School has excelled in, constantly being the top performing school for many years." }
        ]
  		},
    {
  			question: "What are ICC members trained to do?",
  			options: ["Coding", 
					  "Gaming", 
					  "Photography", 
					  "Animating"],
  			answer: 0,
        links: [
          { name: "In our CCA, we mainly focus on coding and design." }
        ]
  		},
    {
  			question: "When are Infocomm Club sessions mainly held on?",
  			options: ["Mondays, 1230 to 1530", 
					  "Tuesdays, 1400 to 1730", 
					  "Thursdays, 1400 to 1730", 
					  "Fridays, 1430 to 1730"],
  			answer: 3,
        links: [
          { name: "Our CCA sessions are mostly held on Fridays 2.30pm-5.30pm with occasional sessions on Mondays 3.30pm - 5.30pm (may vary due to the courses we are taking)" }
        ]
  		},
	{
  			question: "How many members are there in Infocomm Club (Junior High)",
  			options: ["Around 10", 
					  "Around 30", 
					  "Around 80", 
					  "Around 120"],
  			answer: 1,
        links: [
          { name: "Infocomm Club is a small CCA and the number of members who join our CCA undergo rigorous interviews before admission." }
        ]
  		},
	{
  			question: "What have Infocomm Club members learnt in the past 6 months?",
  			options: ["Playing With Robots", 
					  "Flying Kites", 
					  "Designing Advertisements", 
					  "Business Analytics"],
  			answer: 3,
        links: [
          { name: "Infocomm Club has just concluded its Business Analytics training course where students learn how to use programs to evaluate a company's performance." }
        ]
  		},
	{
  			question: "How does Infocomm Club select applicants?",
  			options: ["Through Direct School Admission (DSA) Only", 
					  "Through School CCA Selection Only", 
					  "Through DSA And School CCA Selection", 
					  "None Of The Above"],
  			answer: 2,
        links: [
          { name: "Students can now apply using the Direct School Admissions scheme to Infocomm Club, besides the existing CCA allocation programme for those who entered the school through other methods." }
        ]
  		},
	{
  			question: "Dunman High School has been the top participating school in Google Code In for how many years in a row?",
  			options: ["2", 
					  "3", 
					  "5", 
					  "Not Applicable"],
  			answer: 2,
        links: [
          { name: "Google Code In is a competition organised by Google where aspiring coders partner with open source organisations to help them in various tasks ranging from programming to even outreach and Dunman High has consistently achieved top participating school for 5 years." }
        ]
  		},
	{
  			question: "Which competition does Infocomm Club participate in?",
  			options: ["Google Code In", 
					  "National Olympiad In Informatics", 
					  "i.code Competition", 
					  "All Of The Above"],
  			answer: 3,
        links: [
          { name: "Infocomm Club members participate in many competitions to broaden their horizons and increase experience." }
        ]
  		},
	{
  			question: "Do you need a coding background to join Infocomm Club?",
  			options: ["Yes", "No"],
  			answer: 1,
        links: [
          { name: "Anyone who has the passion to learn more about coding and infocomm-related knowledge in general is welcome to join ICC." }
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
