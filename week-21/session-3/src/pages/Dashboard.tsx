import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <h2>Dashboard Component</h2>
            <p>Basic Info</p>
            <Link to="skills">Skills</Link> |
            <Link to="Projects">Projects</Link>
            <Outlet />
            {/* Without Outlet Nested routes willnot render */}
        </>
    );
}

export default Dashboard;