import { ILayoutProps } from '@/models/index';
import * as React from 'react';

export interface IEmptyLayoutProps {}

export function EmptyLayout({ children }: ILayoutProps) {
	return <>{children}</>;
}
