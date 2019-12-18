import { connect } from 'react-redux';
import Register from './Register';

import { getUser } from '../../store/user/selectors';
import { setUser } from '../../store/user/actions'

function mapStateToProps() {
    return {
        user: getUser(),
    };
}

const mapDispatchToProps = {
    setUser,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);
