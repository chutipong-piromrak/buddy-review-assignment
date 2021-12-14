import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantList from '../components/restaurants/restaurant-list';
import { fecthRestaurants } from '../store/actions/restaurants-actions';
import ErrorAlert from '../components/ui/error-alert';

function HomePage() {
  const router = useRouter();
  const restaurants = useSelector((state) => state.restaurants.items);
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuth) {
      router.replace('/login');
    }
    setIsLoading(true);
    dispatch(fecthRestaurants());
    setIsLoading(false);
  }, [dispatch, router, isAuth]);

  if (!restaurants.length && isLoading) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      {restaurants.length > 0 && <RestaurantList items={restaurants} />}
      {restaurants.length === 0 && (
        <ErrorAlert>
          <p>No restaurants matched your search</p>
        </ErrorAlert>
      )}
    </Fragment>
  );
}

export default HomePage;
