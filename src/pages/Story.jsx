export default function Story() {
    return(
        <section className="min-h-[70vh] bg-stone-100 px-6 py-16">
            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-md">

                <div className="mb-12 text-center">
                
                    <h1 className="text-4xl font-bold text-stone-800">
                        Debunk Story
                    </h1>

                    <p className="mt-4 text-stone-600">
                        합정의 조용한 분위기 속에서 커피와 휴식을 즐길 수 있는 공간
                    </p>
                </div>

                <div className="space-y-8">

                    <div className="rounded-2xl border border-stone-200 p-6">
                        <h2 className="mb-3 text-2xl font-bold text-stone-900">
                            카페 이야기
                        </h2>

                        <p className="leading-7 text-stone-600">
                            Debunk는 합정의 조용한 골목에 위치한 카페입니다.
                            바쁜 일상속에서 잠시 쉬어갈 수 있는 공간을 만들고자 시작됐습니다.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 p-6">
                        <h2 className="mb-3 text-2xl font-bold text-stone-900">
                            위치
                        </h2>

                        <p className="leading-7 text-stone-600">
                            서울 마포구 성지1길 30 더보이드빌딩 지하1층
                        </p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 p-6">
                        <h2 className="mb-3 text-2xl font-bold text-stone-900">
                            운영시간
                        </h2>

                        <p className="leading-7 text-stone-600">
                            매일 10:00 ~ 23:00
                        </p>
                    </div>

                    <div className="rounded-2xl border border-stone-200 p-6">
                        <h2 className="mb-3 text-2xl font-bold text-stone-900">
                            Debunk의 분위기
                        </h2>

                        <p className="leading-7 text-stone-600">
                            따뜻한 조명, 차분한 음악, 그리고 디저트와 커피가 어우러지는
                            편안한 무드의 공간입니다.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}