import { connect } from 'react-redux';
import TaggedPlantSelect from '../components/TaggedPlantSelect';
import { fetchPlants } from '../redux/actions';

const mapStateToProps = (state) => ({
    plants: state.plants
});

const mapDispatchToProps = (dispatch) => ({
    fetchPlants: () => fetchPlants(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TaggedPlantSelect);
