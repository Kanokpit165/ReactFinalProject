import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import GraphicDesign from '../img/GraphicDesign.svg';
import Bass from '../img/Bass.svg';
import RepairPhone from '../img/RepairPhone.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={GraphicDesign} 
                        title={'Graphic Design'} 
                        paragraph={'Get graphic design at an affordable price but still get quality work that meets your needs to make your business even more advanced.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={Bass} 
                            title={'Bass player and Recorder'} 
                            paragraph={'Bass recording and music making services to make your work more attractive and colorful.'}
                        />
                    </div>
                    <ServiceCard 
                        image={RepairPhone} 
                        title={'iPhone repair Technician'} 
                        paragraph={'Repairing all Apple branded devices including iPhone, iPad, iMac, Macbook etc. at affordable prices and clean like new.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
