import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { userActions } from '../../store/reducers/user-slice';
import Button from '../ui/button';

import { HeaderStyle, LogoStyle, Navigation } from './main-header-style';

function MainHeader() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    dispatch(userActions.logout());
    router.replace('/login');
  };

  return (
    <HeaderStyle>
      <LogoStyle>
        <Link href='/'>Buddy Review</Link>
      </LogoStyle>
      {isAuth && (
        <Navigation>
          <ul>
            <li>
              <Link href='/search'>Search</Link>
            </li>
            <li>
              <Button danger onClick={logoutHandler}>
                Logout
              </Button>
            </li>
          </ul>
        </Navigation>
      )}
    </HeaderStyle>
  );
}

export default MainHeader;
