
import './Header.css'
import { motion } from 'framer-motion'


function Header() {



    return (

        <>
            <div className="navbar">
                <motion.ul
                    initial={{ opacity: 0, y: -250 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 2, delay: 0.2, type: 'spring', stiffness: 120 }}

                >
                    <li><img src="public/images/WhatsApp Image 2024-04-08 at 10.46.33 AM.jpeg" alt="" width={'50px'} height={'50px'} style={{ borderRadius: '50%' }} /></li>
                    <hr style={{ width: '100%' }} />
                    <a href="#home">
                        <motion.li
                            whileTap={{ scale: 0.5 }}
                        ><i class="fa-solid fa-house"></i></motion.li></a>
                    <a href="#about">
                        <motion.li
                            whileTap={{ scale: 0.5 }}
                        ><i class="fa-solid fa-user"></i></motion.li>
                        <motion.li
                            whileTap={{ scale: 0.5 }}
                        ><i class="fa-solid fa-graduation-cap"></i></motion.li></a>
                    <a href="#project"><motion.li
                        whileTap={{ scale: 0.5 }}
                    ><i class="fa-solid fa-briefcase"></i></motion.li></a>
                    <a href="#contact"><motion.li
                        whileTap={{ scale: 0.5 }}
                    ><i class="fa-solid fa-comment"></i></motion.li></a>

                </motion.ul>
            </div>
        </>
    )
}

export default Header