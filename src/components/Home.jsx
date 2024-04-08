
import './Home.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



function Home() {

  const headingVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.2
      }
    }
  }


  return (
    <div id='home'>
      <Container  >
        <Row>
          <Col lg={7} className='title'>
            <motion.h1
              variants={headingVariant}
              initial='initial'
              whileInView='animate'

            >Crafting Digital Experiences</motion.h1>
            <motion.p
              variants={headingVariant}
              initial='initial'
              whileInView='animate'
            >"Building innovative solutions with the power of <br /> full-stack development"</motion.p>
            <motion.div className='account-details '
              variants={headingVariant}
              initial='initial'
              whileInView='animate'
            >
              <Button variant="primary">Download CV</Button>
              <Link to='https://www.linkedin.com/in/saneejulhassan-kb-aa5375209/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BbzbQarB1SOC8cQHOMOmyNQ%3D%3D'><i class="fa-brands fa-linkedin" style={{ fontSize: '30px' }}></i></Link>
              <Link to="https://github.com/Saneejulhassan-KB"><i class="fa-brands fa-github" style={{ fontSize: '30px' }}></i></Link>
            </motion.div>
          </Col>

          <Col lg={5} className='profile'>
            <motion.div className='profile-outerbox'


              animate={{ y: [-10, 10, -10] }} // Define the y-axis animation
              transition={{ repeat: Infinity, duration: 1.5 }} // Repeat the animation infinitely
            >
              <img src="public/images/WhatsApp Image 2024-04-08 at 10.46.33 AM.jpeg" alt="" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home