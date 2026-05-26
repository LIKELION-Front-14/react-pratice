import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (userId === "guest") {
            navigate("/", { replace : true});
        }
        else {
            alert("아이디가 틀립니다");
        }
    };
    return (
        <section className="min-h-[70vh] bg-stone-100 px-6 py-16">
            <div className="mx-auto max-w-md rounded-3xl bg-white p-10 shadow-md">
                <div className="mb-8 text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-stone-500">
                        DEBUNK에 오신 걸 환영합니다
                    </p>

                    <h1 className="text-4xl font-bold text-stone-900">
                        Login
                    </h1>

                </div>

                <div className="space-y-4">
                    <input
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="아이디 입력"
                        className="w-full rounded-2xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-stone-700 focus:ring-4 focus:ring-stone-200"
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full rounded-2xl bg-stone-900 px-4 py-3 font-semibold text-white transition hover:bg-stone-700"
                    >
                        로그인
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="w-full rounded-2xl border border-stone-300 px-4 py-3 font-semibold text-stone-700 transition hover:bg-stone-100"
                    >
                        뒤로가기
                    </button>
                </div>
            </div>
        </section>
    );
}