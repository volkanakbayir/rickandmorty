import React from "react";
import "./CharacterCard.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Card className="character-card">
      <Link to={`/detail/${props.character.id}`}>
        <CardActionArea>
          <CardContent className="character-card-display">
            <Avatar className="character-card-image" alt={props.character.name} src={props.character.image} />
            <h2>{props.character.name}</h2>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default CharacterCard;
