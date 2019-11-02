import React, {useState} from 'react';
import {Typography} from 'antd';

const {Text} = Typography;
const AboutUs = () => {
    const [more, setMore] = useState(false);

    return (
        <div className='container' style={{textAlign: 'justify'}}>
            <Text>
                Justcleanrojgar.in was launched on the 70th Republic Day of India to support employment generation
                across
                the
                country. JustCleanRojgar aims to provide employment opportunities to job-seekers across India and
                overseas.
                Our
                mission is to provide employment to 1 lac people by 2022.
                {
                    more ? (
                        <>
                            <br/>
                            We already have a strong base in placements with Training Partners of NSDC under PMKVY, PMKK
                            and DDUGKY
                            projects
                            in over 20 states in India. Till date, we have participated in over 100 Rojgar Melas and
                            have hired 15,000+
                            skilled and unskilled persons under these schemes. We have also organized our own
                            independent Rojgar Melas
                            with
                            the support of State Governments to provide employment.
                            <a href="#!" onClick={(e) => {
                                e.preventDefault();
                                setMore(false)
                            }}> Read Less..</a>
                        </>
                    ) : (
                        <a href="#!" onClick={(e) => {
                            e.preventDefault();
                            setMore(true)
                        }}> Read More..</a>
                    )
                }

            </Text>
        </div>
    );
};

export default AboutUs;
