import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export class NewReleaseBox extends Component {

  renderNewReleaseBox = (data) => {

    return(
    {console.log(data)}

    )
  }

  render() {
    const {NewRelease} = this.props
    return (
      <div className="col-xs-12 wrapper-box">
        <div className="card-for-newRelease">
          {this.renderNewReleaseBox(NewRelease)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(NewReleaseBox)