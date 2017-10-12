import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Router, Link} from 'react-router'
import FontAwesome from 'react-fontawesome'

export class ArtistBox extends Component {  

  renderFiveEmptyStars = () => {
    return (
      <div className="zero">
        <FontAwesome className='fa fa-star-o' /> 
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' /> 
      </div>
    )
  }

  renderFourEmptyStars = () => {
    return (
      <div className="one-to-twenty">
        <FontAwesome className='fa fa-star'   /> 
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' /> 
      </div>
    )
  }
  
  renderThreeEmptyStars = () => {
    return (
      <div className="twenty-to-forty">
        <FontAwesome className='fa fa-star'   /> 
        <FontAwesome className='fa fa-star'   />
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' /> 
      </div>
    )
  }
  
  renderTwoEmptyStars = () => {
    return (
      <div className="forty-to-sixty">
        <FontAwesome className='fa fa-star'   /> 
        <FontAwesome className='fa fa-star'   />
        <FontAwesome className='fa fa-star'   />
        <FontAwesome className='fa fa-star-o' />
        <FontAwesome className='fa fa-star-o' /> 
      </div>
    )
  }

  renderOneEmptyStars = () => {
    return (
      <div className="sixty-to-eigthty">
        <FontAwesome className='fa fa-star'   /> 
        <FontAwesome className='fa fa-star'   />
        <FontAwesome className='fa fa-star'   />
        <FontAwesome className='fa fa-star'   />
        <FontAwesome className='fa fa-star-o' /> 
      </div>
    )
  }

  renderNoneEmptyStars = () => {
    return (
      <div className="eigthty-plus">
        <FontAwesome className='fa fa-star' /> 
        <FontAwesome className='fa fa-star' />
        <FontAwesome className='fa fa-star' />
        <FontAwesome className='fa fa-star' />
        <FontAwesome className='fa fa-star' /> 
      </div>
    )
  }


  renderArtistBox = (data) => {
    const name = data.name ? <span>Artist: {data.name}</span> : null

    const fourStars  = ( data.popularity > -1  && data.popularity < 20 )  ? <span>{this.renderFourEmptyStars()}</span>  : null
    const threeStars = ( data.popularity >= 20 && data.popularity < 40 )  ? <span>{this.renderThreeEmptyStars()}</span> : null
    const twoStars   = ( data.popularity >= 40 && data.popularity < 60 )  ? <span>{this.renderTwoEmptyStars()}</span>   : null
    const oneStar    = ( data.popularity >= 60 && data.popularity < 80 )  ? <span>{this.renderOneEmptyStars()}</span>   : null
    const noneStar   = ( data.popularity >= 80 && data.popularity < 100 ) ? <span>{this.renderNoneEmptyStars()}</span>  : null
    
    const genre = ( data.genres && data.genres.length > 0) ? <span>{data.genres[0]}</span> : <span>Not provided</span> 
    const link = data.id ? <Link to={`/artist/${data.id}`} role="button" > See Albums </Link> : null

    return (
      <div className="artist-box">
        {name} 
        {fourStars}
        {threeStars}
        {twoStars}
        {oneStar}
        {noneStar}
        <button className="btn btn-lg get-album-btn"  >
          {link}
        </button> 
      </div>
    )
  } 

  render () {
    const {artist} = this.props
    const imageUrl = (artist.images && artist.images.length ? 
      artist.images[0].url : 'https://s3.amazonaws.com/sebimages/score-placeholder.png')

    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 wrapper-box">
        <div className="card-for-artist ">
          <div className="img-wrap">
            <img src={imageUrl} className="img-from-api img-responsive" />
          </div>
          {this.renderArtistBox(artist)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(ArtistBox)

