import { CreateMailConstants } from "../../constants";

export const changeOpen = (open) => {
    return {
        type: CreateMailConstants.CHANGE_OPEN,
        open: open,
    }
};

export const changeTo = (to) => {
    return {
        type: CreateMailConstants.CHANGE_TO,
        to: to,
    }
};

export const changeCc = (cc) => {
    return {
        type: CreateMailConstants.CHANGE_CC,
        cc: cc,
    }
};

export const changeFrom = (from) => {
    return {
        type: CreateMailConstants.CHANGE_FROM,
        from: from,
    }
};

export const changeSubject = (subject) => {
    return {
        type: CreateMailConstants.CHANGE_SUBJECT,
        subject: subject,
    }
};

export const changeTypeOfMail = (typeOfMail) => {
    return {
        type: CreateMailConstants.CHANGE_TYPE_OF_MAIL,
        typeOfMail: typeOfMail,
    }
};

export const changeBody = (body) => {
    return {
        type: CreateMailConstants.CHANGE_BODY,
        body: body,
    }
};

export const changeSend = (send) => {
    return {
        type: CreateMailConstants.CHANGE_SEND,
        send: send,
    }
};