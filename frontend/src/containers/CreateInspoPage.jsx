import { connect } from 'react-redux';
import CreateInspoPage from '../components/CreateInspoPage';

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(CreateInspoPage);