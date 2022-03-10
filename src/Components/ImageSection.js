import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Art Kanokpit</span></h4>
                <p className="paragraph">
                “ My life in graphics begins with seeing many things in the world as beautiful and expressive art, so I like work that requires imagination to see and think of meaning.  So I'm a person who likes to do everything. Always like to find something interesting to wear, such as Crative in art, including the story of the creation of various technologies in the modern era such as Elon Mask and Steve Job, which  I've always held to his ideas and quotes to never stop thinking, never stop doing it, and to draw inspiration from everything that surrounds me to this day.”
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Born</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Kanokpit Rattanasiripirom</p>
                        <p>: 1999</p>
                        <p>: Thai </p>
                        <p>: Thai, English </p>
                        <p>: Bangkok, Thailand</p>
                        <p>: Employee, Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
