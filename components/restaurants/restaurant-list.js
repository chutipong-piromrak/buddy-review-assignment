import RestaurantItem from './restaurant-item';
import styled from 'styled-components';

const List = styled.ul`
  width: 90%;
  max-width: 40rem;
  margin: 5rem auto;
`;

function RestaurantList(props) {
  const { items } = props;

  return (
    <List>
      {items.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          location={restaurant.location}
          image={restaurant.image}
          remainingQueue={restaurant.remainingQueue}
        />
      ))}
    </List>
  );
}

export default RestaurantList;
