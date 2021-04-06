import React from 'react'
import Computer from "../ws_computation/computer"
import { Image, Container } from 'semantic-ui-react'
import WebsiteBody from '../ws_computation/body'

const ImageExampleImage = () => (
  <Image src='./assets/images/astolfo.jpg' size="tiny" />
)

function WebsiteTop() {
  return (
    <div class="ui text container">
      <h1 class="ui inverted header">
        Welcome to Autumn's Playground
      </h1>
      <h2>a place to explore and have fun O.O</h2>
    </div>
  );
}

function WebsiteLogo() {
  return (
  <Container color="black">
    <div class="ui center alligned padded grid">
      <div class="columns">
      {ImageExampleImage()}       
      </div>
      <div class="columns">
        hello!
      </div>
    </div>
  </Container>
  );
}

function WebsiteMetaStructure() {
  const site = (
    <Container id="yes">
        <div id="what">
          {WebsiteTop()}
          {WebsiteLogo()}
          {WebsiteBody()}
        </div>
      <body>
        <Computer />
      </body>
    </Container>
    )
  return (
    site
  );
}
export default WebsiteMetaStructure
