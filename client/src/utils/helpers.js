export const phoneFormat = input => {
    // Strip all characters from the input except digits
    input = input.replace(/\D/g,'');
    
    // Trim the remaining input to ten characters, to preserve phone number format
    input = input.substring(0,10);

    // Based upon the length of the string, we add formatting as necessary
    var size = input.length;
    if(size === 0){
            input = input;
    }else if(size < 4){
            input = '('+input;
    }else if(size < 7){
            input = '('+input.substring(0,3)+') '+input.substring(3,6);
    }else{
            input = input.substring(0,3)+'-'+input.substring(3,6)+'-'+input.substring(6,10);
    }
    return input;
}

export const signUpValidator = userData => {
    if (userData.username <= 0) {
        throw new Error('Please create a username');
    } else if (userData.firstName.length <= 0) {
        throw new Error('Please enter your first name');
    } else if (userData.lastName.length <= 0) {
        throw new Error('Please enter your last name');
    } else if (userData.password.length <= 4) {
        throw new Error('Please create a password');
    } else if (userData.email) {
        const emailPattern = /.+@.+\..+/;
        if (!emailPattern.test(userData.email)) {
            throw new Error('Email is formatted incorrectly example: johndoe@email.com');
        } else if (userData.phoneNumber) {
            const phonePattern = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
            if (!phonePattern.test(userData.phoneNumber)) {
                console.log(userData.phoneNumber)
                throw new Error('Please check that your phone number is correct example: 123-456-7890');
            }
        }
    }
}
