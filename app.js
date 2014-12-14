(function() {

  return {
    events: {
      'app.activated':'showContactPage'
    
    },

    showContactPage: function() {

    	console.log("TEST"); 
		this.switchTo('contactPage');

    }
  };

}());
