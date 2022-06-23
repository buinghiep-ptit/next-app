import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

export interface IPostDetailProps {
	post: any;
}

export default function PostDetailPage({ post }: IPostDetailProps) {
	const router = useRouter();

	if (!post) return null;

	return (
		<div>
			<h1>PostDetail Page</h1>
			<p>{post.title}</p>
			<p>{post.author}</p>
			<p>{post.description}</p>
		</div>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	console.log('\n GET STATIC PATHS');
	const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
	const data = await response.json();

	return {
		paths: data.data.map((post: any) => ({
			params: { postId: post.id },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<IPostDetailProps> = async (
	context: GetStaticPropsContext
) => {
	console.log('\n GET STATIC PROPS', context.params?.postId);
	const postId = context.params?.postId;
	if (!postId) return { notFound: true };

	const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
	const post = await response.json();

	return {
		props: { post },
	};
};
