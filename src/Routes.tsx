import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useUser} from './hooks';

// Pages
import {Books, Login, BookDetails} from './pages';

const {Navigator, Screen} = createNativeStackNavigator();

export const Routes = () => {
  const {token} = useUser();

  return (
    <Navigator>
      {!token ? (
        <Screen options={{headerShown: false}} name="Login" component={Login} />
      ) : (
        <>
          <Screen
            name="Books"
            component={Books}
            options={{
              headerStyle: {
                backgroundColor: '#e5e5e5',
              },
              headerShadowVisible: false,
              headerShown: false,
            }}
          />
          <Screen
            name="BookDetails"
            component={BookDetails}
            options={{title: '', headerShadowVisible: false}}
          />
        </>
      )}
    </Navigator>
  );
};
