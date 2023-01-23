import { useCallback, useState, useRef } from 'react';
import { Table as AntTable, Progress, Popconfirm, Input, Button } from 'antd';

import { EditIcon } from 'assets/svg/EditIcon';
import { SearchIcon } from 'assets/svg/SearchIcon';
import { FilterIcon } from 'assets/svg/FilterIcon';
import { DeleteIcon } from 'assets/svg/DeleteIcon';
import { TableSortArrow } from 'assets/svg/TableSortArrow';

import 'styles/components/Table.css';

import { companies } from '../constants';

const alphabeticalSorter = (a, b) => a.company.title.localeCompare(b.company.title);
const getCompanyTitle = ({ sortColumns }) => {
	const sortedColumn = sortColumns?.find(({ column }) => column.dataIndex === 'company');

	return (
		<div className="company-column-title">
			Company
			{sortedColumn && (
				<TableSortArrow className={sortedColumn.order === 'ascend' ? 'up' : 'down'} />
			)}
		</div>
	);
};

const getColumns = ({ handleDelete }) => [
	{
		title: getCompanyTitle,
		dataIndex: 'company',
		sorter: alphabeticalSorter,
		render: ({ title, src, url }) => (
			<div className="company-cell">
				<img src={src} alt={`${title} logo`} />
				<p>
					{title}
					<span>{url}</span>
				</p>
			</div>
		),
		sortDirections: ['descend', 'ascend', 'descend'],
	},
	{
		title: 'License use',
		dataIndex: 'usage',
		render: usage => (
			<Progress percent={usage} showInfo={false} strokeColor="var(--purple)" trailColor="#F2F4F7" />
		),
	},
	{
		title: 'Status',
		dataIndex: 'status',
		render: status => (
			<p className={status === 'Customer' ? 'greenStatus' : 'greyStatus'}>{status}</p>
		),
	},
	{
		title: 'About',
		dataIndex: 'product',
		render: ({ title, about }) => (
			<p className="about">
				<strong>{title}</strong> <br /> <em>{about}</em>
			</p>
		),
	},
	{
		key: 'actions',
		render: ({ key }) => (
			<Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(key)}>
				<DeleteIcon style={{ cursor: 'pointer' }} />
			</Popconfirm>
		),
	},
	{
		key: 'edits',
		render: () => <EditIcon style={{ cursor: 'pointer' }} />,
	},
];

export const Table = () => {
	const [searchValue, setSearchValue] = useState('');
	const [dataSource, setDataSource] = useState(companies);
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

	const toggleDropdown = useCallback(() => {
		setIsDropdownMenuOpen(isDropdownMenuOpen => !isDropdownMenuOpen);
	}, []);

	const handleDelete = useCallback(key => {
		setDataSource(dataSource => dataSource.filter(record => record.key !== key));
	}, []);

	const onSelectChange = useCallback(newSelectedRowKeys => {
		setSelectedRowKeys(newSelectedRowKeys);
	}, []);

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	const handleSearchChange = useCallback(
		event => {
			const searchValue = event.target.value;
			const pattern = new RegExp(searchValue, 'gi');

			setSearchValue(searchValue);

			const filteredData = dataSource
				.map(record => (record.company.title.match(pattern) ? record : null))
				.filter(Boolean);

			setDataSource(searchValue ? filteredData : companies);
		},
		[dataSource]
	);

	const handleFilter = event => {
		const filterValue = event.target.value;
		const filterChecked = event.target.checked;
		if (selectedFilters.length === 1 && !filterChecked) {
			setSelectedFilters([]);
			setDataSource(companies);
		} else {
			setSelectedFilters(
				filterChecked
					? [...new Set([...selectedFilters, filterValue])]
					: selectedFilters.filter(selectedFilter => selectedFilter === filterValue)
			);
			const filteredData = dataSource.filter(record => record.status === filterValue);
			setDataSource(filterChecked ? filteredData : companies);
		}
	};

	const handleRemoveSelectedFilters = event => {
		setSelectedFilters([]);
		setIsDropdownMenuOpen(false);
		setDataSource(companies);
	};

	return (
		<section className="table">
			<div className="table-filters">
				{selectedFilters.length ? (
					<div className="filter-badge">
						<span>{selectedFilters.join(', ')}</span>
						<button onClick={handleRemoveSelectedFilters} title="Remove selected filters">
							<svg width={20} height={20} viewBox="0 0 20 20" fill="none">
								<path
									d="M15 5 5 15M5 5l10 10"
									stroke="#6941C6"
									strokeWidth={1.67}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
				) : null}
				<div className="filter-dropdown-wrapper">
					<Button
						className="filters-button"
						size="large"
						icon={<FilterIcon />}
						onClick={toggleDropdown}
					>
						More Filters
					</Button>
					{isDropdownMenuOpen && (
						<div className="dropdown-filter">
							<div className="input-wrapper">
								<div className="customer-input">
									<label>
										<input
											type="checkbox"
											id="customer"
											name="customer"
											onChange={handleFilter}
											value="Customer"
										/>
										<span>Customer</span>
									</label>
								</div>
								<div className="churned-input">
									<label>
										<input
											type="checkbox"
											id="churned"
											name="churned"
											onChange={handleFilter}
											value="Churned"
										/>
										<span>Churned</span>
									</label>
								</div>
							</div>
						</div>
					)}
				</div>
				<Input
					className="search-input"
					type="search"
					size="large"
					placeholder="Search"
					value={searchValue}
					onChange={handleSearchChange}
					prefix={<SearchIcon strokeColor="#667085" />}
				/>
			</div>
			<AntTable
				size="small"
				columns={getColumns({ handleDelete })}
				dataSource={dataSource}
				rowSelection={rowSelection}
				pagination={{
					position: ['bottomLeft'],
					pageSize: 7,
				}}
				// showSorterTooltip={false}
			/>
		</section>
	);
};
