import React, { Component } from 'react';
import {
  createAppContainer,
} from 'react-navigation';
// import HomeRoute from './src/routes/HomeRoute';
import HomeStack from './src/components/stacks/HomeStack';
// export default createAppContainer(HomeRoute);
export default createAppContainer(HomeStack);