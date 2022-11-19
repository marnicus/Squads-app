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
} from "@mui/material";
import { useState, Fragment, useEffect } from "react";
import { modalBox } from "../../constants";
import { getMembers } from "../../../api/dbAPI";
import { AllMembers, SquadMember } from "../../interfaces";
import Typography from "@mui/material/Typography";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CreateRoom = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<SquadMember[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    queryAllMembers();
  });
  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    //   const selectMembers = event.target.value;
    //   setMembers([selectMembers]);

    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
    setMembers(getAllMembers.members);
    setLoading(false);
  };

  if (loading) {
    return (
      <Fragment>
        <Typography variant="body2">Loading..</Typography>
      </Fragment>
    );
  }
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
          {loading ? (
            <Fragment>
              <Typography variant="body2">Loading..</Typography>
            </Fragment>
          ) : (
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Room name"
                  variant="outlined"
                />
              </Grid>
              <FormControl fullWidth>
                <InputLabel id="add-members-label">Add Members</InputLabel>

                <Select
                  labelId="add-members-label"
                  id="add-members-select"
                  value={selected}
                  label="Add Members"
                  onChange={handleChange}
                >
                  {members.map((member) => (
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
          )}
        </Box>
      </Modal>
    </Fragment>
  );
};

export default CreateRoom;
