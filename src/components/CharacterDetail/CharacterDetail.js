import React, { Component } from "react";
import "./CharacterDetail.css";
import { characterDetailPageOpened, movingOutOfDetailPage } from '../../actions/characterDetail'
import { connectTo } from '../../utils/generic'
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Chip from '@material-ui/core/Chip';

class CharacterDetail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.characterDetailPageOpened(id);
  }

  componentWillUnmount() {
    this.props.movingOutOfDetailPage();
  }

  handleBackButton = () => {
    this.props.history.push("/");
  };

  renderEpisodeNames = (episodes) => {
    return (
      <div className="episode-names">
        {episodes.map((episode, i) => (
          <Chip key={episode.id} label={episode.name} className="episode-name" />
        ))}
      </div>
    );
  }

  render() {
    const { detail, loading } = this.props;
    return (
      <React.Fragment>
        {
          loading || !detail ?
            <div className="centered">
              <LoadingAnimation></LoadingAnimation>
            </div>
            :
            <Paper className="character-detail-container">
              <div className="img-container">
                <Avatar className="character-detail-image" alt={detail.character.name} src={detail.character.image} />
              </div>
              <div className="info-container">
                <div className="name info">
                  <span>Name: </span>
                  {detail.character.name}
                </div>
                {
                  detail.character.origin && detail.character.origin.name &&
                  <div className="from info">
                    <span>From: </span>
                    {detail.character.origin.name}
                  </div>
                }
                <div className="episodes info">
                  <label>Last {detail.episodes.length} Episodes Character Played: </label>
                  {this.renderEpisodeNames(detail.episodes)}
                </div>
              </div>
            </Paper>
        }
        <div className="back-button-container">
          <div className="back-button" onClick={this.handleBackButton}>
            <span className="back-icon">&larr;</span> Go Back
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default connectTo(
  state => {
    return state.characterDetail
  },
  { characterDetailPageOpened, movingOutOfDetailPage },
  CharacterDetail
);