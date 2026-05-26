import {useNavigate} from "react-router-dom"
export default function Home() {
    const navigate = useNavigate();
    return (
        <section className="min-h-[70vh] bg-stone-100 px-6 py-16">
            <div className="mx-auto flex max-w-5xl 
            flex-col items-center gap-10 rounded-3xl 
            bg-white px-8 py-14 shadow-md md:flex-row md:px-12">
                <div className ="flex-1">
                    <p className="mb-3 text-sm font-semibold
                    tracking-[0.3em] text-stone-500">
                        HAPJEONG CAFE
                    </p>

                    <h1 className="mb-5 text-4xl font-bold leading-tight
                    text-stone-900 md:text-5xl">
                        <br/> Debunk에 오신 걸 환영합니다.
                    </h1>

                    <p className="mb-8 text-base leading-7 text-stone-600 md:text-lg">
                        Debunk는 바쁜 일상 속에서 잠시 쉬어갈 수 있는 합정 카페입니다.
                        따뜻한 커피, 차분한 공간, 그리고 편안한 분위기를 통해 방문하는 분들에게 여유로운 시간을 선물하고자 합니다.
                    </p>
                    <button type = "button" onClick={() => navigate("/menu")}
                        className="rounded-full bg-stone-900 px-6 py-3
                        text-sm font-semibold text-white transition hover:bg-stone-700
                        focus: outline-none focus:ring-4 focus:ring-stone-300 ">
                        메뉴 보러가기
                    </button>
                </div>

            </div>
            
        </section>
    );
}