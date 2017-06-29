export default {
  type: {
    type: 'list',
    name: 'type',
    message: 'What kind of components do you want to create?',
    choices: ['class', 'stateless', 'pure'],
  },
  name: {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component?',
    default: 'ComponentName',
  },
  connected: {
    type: 'confirm',
    name: 'connected',
    message: 'Do you want to connect the component to redux?',
    default: false,
  },
  indexFile: {
    type: 'confirm',
    name: 'indexFile',
    message: 'Do you want an index file on your folder?',
    default: true,
  },
  cssExtension: {
    type: 'list',
    name: 'cssExtension',
    message: 'What kind of extension do you use for css files?',
    choices: ['css', 'styles.js', 'none'],
  },
  includeStories: {
    type: 'confirm',
    name: 'includeStory',
    message: 'Do you want a storybook file?',
    default: true,
  },
  includeTests: {
    type: 'confirm',
    name: 'includeTests',
    message: 'Do you want a test file?',
    default: true,
  },
  path: {
    type: 'input',
    name: 'path',
    message: 'Where do you want create your component?',
    default: './src/components',
  },
};
