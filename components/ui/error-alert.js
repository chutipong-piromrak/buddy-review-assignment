import { Alert } from './error-alert-style';

function ErrorAlert(props) {
  return <Alert>{props.children}</Alert>;
}

export default ErrorAlert;
