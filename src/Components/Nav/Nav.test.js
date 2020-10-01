import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});