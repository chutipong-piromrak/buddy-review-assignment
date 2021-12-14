import Button from '../ui/button';
import { AuthStyle, Control } from './auth-style';

const Auth = (props) => {
  return (
    <AuthStyle>
      <section>
        <form onSubmit={props.onSubmit}>
          <Control>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </Control>
          <Control>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </Control>
          <Button>Login</Button>
        </form>
      </section>
    </AuthStyle>
  );
};

export default Auth;
