const signUpValidator = userData => {
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
                throw new Error('Please check that your phone number is correct example: 123-456-7890');
            }
        }
    }
}

export default signUpValidator