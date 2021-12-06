import React from 'react'
import { Descriptions } from 'antd'
import "./MovieDetails.css"
import { Col } from 'antd';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../Config.js'


import { Typography } from 'antd';
const { Title } = Typography;

function MovieInfo(props) {

  const { movie } = props;

  const InfoSectionMovie = (movie) => {
    var release_date = movie.release_date
    var date = new Date();
    var date1 = new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " 00:00:00")
    var date2 = new Date(release_date + " 00:00:00")
    if (date1 > date2) {        //Les informations sont différentes si le film est sortie ou non
      return (
        <div className='InformationsKeys'>
          <div id="Title" className='Info'>
            <h2>Titre :</h2>
            <h3>{movie.original_title}</h3>
          </div>
          <div id="Date" className='Info'>
            <h2>Date de sortie :</h2>
            <h3>{movie.release_date}</h3>
          </div>
          <div id="Revenu" className='Info'>
            <h2>Revenu :</h2>
            <h3>{movie.revenue + "€"}</h3>
          </div>
          <div id="Durée" className='Info'>
            <h2>Durée :</h2>
            <h3>{movie.runtime + " min"}</h3>
          </div>
          <div id="VoteCount" className='Info'>
            <h2>Nombre de vote :</h2>
            <h3>{movie.vote_count}</h3>
          </div>
          <div id="OfficialSite" className='Info'>
            <h2>Site officiel :</h2>
            <h3 href={movie.homepage}>{movie.homepage}</h3>
          </div>
          <div id="Popularity" className='Info'>
            <h2>Popularité :</h2>
            <h3>{movie.popularity}</h3>
          </div>
          <div id="AverageNote" className='Info'>
            <h2>Note moyenne :</h2>
            <h3>{movie.vote_average + "/10"}</h3>
          </div>
        </div>
      )
    } else {
      return (
        <div className='InformationsKeys'>
          <div id="Title" className='Info'>
            <h2>Titre :</h2>
            <h3>{movie.original_title}</h3>
          </div>
          <div id="Date" className='Info'>
            <h2>Date de sortie :</h2>
            <h3>{movie.release_date}</h3>
          </div>
          <div id="Revenu" className='Info'>
            <h2>Revenu :</h2>
            <h3>{movie.revenue + "€"}</h3>
          </div>
          <div id="Durée" className='Info'>
            <h2>Durée :</h2>
            <h3>{movie.runtime + " min"}</h3>
          </div>
          <div id="VoteCount" className='Info'>
            <h2>Nombre de vote :</h2>
            <h3>{"Aucune donnée"}</h3>
          </div>
          <div id="OfficialSite" className='Info'>
            <h2>Site officiel :</h2>
            <h3 href={movie.homepage}>{movie.homepage}</h3>
          </div>
          <div id="Popularity" className='Info'>
            <h2>Popularité :</h2>
            <h3>{movie.popularity}</h3>
          </div>
          <div id="AverageNote" className='Info'>
            <h2>Note moyenne :</h2>
            <h3>{"Aucune donnée"}</h3>
          </div>
        </div>
      )
    }
  }


  return (
    <div className='Informations'>
      <Title>Informations</Title>
      <div className='InformationsPoster'>
        <Col lg={6} md={8} xs={24}>
          <div style={{ position: 'relative' }} className="MoviesSections">
            <img className="moviePosterInfo" style={{ width: '80%', height: '50%', border: 'radius 50px;' }} alt={movie.original_title} src={movie.poster_path ?
              `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : null} />
          </div>
        </Col>
        {InfoSectionMovie(movie)}
      </div>

    </div>

  )
}

export default MovieInfo
