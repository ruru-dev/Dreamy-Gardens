import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loginUser } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (credentials) => dispatch(loginUser(credentials))
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);
