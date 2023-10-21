import { connect } from 'react-redux';
import Router from '../components/Router';

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Router);
