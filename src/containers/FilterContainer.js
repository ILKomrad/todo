import { connect } from 'react-redux';
import Filter from '../components/Filter';

import { visibilityFilter } from '../actions';

function mapStateToProps(state) {
    return {
        activeFilter: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFilter: filter => {
            return dispatch(visibilityFilter(filter));
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer;