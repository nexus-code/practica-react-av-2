import { connect } from 'react-redux';
import AdDetail from './AdDetail';

const mapStateToProps = store => ({
    user: store.user,
    ads: store.ads,
})

export default connect(
    mapStateToProps,
    null,
)(AdDetail);
