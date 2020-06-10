import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { getBooksGoogle, mode as reduxTheme, currentMode } from '../redux/BOOKS/actions';

import { Container, Menu, Checkbox } from 'semantic-ui-react';
import qs from 'query-string';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const { mode } = useSelector((state) => state.books);
  const history = useHistory();
  const Dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const search = useLocation().search;

  useEffect(() => {
    const newTitle = qs.parse(search);
    if (!!newTitle.search) {
      setTitle(newTitle.search);
    }
    getData(newTitle.search);
    Dispatch(currentMode());
  }, []);

  const getData = (titleFromPath) => {
    let key = !!titleFromPath ? titleFromPath : title;
    const string = `${qs.stringify({ search: key })}`;
    history.push({
      pathname: '/',
      search: string,
    });

    Dispatch(getBooksGoogle(key));
  };

  return (
    <Container>
      <Menu stackable inverted={mode}>
        <Menu.Item>
          <Checkbox checked={mode} toggle label="" onChange={(event, { checked }) => Dispatch(reduxTheme(checked))} />
        </Menu.Item>
        <Menu.Item>
          <Link to="/">Books Lists</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/shelves">Shelves</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/review">Shelf with Review</Link>
        </Menu.Item>
        <Menu.Item>
          <div className="ui action input">
            <input
              onChange={(e) => setTitle(e.currentTarget.value)}
              value={title}
              type="text"
              placeholder="Search..."
            />
            <button onClick={() => getData()} className="ui button">
              Search
            </button>
          </div>
        </Menu.Item>
      </Menu>
    </Container>
  );
}

export default Header;
