// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
//var about {
//firstName: "Tobi"
//lastName: "Zidell"
//jobTitle: "Tech Support"
//homeOffice: "Madrid, Spain"
//tellMeMore: Originally from the US, I’ve been living in Spain for the last 11 years,</br>and have been working at HomeAway for the last two. </br> To the left you see my Spanish family, Iván and Nuka (the dog).  </br> I was a Graphic Designer for many years and have tinkered a bit with HTML and CSS.</br>Javascript has been a challenge to understand these last two weeks, </br> but I hope to have the opportunity to become involved in a community that will help me to understand it
//}
//console.log (about)
// using jQuery and the object above, display the information as the appropriate button is clicked
//I took a different approach with the JavaScript, as I was struggling getting the object elements towork with my multiple buttons.  Instead I followed a tutorial to get to where I got, although it left quite a bit of undesirable space between the buttons and the text that I have been struggling to get rid of.
$(".button").click(function (e) {
       e.preventDefault();

         $('[class^=row]').not($('.'+this.id)).hide();

         $('.'+this.id).slideToggle(500);
   });
