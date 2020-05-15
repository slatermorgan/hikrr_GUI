import React, {useState} from 'react';
import SignUpForm from './SignupForm';
import axios from 'axios';

// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
//https://github.com/codeclassifiers/loginforms

function SignUp (props) {
    const [state , setState] = useState({
        username : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const sendDetailsToServer = () => {
        if(state.username.length && state.password.length) {
            props.showError(null);
            axios({
                method: 'POST',
                url: 'http://localhost:3000/auth/signup',
                data: { username: state.username, password: state.password},
            })
            .then(res => {
                console.log(res);
                if(res.status === 201){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Registration successful. Redirecting to home page..'
                    }));
                    console.log('sign up success');
                    props.showError(null)
                    redirectToLogin();
                } else{
                    props.showError("Some error ocurred");
                }

            }).catch(error => {
                console.log(error);
            })
        } else {
            props.showError('Please enter valid username and password')
        }

    }

    const redirectToLogin = () => {
        console.log('redirectToLogin');
        props.updateTitle('Sign in')
        props.history.push('/signin');
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            props.showError('Passwords do not match');
        }
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputUsername1">
                        Username
                    </label>
                    <input type="username"
                        className="form-control"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Enter Username"
                        value={state.username}
                        onChange={handleChange}
                    />
                    <small
                        id="usernameHelp"
                        className="form-text text-muted"
                    >
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span>
            </div>

        </div>
    );

    // return <SignUpForm/>
};

export default SignUp