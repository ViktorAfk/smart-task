import { SortField, SortOrder } from '../types/filtered-params';
import { User } from '../types/user';

const sortUsers = (
  items: User[],
  direction: SortOrder,
  columnType: SortField,
) => {
  if (columnType === 'none') {
    return items;
  }
  return items.sort((itemA, itemB) => {
    const aValue = itemA[columnType];
    const bValue = itemB[columnType];
    const result =
      direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    return result;
  });
};

const filteredUsers = (
  items: User[],
  inputValue: string,
  columnType: 'name' | 'username' | 'phone' | 'email',
) => {
  const preparedValue = inputValue.trim().toLowerCase();

  return items.filter((item) => {
    const preparedItemValue = item[columnType].toLowerCase();
    return preparedItemValue.includes(preparedValue);
  });
};

export const getUsersForRender = (
  users: User[],
  direction: SortOrder,
  inputValue: string,
  columnType: SortField,
) => {
  let copyUsers = [...users];

  if (inputValue.trim().length > 0 && columnType !== 'none') {
    copyUsers = filteredUsers(copyUsers, inputValue, columnType);
  }
  if (direction !== 'none') {
    copyUsers = sortUsers(copyUsers, direction, columnType);
  }

  return copyUsers;
};
