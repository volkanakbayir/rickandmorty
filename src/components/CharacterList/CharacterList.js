import React, { Component } from "react";
import "./CharacterList.css";
import CharacterCard from "../CharacterCard/CharacterCard";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { fetchNextPage, movingOutOfCharacterListPage, characterListPageOpened } from '../../actions/character'
import { connectTo } from '../../utils/generic'

class CharacterList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.characterListPageOpened();
  }

  componentWillUnmount() {
    this.props.movingOutOfCharacterListPage();
  }

  handleScroll = (event) => {
    const { scrollTop, scrollHeight } = event.target;
    const clientHeight = event.target.clientHeight || window.innerHeight;
    const isScrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (isScrolledToBottom && !this.props.allPagesLoaded) {
      this.props.fetchNextPage();
    }
  }

  renderCharacterCards = () => {
    return (
      <React.Fragment>
        {this.props.characters.map(item => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </React.Fragment>
    );
  };

  renderListLoading = () => {
    if (this.props.fecthing) {
      return <div className="centered">
        <LoadingAnimation></LoadingAnimation>
      </div>
    }
  }

  render() {
    return (
      <div onScroll={this.handleScroll} className="infinite-scroller">
        <div className="character-list">
          {this.renderCharacterCards()}
        </div>
        {this.renderListLoading()}
      </div>
    );
  }
}


export default connectTo(
  state => {
    return state.character
  },
  { fetchNextPage, movingOutOfCharacterListPage, characterListPageOpened },
  CharacterList
);