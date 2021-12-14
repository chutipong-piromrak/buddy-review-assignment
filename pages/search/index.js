import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import RestaurantList from '../../components/restaurants/restaurant-list';
import RestaurantSearch from '../../components/restaurants/restaurants-search';
import { searchRestaurants } from '../../store/actions/restaurants-actions';
import ErrorAlert from '../../components/ui/error-alert';

function SearchPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.items);
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  function findRestaurantHandler(keyword) {
    dispatch(searchRestaurants(keyword));
  }

  useEffect(() => {
    if (!isAuth) {
      router.replace('/login');
    }
  }, [router, isAuth]);

  return (
    <Fragment>
      <RestaurantSearch onSearch={findRestaurantHandler} />
      {restaurants.length > 0 && <RestaurantList items={restaurants} />}
      {restaurants.length === 0 && (
        <ErrorAlert>
          <p>No restaurants matched your search</p>
        </ErrorAlert>
      )}
    </Fragment>
  );
}

export default SearchPage;
