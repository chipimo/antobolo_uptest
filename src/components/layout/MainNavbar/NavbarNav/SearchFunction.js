
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import SearchIcon from "@material-ui/icons/Search";
import Slide from "@material-ui/core/Slide";
import SearchBar from "../SearchBar";
import { isMobile } from "react-device-detect";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MobileSearchBar = () => {
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  if(isMobile){
  
   return (
      <div style={{color:"#3b3b3b", width:260, paddingTop:10}}>
          <div onClick={handleClickOpen} style={{width:"100%", borderRadius:10, backgroundColor:"#e8e8e8", paddingLeft:10, paddingRight:8,}}>
          <div style={{display:"flex", justifyContent:"space-between"}}>
              <p style={{marginTop:10}}>Search for of 345 files</p>
              <i style={{ marginTop:9,fontSize:25}} className="material-icons">
                search
              </i>
          </div>
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
   )
   }else {
       return null
       }
}

export default MobileSearchBar;
