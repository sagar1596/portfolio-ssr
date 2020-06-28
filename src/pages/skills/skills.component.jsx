import React from 'react';
import './skills.styles.css';
import Head from '../../components/head/head.component';
import Circle from '../../components/circle/circle.component';
import { SKILL_DATA } from './skills.data';
import { SkillBars } from 'react-skills';
import { Fade } from 'react-reveal';

const colors = {
    bar: '#948a8a',
    title: {
      text: '#fff',
      fontWeight : 300,
      fontSize: '1.3em',
      background: '#000'
    }
  }

class SkillsPage extends React.Component {

    render() {
        return (
            <div id="skills" className="skills page">
                <Head
                    title="Skills - Sagar Bhat"
                    description="Skills - This is a Skill listing page for Sagar Bhat." />

                <Fade bottom>
                    <h2>Skills</h2>
                </Fade>
        

                <div className="skill-bar">
                    {
                        SKILL_DATA.map((skill) => (
                            <Fade left cascade key={skill.type}>
                                <div className="skill" >
                                    <span className="skill-name">{skill.type}</span>
                                    <Circle percent={skill.level} />
                                </div>
                            </Fade>
                        ))
                    }
                {/* <SkillBars skills={SKILL_DATA} duration={4}/> */}
                {/* <Circle percent={90} /> */}
                </div>
            </div>
        )
    }
}

export default SkillsPage;