import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

// export default function AddSite() {
//     // const [showModal, setShowModal] = useState(false);
//   return (
//     <div>
//       {alert("hii")}
//       <Modal show={true}>
//         <Modal.Header>Header</Modal.Header>
//         <Modal.Body>Body</Modal.Body>
//         <Modal.Footer>
//           <Button>Close</Button>
//         </Modal.Footer>
//         <h2>Modal title</h2>
//       </Modal>
//     </div>
//   );
// }

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function AddSite(props) {
  return (
    <>

      <MyVerticallyCenteredModal
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
      />
    </>
  );
}
