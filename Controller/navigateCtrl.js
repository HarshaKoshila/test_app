import { StackActions, NavigationActions } from 'react-navigation';

export const resetStack = (screen_name) => StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: screen_name })],
});
 
