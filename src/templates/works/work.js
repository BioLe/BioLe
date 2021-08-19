import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Calendar } from 'react-feather'
import styled from 'styled-components';
import {Intro, Title, ArticlePost, SmallText, ArticleBody} from '../../components/styled/posts'
import {Tag} from "../../components/common"

import {ContainerLayout} from '../../components/common'
import variables from '../../data/variables';

export const TagStack = styled.a`
  color: #a9aaab;
  text-transform: uppercase;
  letter-spacing: .05em;
  font-size: .8em;
  background: rgb(183 181 181 / 12%);
  border-radius: .15rem;
  padding: .5rem .2rem;
  margin-right: .5rem;
  border: 1px solid rgb(0 0 0 / 2%);
  display: inline-block;
  margin-bottom: .5rem;
  &.active {
    background: ${variables.primary};
    color: ${variables.inverse};
    font-family: "GT-Walsheim-Pro-Bold";
  }
`

const portfolioWork = ({data, pageContext, location}) => {
  const work = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
      
    <Layout location={location} title={siteTitle}>
      <SEO
        title={work.frontmatter.title}
        description={work.frontmatter.description || work.excerpt}
      />
      <Intro >
        
        <ContainerLayout>
          <div>
            <ArticlePost>
              <header>
                <Title>
                  {work.frontmatter.title}
                </Title>
                <SmallText> 
                  <Calendar className="align-middle text-primary" width="18" height="18" /> 
                  <span className="align-middle"> Date published : {work.frontmatter.date} </span>
                </SmallText>
              </header>

              <ArticleBody>
                  <h2>Stack</h2>
                {work.frontmatter.stack.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
              </ArticleBody>
              
              <ArticleBody dangerouslySetInnerHTML={{ __html: work.html }}/>
            </ArticlePost>
            
          </div>
        </ContainerLayout>
        
      </Intro>
      
    </Layout>
  )
}

export default portfolioWork;

export const data = graphql`
  query portfolioWorkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      rawMarkdownBody
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description,
        time,
        stack
      }
    }
  }
`