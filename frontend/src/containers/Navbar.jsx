import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logoutUser } from '../redux/actions';

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
