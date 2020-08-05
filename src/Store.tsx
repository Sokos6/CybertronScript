import React, { useReducer, createContext } from 'react';
import { IState, IAction } from './types/interfaces';
const initialState: IState = {
  episodes: [],
  favorites: [],
};
export const Store = createContext<IState | any>(initialState);
const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    //Add the `ADD_FAV` action..
    case 'ADD_FAV':
      return { ...state, favorites: [...state.favorites, action.payload] };
    //ADD REMOVE FAV
    case 'REMOVE_FAV':
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};
export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
