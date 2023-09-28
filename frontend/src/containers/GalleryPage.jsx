import { connect } from 'react-redux';
import GalleryPage from '../components/GalleryPage';

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(GalleryPage);