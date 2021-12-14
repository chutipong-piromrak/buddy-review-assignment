import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { fecthRestaurants } from '../store/actions/restaurants-actions';
import Auth from '../components/auth/auth';
import { userActions } from '../store/reducers/user-slice';

function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(userActions.login());
    router.replace('/');
  };

  useEffect(() => {
    dispatch(fecthRestaurants());
  }, [dispatch]);

  // return <Login onSubmit={loginHandler} />;
  return <Auth onSubmit={loginHandler} />;
}

export default LoginPage;
