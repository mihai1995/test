import React from 'react';

import { Container, Item } from 'semantic-ui-react';

import { useSelector } from 'react-redux';

import Book from '../components/Book';

function Books() {
  const { loading, error, list } = useSelector((state) => state.books);

  return (
    <div>
      {error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      ) : (
        <>
          {loading ? (
            <p style={{ textAlign: 'center' }}>loading</p>
          ) : (
            <Container>
              <h3>Books Lists</h3>
              <Item.Group divided>
                {list?.map((item, index) => (
                  <Book key={index} data={item} />
                ))}
              </Item.Group>
            </Container>
          )}
        </>
      )}
    </div>
  );
}

export default Books;
