import React from 'react'
import './Project.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'





function Project() {

  const headingVariant = {
    initial: {
      opacity: 0,
      y: -70
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.1
      }
    }
  }

  const containerVariant = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 0.2
      }
    }
  }





  return (
    <div id='project'>


      <Container >
        <motion.h1 className='project-heading'
          variants={headingVariant}
          initial='initial'
          whileInView='animate'


        > PROJECTS <span style={{marginLeft:'5px'}}><i class="fa-solid fa-briefcase"></i></span></motion.h1>

        <div className='project-row'>
          <Row style={{ marginLeft: '110px', width: '1030px', marginTop: '30px' }}>
            <Col >
              <motion.div
                className='cardRowDiv'
                variants={containerVariant}
                initial='initial'
                whileInView='animate'

              >
                <Card id='project-card' className='card1'>
                  <div className='card-wrapper'>
                    <Card.Img variant="top" src="/images/card/travel freak.png" className='card-image p-3' />
                  </div>
                  <Card.Body>
                    <Card.Title>Travel-Freak</Card.Title>
                    <Card.Text>
                      Embark on Your Next Adventure with Us!
                    </Card.Text>
                    <Link to='https://saneejulhassan-kb.github.io/Travel-freak-website/'><Button variant="primary" >Demo</Button></Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col >
              <motion.div
                className='cardRowDiv'
                variants={containerVariant}
                initial='initial'
                whileInView='animate'

              >
                <Card id='project-card' className='card2'>
                  <Card.Img variant="top" src="/images/card/bmi calculator.png" className='card-image p-3' />
                  <Card.Body>
                    <Card.Title>BMI-Calculator</Card.Title>
                    <Card.Text>
                      Discover Your Health Journey: Calculate Your BMI Today!
                    </Card.Text>
                    <Link to='https://saneejulhassan-kb.github.io/BMI-calculator/'><Button variant="primary" >Demo</Button></Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col>
              <motion.div
                className='cardRowDiv'
                variants={containerVariant}
                initial='initial'
                whileInView='animate'

              >
                <Card id='project-card' className='card3' >
                  <Card.Img variant="top" src="/images/card/expense pro.png" className='card-image p-3' />
                  <Card.Body>
                    <Card.Title>Expense Pro</Card.Title>
                    <Card.Text>
                      Manage Your Finances Effortlessly with Expense Pro
                    </Card.Text>
                    <Link to='https://saneejulhassan-kb.github.io/expense-pro/'><Button variant="primary" >Demo</Button></Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

          </Row>
        </div>

        <div className='project-row'>

          <Row style={{ marginLeft: '110px', width: '1030px', marginTop: '35px' }}>


            <Col >
              <motion.div
                className='cardRowDiv'
                variants={containerVariant}
                initial='initial'
                whileInView='animate'

              >
                <Card id='project-card'  className='card4' >
                  <Card.Img variant="top" src="/images/card/feune restaurant.png" className='card-image p-3' />
                  <Card.Body>
                    <Card.Title>Feune</Card.Title>
                    <Card.Text>
                      Savor Nature's Bounty: Fresh, Flavorful Fare at Feune Restaurant
                    </Card.Text>
                    <Link to='https://saneejulhassan-kb.github.io/Feune-restaurant-website/'><Button variant="primary" >Demo</Button></Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col >
              <motion.div
                className='cardRowDiv'
                variants={containerVariant}
                initial='initial'
                whileInView='animate'

              >
                <Card id='project-card' className='card5'>
                  <Card.Img variant="top" src="/images/card/head phone.png" className='card-image p-3' />
                  <Card.Body>
                    <Card.Title>Headphone-Website</Card.Title>
                    <Card.Text>
                      Immerse Yourself in Sound: Explore Our Headphone Collection
                    </Card.Text>
                    <Link to='https://saneejulhassan-kb.github.io/Headphone-website/'><Button variant="primary" >Demo</Button></Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col>
              <motion.div
                className='cardRowDiv'
                variants={containerVariant}
                initial='initial'
                whileInView='animate'

              >
                <Card id='project-card'className='card6' >
                  <Card.Img variant="top" src="/images/card/dreamy wedding.png" className='card-image p-3' />
                  <Card.Body>
                    <Card.Title>Dreamy</Card.Title>
                    <Card.Text>
                      Where Dreams Begin: Your Perfect Wedding Awaits
                    </Card.Text>
                    <Link to='https://saneejulhassan-kb.github.io/Dreamy-wedding-events-website/'><Button variant="primary" >Demo</Button></Link>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

          </Row>

        </div>

      </Container>
    </div>
  )
}

export default Project