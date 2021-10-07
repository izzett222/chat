import react, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import UnauthorizedApp from './UnauthorizedApp';
import client from './utils/api-client'
import * as auth from './auth-provider';
import {useAsync} from './utils/hooks/useAsync';
import { FullPageSpinner, FullPageError} from './componets/lib'

const getUser = async () => {
  let user = null;
  const token = auth.getToken();
  if(token) {
    const {data} = await client('me', { token });
    user = data;
  }
  return user;
}


function App() {
  // const [user, setUser] = useState(null);
  const { data: user, error, isError, isIdle, isLoading, run, setData } = useAsync();

  useEffect(() => {
    run(getUser());
  }, [run]);
  const login = (form) => {
     return auth.login(form).then(user => {
       setData(user);
     })
  }
  const signup = (form) => {
    return auth.signup(form).then(user => {
      setData(user);
    })
  }
  const logout = () => {
    auth.logout();
    setData(null);
  }
  if(isLoading || isIdle) {
    return <FullPageSpinner />
  }
  if(isError) {
    return <FullPageError message={error.message} />
  }
  return user ? <h1>{`${user.username} logged in`}</h1>  : <Router><UnauthorizedApp login={login} signup={signup} /></Router>
}

export default App;
