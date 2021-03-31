import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageExampleImage = () => (
  <Image src='./assets/images/astolfo.jpg' size='tiny' />
)

function WebsiteHeader() {
  return (
    <div>
    <div class="ui relaxed center alligned two column grid">
      <div class="columns">
        {ImageExampleImage()}
      </div>
        <div class="columns">
          <h1 class="ui header" >
            autumn's playground
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WebsiteHeader
