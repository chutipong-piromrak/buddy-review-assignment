import { Noti } from './notification-style';

const Notification = (props) => {
  return (
    <Noti status={props.status}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </Noti>
  );
};

export default Notification;
