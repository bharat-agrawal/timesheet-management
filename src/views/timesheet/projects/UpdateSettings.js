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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function UpdateSettings(props) {
    const {callUpdateProjectSettigsApi, object} = props;
    const classes = useStyles();
    // const [formData, setFormData] = React.useState({
    //     billable: object.billable,
    //     timeManualEntry:object.timeManualEntry,
    //     timerOn:object.timerOn,
    //     id:object.id
    // });
    const [formData, setFormData] = React.useState(object)
    const { register, handleSubmit, errors, setError } = useForm();

    const onSubmit = () => {
        callUpdateProjectSettigsApi(formData,setError);
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
                                <Typography component="h2" variant="h6" id="transition-modal-title">Update Settings</Typography>
                                <IconButton aria-label="close" className={classes.closeButton}
                                            onClick={()=>GlobalFunctions.closeConfirm()}>
                                    <CloseIcon/>
                                </IconButton>
                            </div>

                            


                            <div className="modal-content">

                            <FormControlLabel
                            label="Billable"
                                control={
                                <Switch
                                    checked={formData.billable}
                                    //onChange={handleChange}
                                    onChange={event => setFormData({
                                        ...formData,
                                        billable: event.target.checked
                                    })}
                                    name="billable"
                                    color="primary"
                                />
                                }
                                
                            />

<FormControlLabel
                            label="Time Manual Entry"
                                control={
                                <Switch
                                    checked={formData.timeManualEntry}
                                    //onChange={handleChange}
                                    onChange={event => setFormData({
                                        ...formData,
                                        timeManualEntry: event.target.checked
                                    })}
                                    name="timeManualEntry"
                                    color="primary"
                                />
                                }
                                
                            />

<FormControlLabel
                            label="Timer On"
                                control={
                                <Switch
                                    checked={formData.timerOn}
                                    //onChange={handleChange}
                                    onChange={event => setFormData({
                                        ...formData,
                                        timerOn: event.target.checked
                                    })}
                                    name="timerOn"
                                    color="primary"
                                />
                                }
                                
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