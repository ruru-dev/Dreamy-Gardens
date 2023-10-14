import { connect } from 'react-redux';
import GalleryInspos from '../components/GalleryInspos';
import { fetchGalleryInpos } from '../redux/actions';

const mapStateToProps = (state) => ({
  user: state.user,
  galleryInspos: state.inspos.gallery
});

const mapDispatchToProps = (dispatch) => ({
  fetchGalleryInspos: () => fetchGalleryInpos(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryInspos);