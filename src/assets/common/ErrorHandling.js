import {API} from "../../config";
import i18n from "../../i18n"
import SuccessErrorCodes from "./SuccessErrorCodes";


export default function ErrorHandling(err,setError,enqueueSnackbar){
    if(err.response){
        switch (err.response.status) {
            case 500 : {
                enqueueSnackbar(i18n.t("message:ERR_500"), {
                    variant: "error"
                });
                break;
            }
            case 400 : {
                let object = err.response.data.field_errors;
                for(const property in object){
                    let key = property.split(".").pop();
                    let value = object[property];
                    setError(key, "validate", SuccessErrorCodes(value[0]));
                }
                break;
            }
            case 403 : {
                if(err.response.data && err.response.data.code){
                    enqueueSnackbar(SuccessErrorCodes(err.response.data.code), {
                        variant: "error"
                    });
                }
                else{
                    if(err.config.url === API.auth.login ||
                        err.config.url === API.auth.register ||
                        err.config.url === API.auth.forgotPassword){
                        enqueueSnackbar(i18n.t("message:ERR_FIELD_INVALID"), {
                            variant: "error"
                        });
                    }
                }
                break;
            }

            case 409 : {
                    enqueueSnackbar(i18n.t("message:ERR_DUPLICATE"), {
                        variant: "error"
                    });
                break;
            }
            default:
                enqueueSnackbar(i18n.t("message:ERR_DEFAULT"), {
                    variant: "error"
                });
                break;
        }
    }
    else{
        enqueueSnackbar(i18n.t("message:ERR_FAILED"), {
            variant: "error"
        });
    }
}