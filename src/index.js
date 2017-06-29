#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs-extra';
import yargs from 'yargs';
import questions from './questions';
import {
  generateTestFile,
  generateIndexFile,
  generateStoryFile,
  generateStyleFile,
  generateComponentTemplate,
  generateStyledComponentFile
} from './templates';

// Dynamically import the config file if exist
const configPath = yargs.argv.config;
const config = configPath ? require(`${process.cwd()}/${configPath}`) : null;

function generateFiles({ type, name, path, indexFile, cssExtension, connected, includeStories, includeTests }) {
  const destination = `${path}/${name}`;

  if (indexFile || connected) {
    fs.outputFile(`${destination}/index.js`, generateIndexFile(name, connected));
  }

  // Create js file
  fs.outputFile(`${destination}/${name}.js`, generateComponentTemplate(type, name));

  // Create css file
  if (cssExtension === 'styles.js') {
    fs.outputFile(`${destination}/${name}.styles.js`, generateStyledComponentFile(name));
  } else if (cssExtension !== 'none') {
    fs.outputFile(`${destination}/${name}.${cssExtension}`, generateStyleFile(name));
  }

  // Create story file
  if (includeStories) {
    fs.outputFile(`${destination}/${name}.stories.js`, generateStoryFile(name));
  }

  // Create Test file
  if (includeTests) {
    fs.outputFile(`${destination}/${name}.tests.js`, generateTestFile(name));
  }
}

/**
 * Generate questions filtered by the config file if exist
 */
function generateQuestions() {
  const questionKeys = Object.keys(questions);

  if (!config) {
    return questionKeys.map(question => questions[question]);
  }

  const filteredQuestions = [];

  questionKeys.forEach((question) => {
    if (!config[question]) {
      filteredQuestions.push(questions[question]);
    }
  });

  return filteredQuestions;
}

/**
 * Start the process to generate component folder and files:
 * Filter question by config file
 * Get from the user the requirements to create the component folder and files
 * Generate files
 */
async function start() {
  try {
    const filteredQuestions = generateQuestions();

    const requirements = await inquirer.prompt(filteredQuestions);

    const results = {
      ...config,
      ...requirements,
    };

    generateFiles(results);

    console.log('Your component is created!');
  } catch (e) {
    console.log(e);
  }
}

start();
