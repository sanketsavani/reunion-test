// // src/app/page.tsx
// 'use client'

// import React, { useMemo, useState, useEffect } from 'react';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
//   type MRT_ColumnDef,
// } from 'material-react-table';
// import {
//   Box,
//   Button,
//   Drawer,
//   IconButton,
//   Slider,
//   Typography,
// } from '@mui/material';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { format } from 'date-fns';

// interface DataItem {
//   name: string;
//   category: string;
//   subcategory: string;
//   price: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export default function Home() {
//   const [data, setData] = useState<DataItem[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [columnFilters, setColumnFilters] = useState<any[]>([]);
//   const [globalFilter, setGlobalFilter] = useState<string>('');
//   const [sorting, setSorting] = useState<any[]>([]);
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 10,
//   });
//   const [grouping, setGrouping] = useState<string[]>([]);
//   const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({});
//   const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
//   const [drawerContent, setDrawerContent] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://file.notion.so/f/f/ca71608c-1cc3-4167-857a-24da97c78717/b041832a-ec40-47bb-b112-db9eeb72f678/sample-data.json?table=block&id=ce885cf5-d90e-46f3-ab62-c3609475cfb6&spaceId=ca71608c-1cc3-4167-857a-24da97c78717&expirationTimestamp=1727431200000&signature=nWGBNhQXZk9mVkiH26S8wB1Mor8fKb9L4RVR7TRTyW0&downloadName=sample-data.json');
//         const jsonData = await response.json();
//         setData(jsonData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const columns = useMemo<MRT_ColumnDef<DataItem>[]>(
//     () => [
//       {
//         accessorKey: 'name',
//         header: 'Name',
//         filterFn: 'fuzzy',
//       },
//       {
//         accessorKey: 'category',
//         header: 'Category',
//         filterVariant: 'multi-select',
//       },
//       {
//         accessorKey: 'subcategory',
//         header: 'Subcategory',
//         filterVariant: 'multi-select',
//       },
//       {
//         accessorKey: 'price',
//         header: 'Price',
//         filterFn: 'betweenInclusive',
//         Cell: ({ cell }) => `$${cell.getValue<number>().toFixed(2)}`,
//       },
//       {
//         accessorKey: 'createdAt',
//         header: 'Created At',
//         filterFn: 'betweenInclusive',
//         Cell: ({ cell }) => format(new Date(cell.getValue<string>()), 'dd-MMM-yyyy HH:mm'),
//       },
//       {
//         accessorKey: 'updatedAt',
//         header: 'Updated At',
//         filterFn: 'betweenInclusive',
//         Cell: ({ cell }) => format(new Date(cell.getValue<string>()), 'dd-MMM-yyyy HH:mm'),
//       },
//     ],
//     []
//   );

//   const table = useMaterialReactTable({
//     columns,
//     data,
//     enableColumnFilters: true,
//     enableFilters: true,
//     enableGlobalFilter: true,
//     enableGrouping: true,
//     enableColumnOrdering: true,
//     enablePagination: true,
//     enableSorting: true,
//     manualPagination: true,
//     manualFiltering: true,
//     manualSorting: true,
//     onColumnFiltersChange: setColumnFilters,
//     onGlobalFilterChange: setGlobalFilter,
//     onPaginationChange: setPagination,
//     onSortingChange: setSorting,
//     onGroupingChange: setGrouping,
//     onColumnVisibilityChange: setColumnVisibility,
//     renderTopToolbarCustomActions: () => (
//       <Box>
//         <IconButton onClick={() => handleDrawerOpen('group')}>
//           Group
//         </IconButton>
//         <IconButton onClick={() => handleDrawerOpen('filter')}>
//           Filter
//         </IconButton>
//         <IconButton onClick={() => handleDrawerOpen('sort')}>
//           Sort
//         </IconButton>
//         <IconButton onClick={() => handleDrawerOpen('columns')}>
//           Columns
//         </IconButton>
//       </Box>
//     ),
//     state: {
//       columnFilters,
//       globalFilter,
//       isLoading,
//       pagination,
//       sorting,
//       grouping,
//       columnVisibility,
//     },
//   });

//   const handleDrawerOpen = (content: string) => {
//     setDrawerContent(content);
//     setDrawerOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const renderDrawerContent = () => {
//     switch (drawerContent) {
//       case 'group':
//         return (
//           <Box>
//             <Typography variant="h6">Group Data</Typography>
//             {/* Add grouping controls here */}
//           </Box>
//         );
//       case 'filter':
//         return (
//           <Box>
//             <Typography variant="h6">Filter Data</Typography>
//             {/* Add filter controls here */}
//           </Box>
//         );
//       case 'sort':
//         return (
//           <Box>
//             <Typography variant="h6">Sort Data</Typography>
//             {/* Add sorting controls here */}
//           </Box>
//         );
//       case 'columns':
//         return (
//           <Box>
//             <Typography variant="h6">Manage Columns</Typography>
//             {/* Add column visibility controls here */}
//           </Box>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box>
//       <h1>Advanced Data Table</h1>
//       <MaterialReactTable table={table} />
//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//       >
//         {renderDrawerContent()}
//       </Drawer>
//     </Box>
//   );
// }


// 'use client'

// import React, { useMemo, useState, useEffect } from 'react';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
//   type MRT_ColumnDef,
//   MRT_ColumnFiltersState,
//   MRT_SortingState,
//   MRT_GroupingState,
//   MRT_ColumnOrderState,
//   MRT_VisibilityState,
// } from 'material-react-table';
// import {
//   Box,
//   Drawer,
//   IconButton,
//   Typography,
//   Checkbox,
//   FormControlLabel,
//   Slider,
//   TextField,
// } from '@mui/material';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { format, parseISO } from 'date-fns';

// interface DataItem {
//   name: string;
//   category: string;
//   subcategory: string;
//   price: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export default function Home() {
//   const [data, setData] = useState<DataItem[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
//   const [globalFilter, setGlobalFilter] = useState('');
//   const [sorting, setSorting] = useState<MRT_SortingState>([]); // Sorting state
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 10,
//   });
//   const [grouping, setGrouping] = useState<MRT_GroupingState>([]);
//   const [columnOrder, setColumnOrder] = useState<MRT_ColumnOrderState>([]);
//   const [columnVisibility, setColumnVisibility] = useState<MRT_VisibilityState>({});
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [drawerContent, setDrawerContent] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           'https://file.notion.so/f/f/ca71608c-1cc3-4167-857a-24da97c78717/b041832a-ec40-47bb-b112-db9eeb72f678/sample-data.json?table=block&id=ce885cf5-d90e-46f3-ab62-c3609475cfb6&spaceId=ca71608c-1cc3-4167-857a-24da97c78717&expirationTimestamp=1727431200000&signature=nWGBNhQXZk9mVkiH26S8wB1Mor8fKb9L4RVR7TRTyW0&downloadName=sample-data.json'
//         );
//         const jsonData = await response.json();
//         setData(jsonData);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const columns = useMemo<MRT_ColumnDef<DataItem>[]>(
//     () => [
//       {
//         accessorKey: 'name',
//         header: 'Name',
//         filterFn: 'fuzzy',
//         enableSorting: true, // Enable sorting for the Name column
//       },
//       {
//         accessorKey: 'category',
//         header: 'Category',
//         filterVariant: 'multi-select',
//         enableSorting: true, // Enable sorting for the Category column
//       },
//       {
//         accessorKey: 'subcategory',
//         header: 'Subcategory',
//         filterVariant: 'multi-select',
//         enableSorting: true, // Enable sorting for the Subcategory column
//       },
//       {
//         accessorKey: 'price',
//         header: 'Price',
//         filterFn: 'between',
//         Cell: ({ cell }) => `$${cell.getValue<number>().toFixed(2)}`,
//         enableSorting: true, // Enable sorting for the Price column
//       },
//       {
//         accessorKey: 'createdAt',
//         header: 'Created At',
//         filterFn: 'betweenDate',
//         Cell: ({ cell }) => format(parseISO(cell.getValue<string>()), 'dd-MMM-yyyy HH:mm'),
//         enableSorting: true, // Enable sorting for the Created At column
//       },
//       {
//         accessorKey: 'updatedAt',
//         header: 'Updated At',
//         filterFn: 'betweenDate',
//         Cell: ({ cell }) => format(parseISO(cell.getValue<string>()), 'dd-MMM-yyyy HH:mm'),
//         enableSorting: true, // Enable sorting for the Updated At column
//       },
//     ],
//     []
//   );

//   const table = useMaterialReactTable({
//     columns,
//     data,
//     enableColumnFilters: true,
//     enableFilters: true,
//     enableGlobalFilter: true,
//     enableGrouping: true,
//     enableColumnOrdering: true,
//     enablePagination: true,
//     enableSorting: true, // Enable sorting in the table
//     enableSortingRemoval: true, // Enable removing sorting by clicking the header multiple times
//     manualPagination: true,
//     manualFiltering: true,
//     manualSorting: false, // Let the table handle sorting automatically
//     onColumnFiltersChange: setColumnFilters,
//     onGlobalFilterChange: setGlobalFilter,
//     onPaginationChange: setPagination,
//     onSortingChange: setSorting, // Handle sorting state changes
//     onGroupingChange: setGrouping,
//     onColumnOrderChange: setColumnOrder,
//     onColumnVisibilityChange: setColumnVisibility,
//     state: {
//       columnFilters,
//       globalFilter,
//       isLoading,
//       pagination,
//       sorting,
//       grouping,
//       columnOrder,
//       columnVisibility,
//     },
//   });

//   return (
//     <Box>
//       <h1>Advanced Data Table</h1>
//       <MaterialReactTable table={table} />
//       <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         {/* Add your drawer content rendering logic */}
//       </Drawer>
//     </Box>
//   );
// }






'use client';

import React, { useMemo, useState, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  MRT_ColumnFiltersState,
  MRT_SortingState,
  MRT_GroupingState,
  MRT_ColumnOrderState,
  MRT_VisibilityState,
} from 'material-react-table';
import {
  Box,
  Drawer,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
  Typography,
  List,
  ListItem,
  Checkbox,
} from '@mui/material';
import { format, parseISO } from 'date-fns';

interface DataItem {
  name: string;
  category: string;
  subcategory: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<MRT_SortingState>([]); // Initialize sorting state
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10, // Default page size
  });
  const [grouping, setGrouping] = useState<MRT_GroupingState>([]);
  const [columnOrder, setColumnOrder] = useState<MRT_ColumnOrderState>([]);
  const [columnVisibility, setColumnVisibility] = useState<MRT_VisibilityState>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/sample-data.json'); // Fetch from the public directory
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Reset pagination if data is updated
  useEffect(() => {
    if (data.length > 0) {
      setPagination({
        ...pagination,
        pageIndex: 0, // Reset page index when data changes
      });
    }
  }, [data]);

  const columns = useMemo<MRT_ColumnDef<DataItem>[]>(() => [
    {
      accessorKey: 'name',
      header: 'Name',
      enableSorting: true,
      enableColumnFilter: true, // Enable filtering for this column
    },
    {
      accessorKey: 'category',
      header: 'Category',
      enableSorting: true,
      enableColumnFilter: true, // Enable filtering for this column
    },
    {
      accessorKey: 'subcategory',
      header: 'Subcategory',
      enableSorting: true,
      enableColumnFilter: true, // Enable filtering for this column
    },
    {
      accessorKey: 'price',
      header: 'Price',
      Cell: ({ cell }) => `$${cell.getValue<number>().toFixed(2)}`,
      enableSorting: true,
      enableColumnFilter: true, // Enable filtering for this column
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      Cell: ({ cell }) => format(parseISO(cell.getValue<string>()), 'dd-MMM-yyyy HH:mm'),
      enableSorting: true,
      enableColumnFilter: true, // Enable filtering for this column
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      Cell: ({ cell }) => format(parseISO(cell.getValue<string>()), 'dd-MMM-yyyy HH:mm'),
      enableSorting: true,
      enableColumnFilter: true, // Enable filtering for this column
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data,
    enableSorting: true, // Enable sorting
    enableColumnFilters: true, // Enable column filtering
    enableGlobalFilter: true, // Enable global filtering for search
    enablePagination: true,
    enableHiding: true, // Enable hiding/showing columns
    enableGrouping: true, // Enable grouping
    pageCount: Math.ceil(data.length / pagination.pageSize), // Calculate total pages based on page size
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      sorting, // Include sorting state
      grouping,
      columnOrder,
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility, // Handle column visibility changes
    onSortingChange: setSorting, // Handle sorting changes
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters, // Handle column filter changes
    onGlobalFilterChange: setGlobalFilter, // Handle global search changes
    onGroupingChange: setGrouping, // Handle grouping changes
  });

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleGroupingChange = (column: string) => {
    setGrouping((prev) =>
      prev.includes(column) ? prev.filter((g) => g !== column) : [...prev, column]
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0', // Light grey background
        minHeight: '100vh',
        padding: '16px',
      }}
    >
      <h1>Advanced Data Table with Filters, Pagination, Column Hiding, and Grouping</h1>
      <h2>By Sanket Nainesh Savani</h2>

      <Box display="flex" justifyContent="flex-end" mb={2}>
        <FormControl variant="outlined" size="small">
          <InputLabel id="rows-per-page-label">Rows per page</InputLabel>
          {/* <Select
            labelId="rows-per-page-label"
            value={pagination.pageSize}
            onChange={(e) =>
              setPagination({
                ...pagination,
                pageSize: Number(e.target.value),
              })
            }
            label="Rows per page"
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select> */}
        </FormControl>
        <Button onClick={handleDrawerToggle} style={{ color:'red', marginLeft: '20px' }}>
          Toggle Grouping Panel
        </Button>
      </Box>

      <MaterialReactTable
        table={table}
        muiTableContainerProps={{
          sx: {
            backgroundColor: '#ffffff', // White background for table
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow to lift the table
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            padding: '8px',
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: '#e0e0e0', // Slightly darker grey for header cells
            fontWeight: 'bold',
          },
        }}
      />

      {/* Drawer for Grouping Options */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, padding: '16px' }}>
          <Typography variant="h6">Group By</Typography>
          <List>
            {columns.map((col) => (
              <ListItem key={col.accessorKey}>
                <Checkbox
                  checked={grouping.includes(col.accessorKey as string)}
                  onChange={() => handleGroupingChange(col.accessorKey as string)}
                />
                {col.header}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
