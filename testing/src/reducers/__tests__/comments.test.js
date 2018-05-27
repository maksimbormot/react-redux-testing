import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of types SAVE_COMMENT', () => {
  const commentString = 'New Comment';

  const action = {
    type: SAVE_COMMENT,
    payload: commentString
  };

  const newState = commentsReducer([],action);

  expect(newState).toEqual([commentString]);
});
