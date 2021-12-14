import { restaurantsActions } from '../reducers/restaurants-slice';
import { showNotification } from './ui-actions';
import BASE_API from '../../helper/BaseApi';

const fetchData = async () => {
  const response = await fetch(BASE_API + 'restaurants.json');

  if (!response.ok) {
    throw new Error('Could not fetch cart data!');
  }

  const data = await response.json();

  return data;
};

export const fecthRestaurants = () => {
  return async (dispatch) => {
    try {
      const restaurantsData = await fetchData();
      dispatch(
        restaurantsActions.getRestaurants({
          items: restaurantsData || [],
        }),
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching restaurant data failed!',
        }),
      );
    }
  };
};

export async function getRestaurantById(id) {
  try {
    const restaurantsData = await fetchData();
    return restaurantsData.find((restaurant) => restaurant.id === id);
  } catch (error) {
    dispatch(
      showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching restaurant data failed!',
      }),
    );
  }
}

export const searchRestaurants = (keyword) => {
  return async (dispatch) => {
    try {
      const restaurantsData = await fetchData();

      const searchData = restaurantsData.filter((item) =>
        item.name
          .toLowerCase()
          .split(' ')
          .join('')
          .includes(keyword.toLowerCase().split(' ').join('')),
      );
      dispatch(
        restaurantsActions.getRestaurants({
          items: searchData || [],
        }),
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        }),
      );
    }
  };
};
