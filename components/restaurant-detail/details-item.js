import { Item, IconStyled } from './detail-item-style';

function DetailsItem(props) {
  const { icon: Icon } = props;

  return (
    <Item>
      <IconStyled>
        <Icon />
      </IconStyled>
      <span>{props.children}</span>
    </Item>
  );
}

export default DetailsItem;
