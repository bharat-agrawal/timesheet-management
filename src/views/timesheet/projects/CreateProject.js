import {Button, Grid, IconButton, TextField, Typography} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import {useForm} from "react-hook-form";
import GlobalFunctions from "../../../assets/common/GlobalFunctions";
import ValidationMessage from "../../../assets/common/Validation";
import useStyles from "./Style"
import "../../../assets/styles/style.scss";

export default function CreateProject(props) {
    const {callCreateProjectApi} = props;
    const classes = useStyles();
    const [formData, setFormData] = React.useState({
        name: ""
    });
    const { register, handleSubmit, errors, setError } = useForm();

    const onSubmit = () => {
        callCreateProjectApi(formData,setError);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={true}
            disableBackdropClick={true}
            onClose={()=>GlobalFunctions.closeConfirm()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
                open: true
            }}
        >
            <Fade in={true}>
                <div className="modal-sm modal">
                    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                        <div className="modal-container">
                            <div className="modal-header">
                                <Typography component="h2" variant="h6" id="transition-modal-title">Create Project</Typography>
                                <IconButton aria-label="close" className={classes.closeButton}
                                            onClick={()=>GlobalFunctions.closeConfirm()}>
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                            <div className="modal-content">
                                <TextField
                                    onChange={event => setFormData({
                                        ...formData,
                                        name: event.target.value
                                    })}
                                    value={formData.name}
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label={"Name*"}
                                    name="name"
                                    autoComplete="name"
                                    // error={!!errors.name}
                                    // inputRef={register({
                                    //     required:{
                                    //         value:true,
                                    //         message:ValidationMessage.required
                                    //     }
                                    // })}
                                    // helperText={errors.name && errors.name.message}
                                />
                                <div className={classes.spaceTop}></div>
                            </div>
                            <div className="modal-action">
                                <Grid container>
                                    <Grid item xs>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                        >
                                            submit
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            type="button"
                                            variant="outlined"
                                            color="primary"
                                            onClick={()=>GlobalFunctions.closeConfirm()}
                                            className={classes.submit}
                                        >
                                            {"cancel"}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        </Modal>
    )
}