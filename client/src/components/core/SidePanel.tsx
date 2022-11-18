
import { useEffect, useState, Fragment } from "react"
import Card from "@mui/material/Card"
import CardHeader from '@mui/material/CardHeader';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getMemberSquads } from '../../api/dbAPI';
import Typography from "@mui/material/Typography";

const SidePanel = () => {
    const { squadMember } = useSelector((state: RootState) => state.authReducer);
    const [squads, setSquads] = useState<[] | null>(null);

    useEffect(() => {
        initSquads();
    });

    const initSquads = async () => {
        const getSquads: [] = await getMemberSquads(squadMember?._id!);
        if (getSquads.length > 0) {
            setSquads(getSquads);
        }
    }
    return <Fragment>
        <Card id="sidePanel">
            <CardHeader><h5>Side Panel</h5></CardHeader>
            <hr />
            {squads?.length! < 0 ? <Typography variant="body2">Please join a squad</Typography> : <div></div>}
        </Card>
    </Fragment>
}

export default SidePanel;