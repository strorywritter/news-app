import ResponsiveAppBar from "../componets/navbar/NavBar";

function MainLayout(props) {
    return (<>
    <ResponsiveAppBar name={props.name} />
    </>  );
}

export default MainLayout;