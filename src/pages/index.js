import React from 'react'

import Animated from '../components/animated'
import Layout from '../components/layout'
import SEO from '../components/seo'

import rocket from '../assets/rocket-light.json'

const placeholder = `https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`

const CardList = ({ title, children }) => {
  return (
    <div style={{ margin: `100px auto` }}>
      <h2 id={title} style={{ textAlign: `center` }}>{title}</h2>
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        {children}
      </div>
    </div>
  )
}

const Card = ({ src, title, content, tags = [] }) => {
  return (
    <div>
      <img
        src={src}
        style={{
          borderRadius: `50%`,
          width: 250,
          height: 250,
          objectFit: `cover`,
          display: `block`,
          margin: `30px auto`,
        }}
      />
      <h4 style={{ textAlign: `center` }}>{title}</h4>
      <div style={{ display: `flex`, justifyContent: `center` }}>
        {tags.map(tag =>
          <span
            key={tag}
            style={{
              border: `1px solid #ededed`,
              borderRadius: 20,
              padding: `2px 10px`,
              margin: 5,
              fontSize: `small`,
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <div style={{ textAlign: `center`, fontSize: `.85rem` }}>{content}</div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{ display: `flex`, margin: `50px auto` }}>
      <Animated animationData={rocket} style={{ flex: 1.5 }} />
      <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `center`, flex: 1 }}>
        <h1>Hi there!</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sapien vitae nibh lacinia pellentesque. Suspendisse accumsan ex nec lorem rutrum congue.</div>
      </div>
    </div>

    <CardList title={`Highlights`}>
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
        content={`Proin lobortis sapien vitae nibh lacinia pellentesque. Suspendisse accumsan ex nec lorem rutrum congue.`}
      />
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
        content={`Proin lobortis sapien vitae nibh lacinia pellentesque. Suspendisse accumsan ex nec lorem rutrum congue.`}
      />
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
        content={`Proin lobortis sapien vitae nibh lacinia pellentesque. Suspendisse accumsan ex nec lorem rutrum congue.`}
      />
    </CardList>

    <CardList title={`Projects`}>
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
        content={`Proin lobortis sapien vitae nibh lacinia pellentesque. Suspendisse accumsan ex nec lorem rutrum congue.`}
        tags={[`React`, `AWS`]}
      />
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
        content={`Proin lobortis sapien vitae nibh lacinia pellentesque. Suspendisse accumsan ex nec lorem rutrum congue.`}
        tags={[`React Native`, `Google Firebase`]}
      />
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
        content={`Proin lobortis sapien vitae nibh lacinia pellentesque. Suspendisse accumsan ex nec lorem rutrum congue.`}
        tags={[`Vue`]}
      />
    </CardList>

    <CardList title={`Interest`}>
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
      />
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
      />
      <Card
        src={placeholder}
        title={`Lorem ipsum`}
      />
    </CardList>
  </Layout >
)

export default IndexPage
