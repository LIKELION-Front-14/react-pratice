import gyattoImg from "../assets/gyatto.jpeg"
import einspannerImg from "../assets/einspanner.jpeg"
import debunklatteImg from "../assets/debunk-latte.jpeg"

    const menuList = [
        {
            id : 1,
            name : "디벙크라떼",
            price :"7000원",
            description : "디벙크의 시그니쳐 크림 라떼입니다 아몬드 시럽이 들어가고 달콤한 캬라멜 크림이 올라갑니다",
            image : debunklatteImg,
        },
        {
            id : 2,
            name : "갸또",
            price : "8000원",
            description : "황치즈/얼그레이/쇼콜라/샤인머스캣/오레오/레몬딜 프랑스식 케이크 갸또입니다",
            image : gyattoImg,
        },
        {
            id : 3,
            name : "아인슈페너",
            price : "6000원",
            description : "아이스만 가능합니다",
            image : einspannerImg,
        },
];

export default function Menu(){
    return(
        <section className="min-h-[70vh] bg-stone-100 px-6 py-16">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-stone-500">
                        DEBUNK MENU
                    </p>
                    <h1 className="text-4xl font-bold text-stone-900">Menu</h1>
                    <p className="mt-4 text-stone-600">DEBUNK 대표 메뉴입니다.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {menuList.map((menu)=>(
                        <div
                            key={menu.id}
                            className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img
                                src={menu.image}
                                alt={menu.name}
                                className="h-64 w-full object-cover"
                            />
                            <div className="p-6">
                                <div className="mb-3 flex items-center justify-between gap-4">
                                    <h3 className="text-xl font-bold text-stone-900">{menu.name}</h3>
                                    <p className="shrink-0 text-sm font-semibold text-stone-500">{menu.price}</p>
                                </div>
                                <p className="text-sm leading-6 text-stone-600">{menu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}