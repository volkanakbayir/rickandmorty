import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export const connectTo = (mapStateToProps, actions, Component) => {
    const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Component)
}

export function extractLastPathPartFromUri(urlToExtractId) {
    const splitPaths = urlToExtractId.split('/');
    return splitPaths[splitPaths.length - 1];
}