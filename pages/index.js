import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section>
		</Layout>
	);
}
