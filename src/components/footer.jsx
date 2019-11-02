import React from 'react';
import {Typography} from 'antd';


const {Title} = Typography;
const Footer = () => (
    <>
        <div className='container' style={{backgroundColor: '#eee', color: '#000'}}>
            <ul style={{listStyleType: 'none'}}>
                <li>
                    Careers with us
                </li>
                <li>
                    Help
                </li>
                <li>
                    Terms of use
                </li>
                <li>
                    Applications Today
                </li>
                <li>
                    Privacy policy
                </li>
                <li>
                    Contact Us
                </li>
            </ul>
        </div>
        <div style={{backgroundColor: '#000', color: '#EEE', textAlign: 'center'}}>
            &copy; Just Clean Rojgar, 2019
        </div>
    </>
);

export default Footer;
