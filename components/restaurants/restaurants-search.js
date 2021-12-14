import { useRef } from 'react';

import Button from '../ui/button';
import { From, Controls, Control } from './restaurants-search-style';

function RestaurantSearch(props) {
  const searchInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const keyword = searchInputRef.current.value;
    props.onSearch(keyword);
  }

  return (
    <From onSubmit={submitHandler}>
      <Controls>
        <Control>
          <input type='text' id='search' placeholder='ex. Buddy Review' ref={searchInputRef} />
        </Control>
      </Controls>
      <Button>Search</Button>
    </From>
  );
}

export default RestaurantSearch;
