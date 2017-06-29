export default function generateReduxConnect(COMPONENT_NAME) {
  return `import ${COMPONENT_NAME} from './${COMPONENT_NAME}.js';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({  });

const mapDispatchToProps = (dispatch, props) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(${COMPONENT_NAME});`
}

function generateIndexFile(COMPONENT_NAME, connected) {
  if (connected) {
    return generateReduxConnect(COMPONENT_NAME)
  }

  return `import ${COMPONENT_NAME} from './${COMPONENT_NAME}.js';

export default ${COMPONENT_NAME};
`
}
