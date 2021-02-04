import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "./TweetsList.scss";
import Tweet from "../Tweet/Tweet";

export default function TweetsList(props) {
  const { allTweets, deleteTweet } = props;
  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="tweets-list-empty">
        <h2>No hay tweets...</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={3} className="tweets-list">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
        </Grid>
      ))}
    </Grid>
  );
}
