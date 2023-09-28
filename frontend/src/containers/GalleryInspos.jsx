import { connect } from 'react-redux';
import GalleryInspos from '../components/GalleryInspos';

const mapStateToProps = (state) => ({
  user: state.user,
  inspos: state.inspos.gallery
});

export default connect(mapStateToProps)(GalleryInspos);