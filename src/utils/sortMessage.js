import compareDesc from "date-fns/compareDesc";
import parseISO from "date-fns/parseISO";

const sortMessage = (users) => {
    const result =  users.slice().sort((a, b) => {
        if(!a.message.length || !b.message.length) return 1;
        return compareDesc(parseISO(a.message[a.message.length - 1].createdAt), parseISO(b.message[b.message.length - 1].createdAt))
    })
    return result;
}

export default sortMessage;
