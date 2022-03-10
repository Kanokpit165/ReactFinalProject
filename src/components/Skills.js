import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Software Skills'} span={'my software skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Adobe Illustrator'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'Adobe Photoshop'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Adobe Premire Pro'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Adobe After Effect'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'Autodesk Maya'}
                            width={'50%'}
                            text={'55%'}
                        />
                        <ProgressBar 
                            title={'Apple Logic Pro'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Apple Final Cut Pro'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'Python Programing'}
                            width={'55%'}
                            text={'50%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
