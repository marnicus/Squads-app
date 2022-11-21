import {
    Modal,
    Box,
    Grid,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Theme,
    useTheme,
    SelectChangeEvent,
    Button,
} from "@mui/material";
import { useState, Fragment, useEffect } from "react";
import { modalBox } from "../../constants";
import { createNewSquad, getMembers } from "../../../api/dbAPI";
import { NewSquad, SquadMember, Squads } from "../../interfaces";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { saveSquad } from "../../../redux/squadsSlice";

function getStyles(id: string, squadMembers: readonly string[], theme: Theme) {
    return {
        fontWeight:
            squadMembers.indexOf(id) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const CreateSquad = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allMembers, setAllMembers] = useState<SquadMember[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    const [roomName, setRoomName] = useState<string>('');

    useEffect(() => {
        queryAllMembers();
    }, []);

    const submit = async () => {
        console.log(`Selected members ${JSON.stringify(selected)}`);
        console.log(`Name of Room: ${roomName}`);
        const newSquad: NewSquad = {
            name: roomName,
            members: selected
        };
        const savedSquad: Squads = await createNewSquad(newSquad);
        if (savedSquad) {
            dispatch(saveSquad(savedSquad));
            handleClose();
        }
    }

    const handleChange = (event: SelectChangeEvent<typeof selected>) => {
        const {
            target: { value },
        } = event;
        console.log(`Handle Change ${JSON.stringify(event)}`);
        //   const selectMembers = event.target.value;
        //   setMembers([selectMembers]);

        setSelected(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };
    const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomName(event.target.value);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const queryAllMembers = async () => {
        setLoading(true);
        const getAllMembers = await getMembers();
        console.log(JSON.stringify(getAllMembers));
        setAllMembers(getAllMembers);
        setLoading(false);
    };

    return (
        <Fragment>
            <MenuItem onClick={handleOpen}>Create an room</MenuItem>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalBox}>
                    <Typography variant="h4">Create a new room</Typography>
                    <hr />

                    {loading ? (
                        <Fragment>
                            <Typography variant="body2">Loading..</Typography>
                        </Fragment>
                    ) : (
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-basic"
                                        label="Room name"
                                        variant="outlined"
                                        value={roomName}
                                        onChange={handleRoomNameChange}
                                    />
                                </FormControl>

                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="add-members-label">Add Members</InputLabel>

                                    <Select
                                        labelId="add-members-label"
                                        id="add-members-select"
                                        value={selected}
                                        label="Add Members"
                                        onChange={handleChange}
                                    >
                                        {allMembers.map((member) => (
                                            <MenuItem
                                                key={member._id}
                                                value={member._id}
                                                style={getStyles(
                                                    `${member.firstName} ${member.lastName}`,
                                                    selected,
                                                    theme
                                                )}
                                            >
                                                {`${member.firstName} ${member.lastName}`}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <Button onClick={submit} variant="contained">Create</Button>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Modal>
        </Fragment>
    );
};

export default CreateSquad;
