import React from 'react';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	console.log('render header');
	return <div className="header">Header</div>;
}
