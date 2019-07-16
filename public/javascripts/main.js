$('.submitForm').submit(function (e) {
        e.preventDefault();
        const firstName =  $('#fname').val();
        const lastName = $('#lname').val();

        // create student id
        const studentID = 'MMU' + createID();
        // create a db connection

    // gather our data to a JSon object
        const payload = {};
        payload.userfirstName = firstName;
        payload.userLastName = lastName;
        payload.userID = studentID;
        console.log(payload);

        // send to DB function
        DBConnect(payload);


});

// create student id
function createID() {
    return Math.floor(Math.random()*20)*1000;
}

DBConnect = (payload) => {
    // send our data to connect.js file

    // 1- create an ajax request
    $.ajax({
        type: 'POST',
        url: '/connect',
        data: JSON.stringify(payload),
        success: function success(response){
                console.log(response);
        },
        error: function error(){
            console.log('Error Occurred!');
        }
    });

};