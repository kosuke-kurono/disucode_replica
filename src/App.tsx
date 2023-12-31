import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallBack } from './utils/ErrorFallBack';


function App() {
  const user = useAppSelector((state) => state.user);
  //const user = 1;
  // console.log(user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      }else{
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
          {/*サイドバーエリア*/}
          <Sidebar />
        </ErrorBoundary>
          {/*メインエリア*/}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
