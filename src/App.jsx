import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import PhoneBook from 'modules/PhoneBook/PhoneBook';

import {store,persistor }from 'redux/store';

export const App = () => {
  return (
    <div>
      <Provider store ={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <PhoneBook />
        </PersistGate>
      </Provider>
      
    </div>
  );
};
