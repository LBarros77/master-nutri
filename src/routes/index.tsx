import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import auth from 'firebase/auth';

import { auth as authFirebase } from "../services/firebase/firebaseConfig";
import TabRoutes from "./tab.routes";
import { AuthRoutes } from './auth.routes';

export default function Routes() {
  const [user, setUser] = useState<auth.User | null>(null);
  
  useEffect(() => {
    const subscriber = authFirebase.onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user === null?
        <AuthRoutes /> :
        <TabRoutes />
      }
    </NavigationContainer>
  )
}