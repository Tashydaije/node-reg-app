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

// TO READ !!
// -> Read on JavaScript ES6
// Below is what we call :: Arrow Functions...
    // function abc(){}
    // abc = () => {}

// create student id
createID = () => {
    return Math.floor(Math.random()*20)*1000;
};

DBConnect = (payload) => {
    // send our data to connect.js file
    console.log(JSON.stringify(payload));
    // 1- create an ajax request
    $.ajax({
        type: 'POST',
        url: '/connect',
        data: payload,
        success: function (response){
                console.log(response);
            $('#responseCreate').text(response);
        },
        error: function error(){
            console.log('Error Occurred!');
        }
    });

};
