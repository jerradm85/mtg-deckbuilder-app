import React from 'react';
import ReactDOM from 'react-dom';
import Deck from './Deck';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Deck />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});