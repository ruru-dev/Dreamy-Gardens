import { connect } from 'react-redux';
import FeaturedInspos from '../components/FeaturedInspos';

const mapStateToProps = (state) => ({
  user: state.user,
  inspos: state.inspos.featured
});

export default connect(mapStateToProps)(FeaturedInspos);