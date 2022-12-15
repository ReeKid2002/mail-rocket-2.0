import { CreateMailConstants } from "../../constants";

const initialState = {
    open: false,
    to: "",
    cc: "",
    from: "",
    subject: "",
    typeOfMail: 0,
    body: "",
    send: false,
};

const createMailReducer = (state = initialState, action) => {
    switch(action.type){
        case CreateMailConstants.CHANGE_OPEN: return { ...state, open: action.open };
        case CreateMailConstants.CHANGE_TO: return { ...state, to: action.to };
        case CreateMailConstants.CHANGE_CC: return { ...state, cc: action.cc };
        case CreateMailConstants.CHANGE_FROM: return { ...state, from: action.from };
        case CreateMailConstants.CHANGE_SUBJECT: return { ...state, subject: action.subject };
        case CreateMailConstants.CHANGE_TYPE_OF_MAIL: return { ...state, typeOfMail: Number(action.typeOfMail) };
        case CreateMailConstants.CHANGE_BODY: return { ...state, body: action.body };
        case CreateMailConstants.CHANGE_SEND: return { ...state, send: action.send };
        default: return state;
    }
};

export default createMailReducer;