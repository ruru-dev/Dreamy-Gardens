import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(HomePage);
