import '../styles/globals.css';

import { Provider } from 'react-redux';

import store from '../store/index';
import Hoc from '../components/hoc/hoc';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Hoc>
        <Component {...pageProps} />
      </Hoc>
    </Provider>
  );
}

export default MyApp;
