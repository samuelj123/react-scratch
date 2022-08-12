import ProjectArc from '../shared/ProjectArc/ProjectArc';
import BudgetLine from '../shared/BudgetLine/BudgetLine';
import Map from '../Map/Map';
import { data, bddata, piechartdata } from '../../services/data';
import PieChart from '../shared/PieChart/PieChart';

const Dashboard = () => {
    return (
        <>
            <h1>dashboard</h1>
            <ProjectArc {...data} />
            <BudgetLine {...bddata} />
            <PieChart {...piechartdata} />
            <Map />
        </>
    )
}

export default Dashboard