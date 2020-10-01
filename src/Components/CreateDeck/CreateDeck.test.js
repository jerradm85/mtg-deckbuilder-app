import React from 'react';
import ReactDOM from 'react-dom';
import CreateDeck from './CreateDeck'
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <CreateDeck />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});