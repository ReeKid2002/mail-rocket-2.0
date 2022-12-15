import { useSelector, useDispatch } from 'react-redux';
import { 
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    TextField,
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
} from '@mui/material';
import { CreateMailActions as action } from '../../redux/actions';
import useStyles from './styles.ts';

const CreateMail = () => {
    const classes = useStyles();
    const createMailState = useSelector(state => state.createMail);
    const dispatch = useDispatch();
    console.log(classes);
    return (
        <div>
            <Button variant="contained" onClick={() => dispatch(action.changeOpen(true))}>
                COMPOSE MAIL
            </Button>
            <Dialog open={createMailState.open} onClose={() => dispatch(action.changeOpen(false))} className={classes.dialog}>
                <DialogTitle>Compose Mail</DialogTitle>
                <DialogContent>
                    <FormControl>
                        <FormLabel>From</FormLabel>
                        <TextField variant="outlined" onChange={(e) => dispatch(action.changeFrom(e.target.value))}/>
                        <FormLabel>To</FormLabel>
                        <TextField variant="outlined" onChange={(e) => dispatch(action.changeTo(e.target.value))}/>
                        <FormLabel>CC</FormLabel>
                        <TextField variant="outlined" onChange={(e) => dispatch(action.changeCc(e.target.value))}/>
                        <FormLabel>Subject</FormLabel>
                        <TextField variant="outlined" onChange={(e) => dispatch(action.changeSubject(e.target.value))}/>
                        <FormLabel>Schedule Type</FormLabel>
                        <RadioGroup row onChange={(e) => dispatch(action.changeTypeOfMail(e.target.value))}>
                            <FormControlLabel value={0} control={<Radio />} label="Instant"/>
                            <FormControlLabel value={1} control={<Radio />} label="Daily"/>
                            <FormControlLabel value={2} control={<Radio />} label="Weekly"/>
                            <FormControlLabel value={3} control={<Radio />} label="Monthly"/>
                            <FormControlLabel value={4} control={<Radio />} label="Yearly"/>
                        </RadioGroup>
                        <FormLabel>Message</FormLabel>
                        <TextField multiline rows={5} variant="outlined" onChange={(e) => dispatch(action.changeBody(e.target.value))}/>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button variant="text" onClick={() => dispatch(action.changeOpen(false))}>Cancel</Button>
                    <Button variant="text" onClick={() => {dispatch(action.changeOpen(false)); dispatch(action.changeSend(true))}}>SEND</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateMail;