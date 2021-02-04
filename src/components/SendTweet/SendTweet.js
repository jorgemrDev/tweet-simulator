import React, { useState } from "react";
import "./SendTweet.scss";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer";
// import { Iso } from "@material-ui/icons";
import FormSendTweet from "../FormSendTweet";
import { TWEETS_STORAGE } from "../../utils/constants";

export default function SendTweet(props) {
  const { setToastProps, allTweets } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (event, formValues) => {
    event.preventDefault();
    const { name, tweet } = formValues;
    let AllTweetsArray = [];

    if (allTweets) {
      AllTweetsArray = allTweets;
    }

    if (!name || !tweet) {
      setToastProps({
        open: true,
        text: "WARNING! Todos los campos son requeridos",
      });
    } else {
      formValues.time = moment();
      AllTweetsArray.push(formValues);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(AllTweetsArray));
      setToastProps({
        open: true,
        text: "Tweet enviado correctamente",
      });
      closeModal();
    }
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
}
