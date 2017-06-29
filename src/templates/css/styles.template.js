export default function generateStylesFile(COMPONENT_NAME) {
  return `import styled, { css } from 'styled-components';

export const ${COMPONENT_NAME} = styled.div\`

\`;`
}
