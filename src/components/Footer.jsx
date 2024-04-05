import React from 'react'
import './Footer.css'
import { MDBFooter } from 'mdb-react-ui-kit'


function Footer() {
    return (
        <div >
            <MDBFooter  className='text-center text-lg-left'>
                <div className='text-center p-3' style={{color:' #a8a8a8'}}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a className='' href='https://mdbootstrap.com/' style={{color:' #a8a8a8'}}>
                        PortFolio.com
                    </a>
                </div>
            </MDBFooter>

        </div>
    )
}

export default Footer