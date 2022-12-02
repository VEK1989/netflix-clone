import {Reducer, useReducer} from 'react';

/**
 * Универсальный хук для переключения значения.
 */
const toggleReducer = (state: boolean, nextValue?: any) => (typeof nextValue === 'boolean' ? nextValue : !state);

export const useToggle = (initialValue: boolean): [boolean, (nextValue?: any) => void] => {
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};
