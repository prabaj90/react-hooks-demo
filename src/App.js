import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
// import LearnEffect from "./LearnEffect";
import LearnRef from "./LearnRef";
import LearnState from "./LearnState";
import Expenses from "./expenses";
import Invoices from "./invoices";

const LearnEffect = React.lazy(() => import("./LearnEffect"));
function App() {
  const location = useLocation();
  console.log(location);
  let routes = [
    {
      path: "/",
      element: <Layout />,
      breadcrumb: "Home",
      children: [{ index: true, element: <Home /> }],
    },
    { path: "/about", element: <About /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "/dashboard/:pageNumber", element: <Dashboard /> },
        { path: "/dashboard/invoices", element: <Invoices /> },
        { path: "/dashboard/expenses", element: <Expenses /> },
      ],
    },
    { path: "*", element: <NoMatch /> },
  ];
  let element = useRoutes(routes);
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="App">
      {/* <LearnState/> */}
      {/* <LearnEffect/> */}
      {/* <LearnRef/> */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/:pageNumber" element={<Dashboard />} />

          
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */}
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <span key={match.pathname}>
          <Link to={match.pathname}>/{breadcrumb}</Link>
        </span>
      ))}
      {element}
    </div>
  );
}

function Layout() {
  // const breadcrumbs = useBreadcrumbs(routes);
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <h2>About</h2>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </div>
  );
}

function Dashboard() {
  const { pageNumber } = useParams();
  return (
    <div>
      <h2>Dashboard {pageNumber}</h2>

      <nav>
        <ul>
          <li>
            <Link to="expenses">Expenses</Link>
          </li>
          <li>
            <Link to="invoices">Invoices</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
