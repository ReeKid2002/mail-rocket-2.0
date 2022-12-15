import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { CreateMailActions } from '../../redux/actions';

const CreateMail = () => {
    const createMailState = useSelector(state => state.createMail);
    const dispatch = useDispatch();
    console.log(createMailState);
    return (
        <div>
            <Button variant="contained" onClick={() => dispatch(CreateMailActions.changeOpen(true))}>
                COMPOSE MAIL
            </Button>
        </div>
    )
}

export default CreateMail;