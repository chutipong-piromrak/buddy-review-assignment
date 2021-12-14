import Link from 'next/link';

import { Btn, BtnLink } from './button-style';

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <BtnLink>{props.children}</BtnLink>
      </Link>
    );
  }

  return (
    <Btn danger={props.danger} onClick={props.onClick}>
      {props.children}
    </Btn>
  );
}

export default Button;
