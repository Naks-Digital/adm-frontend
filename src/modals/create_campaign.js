import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function CreateCampaign(createCampaignModalShow) {
  const [modalShow, setModalShow] = useState(createCampaignModalShow);
  function createCampaign() {
    setModalShow(!modalShow);
  }

  return (
    <>
      
    </>
  );
}
