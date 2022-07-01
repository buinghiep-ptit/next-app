import { ILayoutProps } from '@/models/index';
import Link from 'next/link';
import React, { useEffect } from 'react';

export interface IMainLayoutProps {}

export function MainLayout({ children }: ILayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounting');

		return () => console.log('MainLayout un-mounting');
	}, []);
	return (
		<div>
			<h1>Main Layout</h1>
			<Link href={'/'}>
				<a>Home</a>
			</Link>
			<Link href={'/about'}>
				<a>About</a>
			</Link>
			<div>{children}</div>
		</div>
	);
}
