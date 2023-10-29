import { connect } from 'react-redux';
import CreateInspoForm from '../components/CreateInspoForm';
import { createInspo } from '../redux/actions';

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    createInspo: (formEl, taggedPlants) => createInspo(dispatch, formEl, taggedPlants)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateInspoForm);
