import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {authProfile} from "../../redux/authReducer";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"email"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
    );
}

const LoginReduxForm = reduxForm (
    {
        form: 'login'
    }
) (LoginForm)

const LoginStart = (props) => {
    const onSubmit = (formData) => {
        props.authProfile(formData)
        }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

let mapStateToProps;

let Login= connect(mapStateToProps,{ authProfile }) (LoginStart)

export default Login;