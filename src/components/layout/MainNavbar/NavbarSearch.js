import React from "react";
import Dialog from "@material-ui/core/Dialog";
import SearchIcon from "@material-ui/icons/Search";
import Slide from "@material-ui/core/Slide";
import SearchBar from "./SearchBar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      <div
        style={{
          width: "100%",
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          color: "#b8b8b8"
        }}
        onClick={() => handleClickOpen()}
        type="primary"
        icon="search"
      >
        <p>
          Search for books, assignments, past papers, news papers in 200 files
        </p>
        <SearchIcon />
      </div>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <SearchBar handleClose={handleClose} />
      </Dialog>
    </div>
  );
};
