import React from "react";

const SignUp = () => {
    
    return(
        <>
        <div class='hero-form'>
            <h1>Please Sign Up!</h1>
            <form>
                <label for='name'>First Name:</label>
                <input type='text' placeholder="First Name"></input>

                <label for='name'>Last Name:</label>
                <input type='text' placeholder="Last Name"></input>

                <label for='name'>Email:</label>
                <input type='email' placeholder="Email:"></input>

                <label for='name'>Phone Number:</label>
                <input type='tel' placeholder="Phone Number:"></input>

                <label for='name'>Username:</label>
                <input type='text' placeholder="UserName"></input>

                <label for='name'>Password:</label>
                <input type='text' placeholder="Password"></input>

                <label for='name'>First Name:</label>
                <input type='text' placeholder="First Name"></input>
            </form>
        </div>
        </>
    );

};

export default SignUp;