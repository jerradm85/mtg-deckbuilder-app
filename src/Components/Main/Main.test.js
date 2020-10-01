import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});