import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <User />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});