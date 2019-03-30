import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner, Grid, Circle } from '../src';

storiesOf('Spinners', module)
  .add('Spinner', () => <Spinner />)
  .add('Grid', () => <Grid />)
  .add('Circle', () => <Circle />);
