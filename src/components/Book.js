import React from 'react';

import { Item } from 'semantic-ui-react';

function Book({ data: { volumeInfo } }) {
  const { imageLinks, title, publishedDate, authors, description } = volumeInfo;
  const src = imageLinks?.thumbnail;

  return (
    <Item>
      <Item.Image src={src} alt="default" />
      <Item.Content>
        <Item.Header as="a">{title || ''}</Item.Header>
        <Item.Meta>
          <span>Date: </span>
          <span>{publishedDate || ''}</span>
        </Item.Meta>
        <Item.Meta>
          <span>Author: </span>
          <span>{authors ? authors.join(', ') : ''}</span>
        </Item.Meta>
        <Item.Description>{description || ''}</Item.Description>
        {/* <Item.Extra>asdasd</Item.Extra> */}
      </Item.Content>
    </Item>
  );
}

export default Book;
