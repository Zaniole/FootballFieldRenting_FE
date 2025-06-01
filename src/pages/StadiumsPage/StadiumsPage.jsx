import React, { useEffect, useState } from 'react'
import CardComponent from '../../components/CardComponent/CardComponent';
import { Typography, Flex } from 'antd';
import './style.css'
import { getAllField } from '../../services/FieldService';
const { Title } = Typography;

const StadiumsPage = () => {
	const [fieldList, setFieldList] = useState([]);

	useEffect(() =>{
		async function getField() {
			const field = await getAllField();
			// console.log(field);
			setFieldList(field.data);	
		}
		getField();
	}, [])

	return (
		<div className='container'>
			<Title level={2}>Danh sách sân bóng</Title>
			<Flex wrap gap='large' justify='space-around'>
				{fieldList.map((field, index) => (
					<CardComponent key={index} stadiumData={field}></CardComponent>
				))}
			</Flex>
		</div>
	)
}

export default StadiumsPage