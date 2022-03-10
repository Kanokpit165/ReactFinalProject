import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2018-present'} 
                        title={'Established an Graphic Designer service'}
                        subTitle={'Art Design'}
                        text={'Graphic design service by accepting briefs from customers and hitting the customers problems in order to make the work come out to meet the customers needs as much as possible.'} 
                    />
                    <ResumeItem 
                        year={'2020-2021'} 
                        title={'Human Resource and allocate personnel'}
                        subTitle={'S.N.PROGRESS CO.,LTD.'}
                        text={'Experienced in recruiting employees into the company and selecting resources of personnel to improve the quality of work Ready to organize work training for employees to learn.'} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'Graphic Designer Assistant'}
                        subTitle={'PRODX CREATIVE CO., LTD.'}
                        text={'Assigned as a graphic design assistant which is to receive work from the supervisor and bring it to improve to make the design work more effective and also receive training in graphics from the supervisor.'} 
                    />
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Head of Graphic Designer'}
                        subTitle={'THE BRICKET COMPANY LIMITED'}
                        text={'In charge of controlling and designing graphic design work for the company. in analyzing the suitability of the job for the company and responding to the customer base of the company.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2006 - 2017'} 
                        title={'Graduated from Elementary school - High school'}
                        subTitle={'Bangkok Christian College'}
                        text={'Graduated from the Department of Fundamentals according to the Thai Curriculum By receiving training and teaching from teachers until they develop themselves to the level.'} 
                    />
                    <ResumeItem 
                        year={'2020-2021'} 
                        title={'Graphic Design Training'}
                        subTitle={'PROdx Creative Academy'}
                        text={'Have been trained and practiced in graphic design practice as well as gaining hands-on experience. to gain more experience working in this field'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'graduated with a bachelor degree Faculty of Information Technology Multimedia Technology'}
                        subTitle={'Thai-Nichi Institute of Technology'}
                        text={'Graduated with a bachelor degree from the Thai-Nichi Institute of Technology, Faculty of Information Technology Multimedia Technology in learning and studying all aspects of technology'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
