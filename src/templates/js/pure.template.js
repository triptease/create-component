export default function generatePureComponent(COMPONENT_NAME) {
  return `import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ${COMPONENT_NAME} extends PureComponent {
  static propTypes = {
  
  };
  
  static defaultProps = {
  
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="${COMPONENT_NAME}"></div>
    );
  }
}`
}
