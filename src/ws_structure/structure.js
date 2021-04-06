import React from 'react'
import Computer from "../ws_computation/computer"
import { Image, Container } from 'semantic-ui-react'
import WebsiteBody from '../ws_computation/body'

const ImageExampleImage = () => (
  <Image src='./assets/images/astolfo.jpg' size="tiny" />
)

function WebsiteLogo() {
  return (
  <Container color="black">
    <div class="ui center alligned padded grid">
      <div class="columns">
      {ImageExampleImage()}       
      </div>
    </div>
  </Container>
  );
}

function WebsiteMetaStructure() {
  const site = (
  <div class="ui segment" style={{
          backgroundColor:"#80474F",
          color:'#3F1118'
      }
  }>
      <div class="ui equal width center alligned two column grid">
        <div class="column">
            <Image src='./assets/images/astolfo.jpg'/>
        </div>
        <div class="column">
            <div class="centered grid">
            {WebsiteBody()}
            </div>
            <Computer />
        </div>
      </div>
      </div>
    )
  return (
    site
  );
}
export default WebsiteMetaStructure
