exports.validate = (studentReq) => {
    if (studentReq.userfirstName == '' || studentReq.userLastName == '') {
        return 'Invalid Request!';
    }
};