import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './Registration';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Registration />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});