import { StudentDetail } from '@/component/swr'
import React, { useState } from 'react'

export default function SWRPage() {
	const [detailList, setDetailList] = useState([1, 1, 1])

	const handleAddClick = () => {
		setDetailList((prevList) => [...prevList, 1])
	}
	return (
		<div>
			<h1>SWR Playground</h1>
			<button onClick={handleAddClick}>Add detail</button>
			<ul>
				{detailList.map((_, index) => (
					<li key={index}>
						<StudentDetail studentId={'sktwi1cgkkuif36f3'} />
					</li>
				))}
			</ul>
		</div>
	)
}