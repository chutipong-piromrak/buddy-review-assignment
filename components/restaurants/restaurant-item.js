import Button from '../ui/button';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import { Item, Content, Address, Actions, Icon, Queue } from './restaurant-item-style';

function RestaurantItem(props) {
  const { name, image, date, location, id, remainingQueue } = props;

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/restaurants/${id}`;

  return (
    <Item>
      <img loading='lazy' src={image} alt={name} />
      <Content>
        <div>
          <h2>{name}</h2>
          <Address>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </Address>
        </div>
        <Queue>
          <span>Wait {remainingQueue} queues</span>
        </Queue>
        <Actions>
          <Button link={exploreLink}>
            <span>GET Q</span>
            <Icon>
              <ArrowRightIcon />
            </Icon>
          </Button>
        </Actions>
      </Content>
    </Item>
  );
}

export default RestaurantItem;
