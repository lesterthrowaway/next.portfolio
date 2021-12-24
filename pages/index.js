import { Fragment } from 'react';
import Nav from '../components/nav/Nav';
import AboutMe from '../components/aboutme/AboutMe';
import Works from '../components/works/Works';
import Footer from '../components/footer/Footer';

const IndexPage = () => {
  return (
    <Fragment>
      <Nav />
      <AboutMe />
      <Works />
      <Footer />
    </Fragment>
  )
}

export default IndexPage