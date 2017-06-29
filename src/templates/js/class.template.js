export default function generateClassComponent(COMPONENT_NAME) {
  return `import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ${COMPONENT_NAME} extends Component {
  static propTypes = {
  
  };
  
  static defaultProps = {
  
  };

  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div className="${COMPONENT_NAME}"></div>
    );
  };
}`
}