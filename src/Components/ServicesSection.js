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
                        title={'Graphic Designer'} 
                        paragraph={'Graphic design service as you want and meet the needs of your business to create a better idenity.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={Bass} 
                            title={'Musician of Bassist'} 
                            paragraph={'Bass guitar sound recording service and bass guitar design for your composed music. to make your overall musical composition look even better.'}
                        />
                    </div>
                    <ServiceCard 
                        image={RepairPhone} 
                        title={'iPhone Repair Technician'} 
                        paragraph={'Get your iPhone repaired as well as maintain and clean your phone to make it new and original. without you having to buy a new device.'}
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
