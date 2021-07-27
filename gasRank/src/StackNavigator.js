import Page1 from './loginScreen';
import Page2 from './pages/CreateAccount';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
  })
);

export default Routes;