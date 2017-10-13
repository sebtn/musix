import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export class NewReleaseBox extends Component {

  renderNewReleaseBox = (data) => {
    const name   = data.name ? <span>{data.name}</span> : null
    const artist = data.artists[0].name ? <span>{data.artists[0].name}</span> : null

    return(
      <div className="newRelease-box">
        {name}
        {artist}
      </div>
    )
  }

  render() {
    const {newRelease} = this.props
    const imageUrl = (newRelease.images ? newRelease.images[0].url : 'https://s3.amazonaws.com/sebimages/score-placeholder.png')  
    return (
      <div className="col-xs-12 wrapper-box">
        <div className="card-for-newRelease">
        <div className="img-wrap">
          <img src={imageUrl} className="img-from-api img-responsive" />
        </div>
          {this.renderNewReleaseBox(newRelease)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(NewReleaseBox)