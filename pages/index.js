import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>Next Tutorial</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi, my name is Alex, a creative turned into software developer. Go check
					out my <a href='https://www.github.com/team-cake'>Github</a>. Got some time
					to spare? I've made a{' '}
					<a href='https://team-cake.github.io/sudoku/'>Sudoku app</a>, go forth and
					solve!
				</p>
				<p>
					(This is a sample website - you can build a site like this with{' '}
					<a href='https://nextjs.org/learn'>this Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
