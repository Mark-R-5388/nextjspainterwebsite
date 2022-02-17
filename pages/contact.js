import Header from '../components/Header';
import Footer from '../components/Footer';

import Link from 'next/link';

const Contact = () => {
	return (
		<>
			<Header />
			<h1>Contact Page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
				cupiditate eum illum consequuntur officia distinctio.
			</p>
			<Link href='/'>
				<a>Home Page</a>
			</Link>
			<Footer />
		</>
	);
};

export default Contact;
