import generateTestFile from './js/test.template'
import generateIndexFile from './js/index.template'
import generateStoryFile from './js/story.template'
import generateStyleFile from './css/style.template'
import generatePureComponent from './js/pure.template'
import generateClassComponent from './js/class.template'
import generateStyledComponentFile from './css/styles.template'
import generateFunctionalComponent from './js/functional.template'

const types = {
  stateless: generateFunctionalComponent,
  class: generateClassComponent,
  pure: generatePureComponent,
};

function generateComponentTemplate(type, name) {
  return types[type](name)
}

export {
  generateTestFile,
  generateIndexFile,
  generateStoryFile,
  generateStyleFile,
  generateComponentTemplate,
  generateStyledComponentFile,
}
