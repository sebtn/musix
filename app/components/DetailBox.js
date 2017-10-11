import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'


export class DetailBox extends Component {  

  renderDetailBox = (data) => {


    return (
      <div className="detail-box">

      </div>
    )
  } 

  render () {
    const {detail} = this.props
    
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 wrapper-box">
        <div className="card-for-detail ">
          {this.renderDetailBox(detail)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(DetailBox)

