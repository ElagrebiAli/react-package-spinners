// eslint-disable-next-line import/no-extraneous-dependencies
import { configure, addParameters } from '@storybook/react';
import packageJson from '../package.json';

function loadStories() {
  // eslint-disable-next-line global-require
  require('../stories/index.js');
}

addParameters({
  options: {
    name: 'Spinners',
    url: packageJson.repository.url,
    showPanel: false,
  },
});

configure(loadStories, module);
