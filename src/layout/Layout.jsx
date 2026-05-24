import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    const navStyle = ({ isActive }) => ({
        color: isActive ? "black" : "white",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none",
    });

    const headStyle = {
        padding: "20px", 
        background: "brown", 
        display: "flex", 
        gap: "20px", 
        marginBottom:"10vh"
    };

    const footStyle = {
        padding:"20px",
        background:"black",
        color:"white",
        textAlign:"center",
        marginTop:"10vh"
    };
    return(
        <>
            <header style={headStyle}>
                <NavLink to="/Home" style={navStyle}>홈</NavLink>
                <NavLink to="/Menu" style={navStyle}>메뉴</NavLink>
                <NavLink to="/Story" style={navStyle}>스토리</NavLink>
                <NavLink to="/Login" style={navStyle}>로그인</NavLink>
            </header>

            <main sytle={{padding:"20px", minHeight:"60vh", margin:"10vh"}}>
                <Outlet/>
            </main>

            <footer style={footStyle}>@ kangnam university cafe</footer>
        </>

    );
}