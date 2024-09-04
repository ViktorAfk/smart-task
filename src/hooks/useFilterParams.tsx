import { useReducer } from 'react';
import { SortField, SortOrder } from '../types/filtered-params';

type Actions = {
  type: SortField;
  payload: {
    direction: SortOrder;
    sortValue: SortField;
    inputValue: string;
  };
};

interface State {
  fieldType: SortField;
  direction: SortOrder;
  query: string;
}

const reducer = (state: State, action: Actions) => {
  const { sortValue, direction, inputValue } = action.payload;
  switch (action.type) {
    case 'name':
      return {
        ...state,
        fieldType: sortValue,
        direction,
        query: inputValue,
      };
    case 'email':
      return {
        ...state,
        fieldType: sortValue,
        direction,
        query: inputValue,
      };
    case 'phone':
      return {
        ...state,
        fieldType: sortValue,
        direction,
        query: inputValue,
      };
    case 'username': {
      return {
        ...state,
        fieldType: sortValue,
        direction,
        query: inputValue,
      };
    }
    default:
      return state;
  }
};

export const useFilterParams = () => {
  const [state, dispatch] = useReducer(reducer, {
    fieldType: 'none',
    direction: 'none',
    query: '',
  });

  const handleSort = (field: SortField) => {
    if (state.direction === 'none') {
      dispatch({
        type: field,
        payload: {
          sortValue: field,
          inputValue: state.query,
          direction: 'asc',
        },
      });
    }
    if (state.direction === 'asc') {
      dispatch({
        type: state.fieldType,
        payload: {
          inputValue: state.query,
          sortValue: state.fieldType,
          direction: 'desc',
        },
      });
    }
    if (state.direction === 'desc') {
      dispatch({
        type: state.fieldType,
        payload: {
          inputValue: state.query,
          sortValue: state.fieldType,
          direction: 'none',
        },
      });
    }
  };

  return { handleSort, dispatch, state };
};
