import Link from 'next/link';

const About = () => {
	return (
		<>
			<h1>About Page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
				cupiditate eum illum consequuntur officia distinctio.
			</p>
			<Link href='/'>
				<a>Home Page</a>
			</Link>
		</>
	);
};

export default About;
