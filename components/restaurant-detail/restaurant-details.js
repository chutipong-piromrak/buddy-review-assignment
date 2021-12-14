import AddressIcon from '../icons/address-icon';
import DetailsItem from './details-item';
import ClockIcon from '../icons/clock-icon';
import { Details, ContainerImage, List } from './restaurant-details-style';

function RestaurantDetails(props) {
  const { name, address, image, imageAlt, queue } = props;

  const addressText = address.replace(', ', '\n');

  return (
    <Details>
      <ContainerImage>
        <img src={image} alt={imageAlt} />
      </ContainerImage>
      <List>
        <DetailsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </DetailsItem>
        <DetailsItem icon={ClockIcon}>
          <span>Wait {queue} queues</span>
        </DetailsItem>
      </List>
    </Details>
  );
}

export default RestaurantDetails;
