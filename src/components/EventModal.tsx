import { Button, Modal, Box, Typography } from "@mui/material";
import React from "react";
import Link from "./Link";
import { Height } from "@mui/icons-material";
import { maxHeaderSize } from "http";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    md: "auto",
    xs: "90%",
  },
  bgcolor: "background.paper",
  border: "none!important",
  boxShadow: 24,
};

const EventModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (!("hasCodeRunBefore" in sessionStorage)) {
      sessionStorage.setItem("hasCodeRunBefore", "true");
      setOpen(true);
    }
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Link href="/">
            <img
              style={{ maxHeight: "90vh" }}
              src="/assets/img/events/tet.gif"
            />
          </Link>
        </Box>
      </Modal>
    </div>
  );
};

export default EventModal;
