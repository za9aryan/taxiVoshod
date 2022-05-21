import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: 450,
    borderRadius: "10px",
    outline: "none",
};

const errTextStyle = {
    textAlign: "center"
}

const inputErrTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    marginTop: 0,
    textAlign: "center"
}

const AddModal = ({ modal, setClose }) => {
    const [open, setOpen] = React.useState(modal);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setClose()
    };

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography sx={errTextStyle} id="transition-modal-title" variant="h6" component="h2">
                            Добавить
                        </Typography>
                        <Typography sx={inputErrTextStyle} id="transition-modal-description">
                            {/* <Typography sx={errTextStyle} id="transition-modal-title" variant="h6" component="h2">
                                Imya <input />
                            </Typography> */}
                        </Typography>
                        <div onClick={handleClose} className="modal_button">
                            Добавить
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default AddModal