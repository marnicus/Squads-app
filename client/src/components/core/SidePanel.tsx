
import { useEffect, useState, Fragment } from "react"
import Card from "@mui/material/Card"
import CardHeader from '@mui/material/CardHeader';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../redux/store";
import { getMemberSquads } from '../../api/dbAPI';
import Typography from "@mui/material/Typography";
import { storeSquads } from "../../redux/squadsSlice";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { selectedSquad } from "../../redux/squadRoomSlice";

const SidePanel = () => {
    const { squadMember } = useSelector((state: RootState) => state.authReducer);
    const dispatch = useDispatch();
    const { squads } = useSelector((state: RootState) => state.squadsSlice);
    // const [squads, setSquads] = useState<[] | null>(null);

    useEffect(() => {
        initSquads();
    }, []);

    const initSquads = async () => {
        const getSquads: [] = await getMemberSquads(squadMember?._id!);
        if (getSquads.length > 0) {

            dispatch(storeSquads(getSquads));
        }
    }

    const handleSquadClick = async (squadId: string) => {
        dispatch(selectedSquad(squadId))
    }
    return <Fragment>
        <Card id="sidePanel">
            <CardHeader title="Squads" />
            <hr />
            <Grid container justifyContent="center">
                {squads?.length! === 0 ? <Typography variant="body2">Please join a squad</Typography> : <div>
                    {squads.map((squad, index) => (<Fragment key={index}>
                        <Grid item>
                            <Button onClick={() => handleSquadClick(squad._id)}>
                                <Typography variant="body2">{squad.name}</Typography>
                            </Button>
                        </Grid>
                    </Fragment>))}

                </div>}
            </Grid>
        </Card>
    </Fragment>
}

export default SidePanel;