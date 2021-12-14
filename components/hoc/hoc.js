import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../layout/layout';
import Notification from '../ui/notification';

function Hoc(props) {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>{props.children}</Layout>
    </Fragment>
  );
}

export default Hoc;
