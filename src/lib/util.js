import {StackActions} from 'react-navigation';

let navigator;

export function setNavigator(ref) {
  navigator = ref;
}

export function navigateReplace(routeName, params) {
  if (!navigator) return;

  navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}
