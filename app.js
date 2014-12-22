(function() {

    return {

        events: {
            'app.activated': 'getRequesterEmail'
        },


        //getRequesterEmail retrieve the ticket's requester email via the data API 
        getRequesterEmail: function() {

            var requesterEmail = this.ticket().requester().email();

            if (requesterEmail) {

                this.lookUpByEmail();

            } else {

                this.getFullRequesterObject();



            }
        },



        getFullRequesterObject: function() {

        	//this function will retrieve the fullcontact object

            console.log("getFullRequesterObject reached ");

        },

        lookUpByEmail: function() {

            console.log("lookUpByEmail reached");

        }

    };

}());