import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './About.css'
import { motion } from 'framer-motion'




function About() {

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


  const skillVariant = {
    initial: {
      opacity: 0,
      y: -100
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 0.2,
        type: 'spring',
        stiffness: 120
      }
    }
  }




  return (
    <div id='about'>
      <Container>
        <Row>
          <Col>
            <motion.h1 className='about-heading'
              variants={headingVariant}
              initial='initial'
              whileInView='animate'
            >ABOUT ME <span style={{marginLeft:'5px'}}><i class="fa-solid fa-user"></i></span></motion.h1>
            <motion.div className='about-container rounded-4  text-light'
              variants={containerVariant}
              initial='initial'
              whileInView='animate'

            >
              <div className='image' style={{ display: 'flex', flexDirection: 'row' }}>
                <img src="https://media.glamourmagazine.co.uk/photos/6138e18bba7d9f71f540312c/master/pass/David-Beckham-Modern-Essent.jpg" alt="" width={'100px'} height={'100px'} style={{ borderRadius: '50%', boxShadow: '5px 5px 10px 0px rgba(0, 0, 0, 0.5)' }} />

              </div>
              <p>Hello! I'm Saneejulhassan KB. And I'm from the enchanting lands of Kerala, India. Armed with a bachelor's degree in Civil Engineering from Kerala Technological University. However, my heart was drawn to the captivating world of information technology, fueled by an insatiable curiosity about the inner workings of modern technologies. Driven by this passion, I embarked on a journey of self-directed learning, delving into the intricacies of web development and JavaScript.
                <br />
                <br />
                <br />
                Today, I stand as a proficient MEARN stack developer, having honed my skills through dedicated practice and hands-on experience. My current endeavor finds me serving as an intern at Luminar Technolab, where I am afforded the opportunity to apply my expertise and contribute to innovative projects. Each day presents new challenges and opportunities for growth, and I embrace them eagerly as I continue to evolve and thrive in the dynamic landscape of technology.</p>

              <div className='skill-container'

              >
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/html5-original.svg' alt="" />
                  <div className='skill-name'>HTML</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/css3-original.svg' alt="" />
                  <div className='skill-name'>CSS</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/javascript-original.svg' alt="" />
                  <div className='skill-name'>JavaScript</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/react-original.svg' alt="" />
                  <div className='skill-name'>React JS</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/21_Angular_logo_logos-512.webp' alt="" />
                  <div className='skill-name'>Angular</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/git-original.svg' alt="" />
                  <div className='skill-name'>Git</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/nodejs-original.svg' alt="" />
                  <div className='skill-name'>Node JS</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/mongodb-original.svg' alt="" />
                  <div className='skill-name'>MongoDB</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/bootstrap-original.svg' alt="" />
                  <div className='skill-name'>Bootstrap</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/materialui-original.svg' alt="" />
                  <div className='skill-name'>MaterialUI</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/figma-original.svg' alt="" />
                  <div className='skill-name'>Figma</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/bootstrap-original.svg' alt="" />
                  <div className='skill-name'>TailwindCSS</div>
                </motion.div>
                <motion.div className='skill'
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 1.2 }} // Scale up on hover
                  whileFocus={{ scale: 1.1 }} // Scale up on focus
                  transition={{ duration: 0.1 }} // Smooth transition duration
                >
                  <img src='public/images/vscode-original.svg' alt="" />
                  <div className='skill-name'>VS Code</div>
                </motion.div>

              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About