import { useCallback, useState } from 'react';
import { Table as AntTable, Progress, Popconfirm, Input, Button } from 'antd';

import { companies } from '../constants';

import { EditIcon } from 'assets/svg/EditIcon';
import { SearchIcon } from 'assets/svg/SearchIcon';
import { FilterIcon } from 'assets/svg/FilterIcon';
import { DeleteIcon } from 'assets/svg/DeleteIcon';
import { TableSortArrow } from 'assets/svg/TableSortArrow';

import 'styles/components/Table.css';

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

export const Table = () => {
	const [searchValue, setSearchValue] = useState('');
	const [dataSource, setDataSource] = useState(companies);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	const columns = [
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
				<Progress
					percent={usage}
					showInfo={false}
					strokeColor="var(--purple)"
					trailColor="#F2F4F7"
				/>
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

	const handleDelete = useCallback(key => {
		setDataSource(dataSource => dataSource.filter(item => item.key !== key));
	}, []);

	const onSelectChange = useCallback(newSelectedRowKeys => {
		setSelectedRowKeys(newSelectedRowKeys);
	}, []);

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};

	const handleSearchChange = event => {
		const searchValue = event.target.value;
		const pattern = new RegExp(searchValue, 'gi');

		setSearchValue(searchValue);

		const filteredData = dataSource
			.map(record => (record.company.title.match(pattern) ? record : null))
			.filter(Boolean);

		setDataSource(searchValue ? filteredData : companies);
	};

	return (
		<section className="table">
			<div className="table-filters">
				<Button className="filters-button" size="large" icon={<FilterIcon />}>
					More Filters
				</Button>
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
				columns={columns}
				dataSource={dataSource}
				rowSelection={rowSelection}
				pagination={{
					position: ['bottomLeft'],
					pageSize: 7,
					// showSizeChanger: true,
					// showTitle: true,
				}}
				// showSorterTooltip={false}
			/>
		</section>
	);
};
