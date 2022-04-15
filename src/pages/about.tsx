import { Container } from '@components/Container'
import { Layout } from '@components/Layout'
import { Meta } from '@components/Meta'
import React from 'react'

const About = () => (
  <Layout meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Container>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </Container>
  </Layout>
)

export default About
