import { createStackNavigator } from 'react-navigation';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

const Routes = createStackNavigator({
  SignIn,
  SignUp,
});

export default Routes;