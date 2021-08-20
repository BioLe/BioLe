import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton, ButtonDefault} from "../common";
import { GitHub, Linkedin, Mail } from 'react-feather'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile2.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
                <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
                <SubTitle>Software Engineer</SubTitle>
                <a href="https://github.com/BioLe" style={{marginLeft:'40%'}}><GitHub /> </a>
                <a href="https://www.linkedin.com/in/leonardmelo/" style={{marginLeft:'10%'}}><Linkedin /> </a>
            </div> 
            <div>
                <Title> Hello, I’m Leonardo </Title>
                <Text> I'm a software engineer from <b className="text-primary lined-link">Portugal</b> living in Lisbon, close to completing 
                    my masters in computer science at <a className="text-secondary lined-link" href="https://isel.pt/en/">ISEL</a>.
                </Text>
                <Text> I have a passion for <b className="text-primary lined-link">Backend Development</b>, with a special interest in dashboards and geographical data.</Text>
                <Text> I strive to always be learning and keeping up with the latest technologies, even if it seems an impossible task sometimes.
                </Text>
                <Text>Check what I have been doing in the <a href="/works">Projects</a> section!</Text>
                {/* <ResumeButton href="CV_Leonardo_Melo.pdf" target="_blank">Download CV</ResumeButton> */}
                <div >
                    <ButtonDefault href={`mailto:leonardo.melo@outlook.pt`} style={{left:'25%'}}> Lets chat </ButtonDefault>
                </div>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
