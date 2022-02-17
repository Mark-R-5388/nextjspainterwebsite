import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Header />
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        cupiditate eum illum consequuntur officia distinctio.
      </p>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <Footer />
    </>
  );
};

export default Contact;
