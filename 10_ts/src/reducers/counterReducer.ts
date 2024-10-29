import { CounterAction } from '../types/actions';

export const counterReducer = (
  state: number,
  action: CounterAction
): number => {
  if (action.type === 'increment') {
    return state + 1;
  } else if (action.type === 'decrement') {
    return state - 1;
  } else {
    return state;
  }
};
