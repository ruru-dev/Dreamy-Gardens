import { connect } from 'react-redux';
import RegistrationPage from '../components/RegistrationPage';

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(RegistrationPage);
