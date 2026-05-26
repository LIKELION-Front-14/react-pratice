import { NavLink,Outlet } from "react-router-dom";


export default function Layout(){
    const navStyle = ({isActive}) =>
        isActive
        ? "font-bold text-stone-900 underline underline-offset-8"
        : "font-medium text-stone-500 transition hover:text-stone-900"; 
    return(
        <div className="min-h-screen bg-stone-100 text-stone-900">
            <header className ="border-b border-stone-200 bg-
            white/80 backdrop-blur-sm">
                <div className="mx-auto flex max-w-5xl flex-col gap-4
                px-6 py-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-extrabold tracking-[0.25em] text-stone-900">
                            DEBUNK
                        </h1>
                    <p className="mt-1 text-sm text-stone-500">
                        Hapjeong Coffee & Mood
                    </p>
                        
                </div>
                <nav className="flex gap-5 text-sm">
                    <NavLink to="/" end className={navStyle}>홈</NavLink>
                    <NavLink to="/menu" className={navStyle}>메뉴</NavLink>
                    <NavLink to="/story" className={navStyle}>스토리</NavLink>
                    <NavLink to="/login" className={navStyle}>로그인</NavLink>
                </nav>
            </div>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className = "border-t border-stone-200 bg-white px-6 py-8 text-center text-sm text-stone-500">
                ⓒ 2026 DEBUNK Coffee Company. All Rights Reserved.
            </footer>
        </div>
    );
}