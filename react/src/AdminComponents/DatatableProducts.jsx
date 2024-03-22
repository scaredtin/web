import React, { useState, useCallback, useEffect } from 'react';
import {Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Typography,
  Input,
} from "@material-tailwind/react";

import DataTable from 'react-data-table-component';

const columns = [
    {
		width: '100px',
		name: 'id',
		selector: row => row.id,sortable: true,
	},
    {
		name: 'image',
        cell: (row) => (
        <img
        src={row.image} // Assuming 'image' is a property in your data object
        alt={`Image of ${row.name}`} // Provide meaningful alt text
        className='w-20'
        onError={(event) => {
            event.target.src = 'https://via.placeholder.com/150'; // Default image on error
        }}
        />
    ),
  selector: row => row.image,
  sortable: true,
	},
	{
		
		name: 'name',
		selector: row => row.name,sortable: true,
	},
	{
		name: 'email',
		selector: row => row.email,sortable: true,
	},
    {
		name: 'address',
		selector: row => row.address,sortable: true,
	},
	{
		name: 'status',
		selector: row => row.status,sortable: true,
		cell: row =>
			  <div row={row}>	
                       {row.status == false && (
                        <Tooltip content="Tài khoản đang mở">
                            <IconButton variant="text">
                            {/* <LockOpenIcon className="w-4 h-4 text-green-500" /> */}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
							<path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
							</svg>

                            </IconButton>
                        </Tooltip>
                        )}
                        {row.status == true && (
                        <Tooltip content="Tài khoản đang khóa">
                            <IconButton variant="text">
                            {/* <LockClosedIcon className="w-4 h-4 text-red-500" /> */}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
								<path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
							</svg>

                            </IconButton>
                        </Tooltip>
                        )}
			  </div>
	},
    {
		// allowOverflow: true,
		// button: true,
		width: '100px',
		cell: row =>
		<Menu row={row}>
		<MenuHandler>
			<IconButton variant="text">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
				</svg>
			</IconButton>
		</MenuHandler>
		<MenuList className="flex flex-col gap-2">
			{/* edit */}
			<MenuItem className="flex items-center gap-2 hover:border-blue-700 hover:border">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
				<path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
			</svg>
			<div className="flex flex-col">
				<Typography variant="lead" color="gray" className="font-semibold ">
				Edit
				</Typography>
			</div>
			</MenuItem>
			{/* delete */}
			<MenuItem className="flex items-center gap-2 hover:border-red-500 hover:border">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
					<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
				</svg>
			<div className="flex flex-col">
				<Typography variant="lead" color="gray" className="font-semibold">
				Delete
				</Typography>
			</div>
			</MenuItem>

		</MenuList>
		</Menu>,
		
	},
];
const fakeUsers = [
    {
	id: 0,
	name: "Duong Nghia Hiep1",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "1",
	image: "https://github.dnh.id.vn/assets/logo-removebg-preview-B2g_HCJ7.png",
	},
     {
	id: 1,
	name: "Duong Nghia Hiep2",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "1",
	image: "https://github.dnh.id.vn/assets/logo-removebg-preview-B2g_HCJ7.png",
	},
     {
	id: 2,
	name: "Duong Nghia Hiep3",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "0",
	image: "https://github.dnh.id.vn/assets/logo-removebg-preview-B2g_HCJ7.png",
	},
    {
	id: 3,
	name: "Duong Nghia Hiep4",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "0",
	image: "",
	},
    {
	id: 4,
	name: "Duong Nghia Hiep3",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "0",
	image: "https://github.dnh.id.vn/assets/logo-removebg-preview-B2g_HCJ7.png",
	},
    {
	id: 5,
	name: "Duong Nghia Hiep4",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "1",
	image: "",
	},
    {
	id: 6,
	name: "Duong Nghia Hiep3",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "1",
	image: "https://github.dnh.id.vn/assets/logo-removebg-preview-B2g_HCJ7.png",
	},
    {
	id: 7,
	name: "Duong Nghia Hiep4",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "1",
	image: "",
	},
    {
	id: 8,
	name: "Duong Nghia Hiep3",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "0",
	image: "https://github.dnh.id.vn/assets/logo-removebg-preview-B2g_HCJ7.png",
	},
    {
	id: 9,
	name: "Duong Nghia Hiep4",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "0",
	image: "",
	},
    {
	id: 10,
	name: "Duong Nghia Hiep3",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "0",
	image: "https://github.dnh.id.vn/assets/logo-removebg-preview-B2g_HCJ7.png",
	},
    {
	id: 11,
	name: "Duong Nghia Hiep4",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "0",
	image: "",
	},
    {
	id: 12,
	name: "Duong Nghia Hiep3",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "1",
	image: "https://github.dnh.id.vn/assets/logo-removebg-preview-B2g_HCJ7.png",
	},
    {
	id: 13,
	name: "Duong Nghia Hiep4",
	email: "scaredtin@gmail.com",
	address: "123 quoc lo 1 aaaaaa",
	status: "0",
	image: "",
	},

];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<div className='flex py-2 '>
        <div className="w-full md:w-72">
            <Input
              label="Tìm kiếm"
              placeholder="Tìm kiếm theo tên"

              value={filterText}
              onChange={onFilter}
              icon={
			//<MagnifyingGlassIcon className="w-5 h-5" />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
				<path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
			</svg>}
            />
        </div>


        <button type="button" onClick={onClear} className='px-2 border border-gray-500 rounded-lg boder-2'>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
        </button>

	</div>
);
export default function DatatableProducts() {
	const [selectedRows, setSelectedRows] = useState([]);
	
	useEffect(() => {
		
		console.log('state', selectedRows);
	}, [selectedRows]);
	
	const handleButtonClick = () => {
		
		console.log('clicked');
	};
	
	const handleChange = useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

	
	
	//
	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = fakeUsers.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);
  
const actions = (
	<Button className='p-2 bg-green-400'>
		<div className='flex items-center'>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
			</svg>
			<p>THÊM MỚI</p>				
		</div>
		
	</Button>
);
const contextActions = deleteHandler => (
	<IconButton className='text-red-500 bg-transparent' onClick={deleteHandler}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
        </svg>
	</IconButton>
);
	const [toggleCleared, setToggleCleared] = React.useState(false);
	// const [data, setData] = React.useState("");
	
	const deleteAll = () => {
		const rows = selectedRows.map(r => r.name);
		
		if (window.confirm(`Are you sure you want to delete:\r ${rows}?`)) {
			setToggleCleared(!toggleCleared);
			setData(differenceBy(data, selectedRows, 'name'));
		}
	};


  return (
    	<DataTable
			
			title="Contact List"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			persistTableHead
			selectableRowsHighlight
			actions={actions} // button add
			contextActions={contextActions(deleteAll)}		
			
		/>

  );
}

