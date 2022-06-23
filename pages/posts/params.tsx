import { useRouter } from 'next/router';
import React from 'react';

export interface IPostDetailParamsProps {}

export default function PostDetailParamsPage(props: IPostDetailParamsProps) {
	const router = useRouter();

	return (
		<div>
			<h1>PostDetail Params Page</h1>
			<p>Query: {JSON.stringify(router.query)}</p>
		</div>
	);
}
