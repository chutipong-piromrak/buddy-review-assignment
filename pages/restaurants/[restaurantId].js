import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

import RestaurantTitle from '../../components/restaurant-detail/restaurant-title';
import RestaurantDetails from '../../components/restaurant-detail/restaurant-details';
import RestaurantContent from '../../components/restaurant-detail/restaurant-content';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';
import { showNotification } from '../../store/actions/ui-actions';
import { getRestaurantById } from '../../store/actions/restaurants-actions';
import { userActions } from '../../store/reducers/user-slice';

function RestaurantDetailPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const subscribes = useSelector((state) => state.user.subscribes);
  const restaurantId = router.query.restaurantId;
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(null);

  useEffect(() => {
    if (!isAuth) {
      router.replace('/login');
    }
  }, [router, isAuth]);

  useEffect(() => {
    const getRestaurantDetail = async () => {
      setIsLoading(true);
      const restaurantDetail = await getRestaurantById(restaurantId);
      setRestaurant(restaurantDetail);
      setIsLoading(false);
    };

    const validateSubscribe = () => {
      const dataItem = subscribes.find((item) => item.restaurantId === restaurantId);
      setSubscribed(dataItem);
    };

    getRestaurantDetail();
    validateSubscribe();
  }, [restaurantId, subscribes]);

  if (!restaurant && isLoading) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    );
  }

  if (!restaurant) {
    return (
      <ErrorAlert>
        <p>No restaurant found!</p>
      </ErrorAlert>
    );
  }

  const generateQueueNumber = () => {
    return 'A0000' + Math.floor(Math.random() * 10);
  };

  const submitQueueHandler = () => {
    dispatch(
      userActions.addSubscribe({
        restaurantId: restaurantId,
        queue: generateQueueNumber(),
        queueId: new Date().toISOString(),
      }),
    );
    dispatch(
      showNotification({
        status: 'success',
        title: 'Success',
        message: 'Get Q Successfully!',
      }),
    );
  };

  const cancelQHandler = () => {
    if (!subscribed) {
      return;
    }
    dispatch(
      userActions.removeSubscribe({
        queueId: subscribed.queueId,
      }),
    );
    dispatch(
      showNotification({
        status: 'success',
        title: 'Success',
        message: 'Cancel Q Successfully!',
      }),
    );
  };

  return (
    <Fragment>
      <RestaurantTitle title={restaurant.name} />
      <RestaurantDetails
        name={restaurant.name}
        address={restaurant.location}
        image={restaurant.image}
        imageAlt={restaurant.name}
        queue={restaurant.remainingQueue}
      />
      {!subscribed && (
        <RestaurantContent>
          <Button onClick={submitQueueHandler}>Get Q</Button>
        </RestaurantContent>
      )}
      {subscribed && (
        <ErrorAlert>
          <p>You Q Number {subscribed.queue}</p>
          <Button danger onClick={cancelQHandler} type='danger'>
            Cancel Q
          </Button>
        </ErrorAlert>
      )}
    </Fragment>
  );
}

export default RestaurantDetailPage;
