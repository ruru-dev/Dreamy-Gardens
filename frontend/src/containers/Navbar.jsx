import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Navbar);