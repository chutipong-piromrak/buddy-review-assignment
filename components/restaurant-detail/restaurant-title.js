import { Title } from './restaurant-title-style';

function RestaurantTitle(props) {
  const { title } = props;

  return (
    <Title>
      <h1>{title}</h1>
    </Title>
  );
}

export default RestaurantTitle;
