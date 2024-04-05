import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Contact.css'
import { motion } from 'framer-motion'


function Contact() {



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

        <div id='contact'>
            <Container>
                <Row>
                    <Col>
                        <motion.h1 className='contact-heading'
                            variants={headingVariant}
                            initial='initial'
                            whileInView='animate'


                        >CONTACT ME

                           <span style={{marginLeft:'5px'}}> <i class="fa-solid fa-comment"></i></span></motion.h1>
                        <motion.div className='contact-container rounded-4  text-light'
                            variants={containerVariant}
                            initial='initial'
                            whileInView='animate'

                        >
                            <div className='input-div'>
                                <motion.div className='name'
                                    initial={{ scale: 1 }} // Initial scale
                                    whileHover={{ scale: 1.05 }} // Scale up on hover
                                    whileFocus={{ scale: 1.1 }} // Scale up on focus
                                    transition={{ duration: 0.3 }} // Smooth transition duration
                                ><input type="text" placeholder='Full Name'

                                    /></motion.div>
                                <motion.div className='email'
                                    initial={{ scale: 1 }} // Initial scale
                                    whileHover={{ scale: 1.05 }} // Scale up on hover
                                    whileFocus={{ scale: 1.1 }} // Scale up on focus
                                    transition={{ duration: 0.3 }} // Smooth transition duration
                                ><input type="text" placeholder='Email Address'


                                    /></motion.div>
                            </div>

                            <div className='input-div'>
                                <motion.div className='number'
                                    initial={{ scale: 1 }} // Initial scale
                                    whileHover={{ scale: 1.05 }} // Scale up on hover
                                    whileFocus={{ scale: 1.1 }} // Scale up on focus
                                    transition={{ duration: 0.3 }} // Smooth transition duration
                                ><input type="text" placeholder='Mobile Number'

                                    /></motion.div>
                                <motion.div className='subject'
                                    initial={{ scale: 1 }} // Initial scale
                                    whileHover={{ scale: 1.05 }} // Scale up on hover
                                    whileFocus={{ scale: 1.1 }} // Scale up on focus
                                    transition={{ duration: 0.3 }} // Smooth transition duration
                                ><input type="text" placeholder='Email Subject'
                                    initial={{ scale: 1 }} // Initial scale
                                    whileHover={{ scale: 1.05 }} // Scale up on hover
                                    whileFocus={{ scale: 1.1 }} // Scale up on focus
                                    transition={{ duration: 0.3 }} // Smooth transition duration
                                    /></motion.div>
                            </div>

                            <div className='textarea-div'>
                                <motion.div className='text'
                                    initial={{ scale: 1 }} // Initial scale
                                    whileHover={{ scale: 1.05 }} // Scale up on hover
                                    whileFocus={{ scale: 1.1 }} // Scale up on focus
                                    transition={{ duration: 0.3 }} // Smooth transition duration
                                ><textarea name="Your Comments" id="" placeholder='Leave Your Feedback Here...'

                                ></textarea></motion.div>
                            </div>

                            <div className='textarea-div'>
                                <motion.div
                                    initial={{ scale: 1 }} // Initial scale
                                    whileHover={{ scale: 1.05 }} // Scale up on hover
                                    whileFocus={{ scale: 1.1 }} // Scale up on focus
                                    transition={{ duration: 0.3 }} // Smooth transition duration

                                ><Button variant="primary" style={{ fontWeight: 'bolder' }}>Send Message</Button></motion.div>
                            </div>


                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact