import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <section className="min-h-[70vh] bg-stone-100 px-6 py-16">
            <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-md">
                <p className="mb-4 text-5xl font-extrabold text-stone-900">
                    404 NOT FOUND
                </p>

                <h1 className="mb-4 text-3xl font-bold text-stone-900">
                    페이지를 찾을 수 없습니다.
                </h1>

                <p className="mb-8 leading-7 text-stone-600">
                    입력하신 주소가 잘못되었거나, 페이지가 더 이상 존재하지 않습니다.<br/>
                    홈으로 돌아가 Debunk의 메뉴와 이야기를 다시 확인해보세요.
                </p>

                <Link
                    to="/"
                    className="inline-block rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-stone-700"
                >
                    홈으로 돌아가기
                </Link>
            </div>
        </section>
    );
}