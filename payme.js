function isInteger(x) { return Math.floor(x) === x; }

function isFloat(x) { return !!(x % 1); }

if (Meteor.isClient) {

  // Update these values to customize it
  Template.registerHelper('name', function()  { return(Meteor.settings.public.name); });
  Template.registerHelper('image', function() { return(Meteor.settings.public.image); });
  Template.registerHelper('key', function()   { return(Meteor.settings.public.key); });

  Template.prep.events({
    'submit form': function(event) {
      event.preventDefault(); 
      var amount = event.target.amount.value * 100;

      BlazeLayout.render('payments', {amount: amount });

    }
  });

}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
