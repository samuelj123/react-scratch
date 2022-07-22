import ProjectArc from '../ProjectArc/ProjectArc';
import BudgetLine from '../BudgetLine/BudgetLine';
import { data, bddata } from '../../services/data';

const Dashboard = () => {
    return (
        <>
            <h1>dashboard</h1>
            <ProjectArc {...data} />
            <BudgetLine {...bddata} />
        </>
    )
}

export default Dashboard