import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, CoverPhoto, Footer, Head } from '@dailybruin/lux'
import {
  FancyCard,
  FancyIntroCard,
  DropdownCarousel,
} from '../components/fancycard'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <DropdownCarousel
      intro={'STATISTICS'}
      introCaption={
        'A tiny blurb explaining the survey and what this panel is probably something explaining about how you can scroll/view the rest of this panel wheeeee'
      }
      sections={[
        {
          title: 'TEST TEST TEST 111',
          content: <div>TEST TEST TEST 111</div>,
        },
        {
          title: 'TEST TEST TEST 222',
          content: (
            <div>
              TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST
              TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST
              TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST
              222TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST
              TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST
              TEST TEST 222TEST TEST TEST 222
            </div>
          ),
        },
        {
          title: 'TEST TEST TEST 333',
          content: <div>TEST TEST TEST 333</div>,
          topColor: '#F9D6BC',
          bottomColor: '#F98078',
        },
      ]}
    />

    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition="start"
      yPosition="center"
    />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <FancyCard
      title={'TEST TEST TEST TEST'}
      gradientTopColor={'#E7BEFA'}
      gradientBottomColor={'#8AACF7'}
      isSelected={true}
    />
    <FancyIntroCard
      title={'STATISTICS'}
      caption={
        'A tiny blurb explaining the survey and what this panel is probably something explaining about how you can scroll/view the rest of this panel wheeeee'
      }
      gradientTopColor={'#E7BEFA'}
      gradientBottomColor={'#8AACF7'}
    />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
