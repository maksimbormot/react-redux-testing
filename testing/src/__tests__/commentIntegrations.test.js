import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {  name: 'Fetched 1' },
      {  name: 'Fetched 2' },
      {  name: 'Fetched 3' }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // attempt to render the entire application
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the fetchComments button and click it
  wrapped.find('button.fetch-comments').simulate('click');

  // introduce a tiny little pause - 100ms delay
  setTimeout(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(3);
    done();
    wrapped.unmount();
  }, 100);

});
