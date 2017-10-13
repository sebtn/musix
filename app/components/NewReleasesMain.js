import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {startFetchNewReleases} from '../actions/newReleases'
import {NewReleaseBox} from './NewReleaseBox'

export class NewReleasesMain extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    const {dispatch} = this.props
    dispatch( startFetchNewReleases() )
  }

  renderNewReleases = () => {
    const {items} = this.props.newReleases.albums
    if(items !== undefined) {
      return(
        <div className="newReleases-main-container">
          { items.map( (newRelease, index) => {
            return <NewReleaseBox 
              key={newRelease.id}
              newRelease={newRelease}
            />
          } )}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="newReleases-main-box">
        <Link to="/" className="btn btn-lg back" role="button" > Back to login</Link>
        <Link to="/artists" className="btn btn-lg back" role="button" > Back to artists</Link>
        <h1 className="newRelease-title">This are some new releases in spotify</h1>
          {this.renderNewReleases()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {newReleases} = state
  return {
    newReleases: newReleases.toJS(),
  }
}

export default connect(mapStateToProps)(NewReleasesMain)