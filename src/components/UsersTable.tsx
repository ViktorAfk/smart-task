import {
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/hooks';
import { selectColumn, setColumnValue } from '../store/feature/columnSlice';
import {
  clearSortOrder,
  selectOrder,
  setSortOrder,
} from '../store/feature/directionSlice';
import { selectQuery, setQueryValue } from '../store/feature/querySlice';
import { SortField } from '../types/filtered-params';
import { User } from '../types/user';
import { getUsersForRender } from '../utils/filteredUsers';

const activeColumns: { id: SortField; columnName: string }[] = [
  {
    id: 'name',
    columnName: 'Name',
  },
  {
    id: 'username',
    columnName: 'User name',
  },
  {
    id: 'email',
    columnName: 'Email',
  },
  {
    id: 'phone',
    columnName: 'Phone',
  },
];

type Props = {
  rows: User[];
};

export const UsersTable: React.FC<Props> = ({ rows }) => {
  const order = useAppSelector(selectOrder);
  const query = useAppSelector(selectQuery);
  const fieldType = useAppSelector(selectColumn);
  const dispatch = useDispatch();
  const users = getUsersForRender(rows, order, query, fieldType);

  const handleClick = (value: SortField) => {
    if (fieldType !== value) {
      dispatch(setColumnValue(value));
    }

    if (order === 'none') {
      dispatch(setSortOrder('asc'));
    }
    if (order === 'asc') {
      dispatch(setSortOrder('desc'));
    }
    if (order === 'desc') {
      dispatch(clearSortOrder());
    }
  };

  const onHandleChange = (queryValue: string, value: SortField) => {
    if (fieldType !== value) {
      dispatch(setColumnValue(value));
    }
    dispatch(setQueryValue(queryValue));
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
                rowSpan={3}
              >
                Id
              </TableCell>
              {activeColumns.map((column) => (
                <TableCell
                  align="center"
                  sx={{
                    borderRight: '1px solid rgba(224, 224, 224, 1)',
                    fontWeight: 'bold',
                  }}
                  key={column.id}
                  colSpan={1}
                  rowSpan={3}
                >
                  <TableSortLabel
                    active={
                      fieldType === column.id &&
                      (order === 'asc' || order === 'desc')
                    }
                    onClick={() => {
                      handleClick(column.id);
                    }}
                    direction={
                      order === 'desc' && fieldType === column.id
                        ? 'desc'
                        : 'asc'
                    }
                  >
                    {column.columnName}
                  </TableSortLabel>
                  <Input
                    placeholder="search..."
                    sx={{ width: '150px' }}
                    type="text"
                    value={fieldType === column.id ? query : ''}
                    onChange={(event) => {
                      onHandleChange(event.target.value, column.id);
                    }}
                  />
                </TableCell>
              ))}
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
                rowSpan={3}
              >
                Web site
              </TableCell>
              <TableCell
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={6}
                align="center"
              >
                Address
              </TableCell>
              <TableCell colSpan={3} align="center" sx={{ fontWeight: 'bold' }}>
                Company
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
                rowSpan={2}
              >
                Street
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
                rowSpan={2}
              >
                Suite
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
                rowSpan={2}
              >
                City
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
                rowSpan={2}
              >
                Zip code
              </TableCell>
              <TableCell
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={2}
                align="center"
              >
                Geo
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
                rowSpan={2}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
                rowSpan={2}
              >
                Catch phrase
              </TableCell>
              <TableCell
                sx={{ fontWeight: 'bold' }}
                align="center"
                colSpan={1}
                rowSpan={2}
              >
                BS
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
              >
                lat
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: '1px solid rgba(224, 224, 224, 1)',
                  fontWeight: 'bold',
                }}
                colSpan={1}
              >
                lng
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length < 1 ? (
              <TableRow>
                <TableCell colSpan={15}>
                  <Typography color="info" variant="h6" component={'p'}>
                    There are no information
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              users.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.website}</TableCell>
                  <TableCell>{row.address.street}</TableCell>
                  <TableCell>{row.address.suite}</TableCell>
                  <TableCell>{row.address.city}</TableCell>
                  <TableCell>{row.address.zipcode}</TableCell>
                  <TableCell>{row.address.geo.lat}</TableCell>
                  <TableCell>{row.address.geo.lng}</TableCell>
                  <TableCell>{row.company.name}</TableCell>
                  <TableCell>{row.company.catchPhrase}</TableCell>
                  <TableCell>{row.company.bs}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
