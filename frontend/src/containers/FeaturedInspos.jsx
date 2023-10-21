import { connect } from 'react-redux';
import FeaturedInspos from '../components/FeaturedInspos';
import { fetchFeaturedInpos } from '../redux/actions';

const mapStateToProps = (state) => ({
    user: state.user,
    featuredInspos: state.inspos.featured
});

const mapDispatchToProps = (dispatch) => ({
    fetchFeaturedInspos: () => fetchFeaturedInpos(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedInspos);
