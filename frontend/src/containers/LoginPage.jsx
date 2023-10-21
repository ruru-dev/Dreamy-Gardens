import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(LoginPage);
