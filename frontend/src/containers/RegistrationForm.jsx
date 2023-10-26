import { connect } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import { createUser } from '../redux/actions';

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    createUser: (formData) => createUser(dispatch, formData)
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
