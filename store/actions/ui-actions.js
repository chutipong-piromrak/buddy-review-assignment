import { uiActions } from '../reducers/ui-slice';

export const showNotification = (notification) => {
  return async (dispatch) => {
    const showNotification = async () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      dispatch(
        uiActions.showNotification({
          status: notification.status,
          title: notification.title,
          message: notification.message,
        }),
      );
      setTimeout(() => {
        dispatch(uiActions.showNotification(null));
      }, 2000);
    };
    showNotification();
  };
};
