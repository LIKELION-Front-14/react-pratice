
export default function Menu() {
    const MenuCss = {
        display:"flex",
        gap : "20px",
    };

    const menuList = {
        border:"1px solid gray",
        borderRadius:"5px",
    };

    return (
        <>
            <div style={MenuCss}>
                <div id="item1" style={menuList}>
                    <img src="src/assets/iceAmericano.png" style={{width:"200px", height:"100px"}} alert="iceAmericano"/>
                    <p>상품명 : 아이스 아메리카노</p>
                    <p style={{fontWeight:"bold", color:"pink"}}>가격 : 2,000원</p>
                </div>
                <div id="item2" style={menuList}>
                    <img src="src/assets/latte.png" style={{width:"200px", height:"100px"}}/>
                    <p>상품명 : 카페라떼</p>
                    <p style={{fontWeight:"bold", color:"pink" }}>가격 : 3,000원</p>
                </div>
                <div id="item3" style={menuList}>
                    <img src="src/assets/cappuccino.png" style={{width:"200px", height:"100px"}}/>
                    <p>상품명 : 카푸치노</p>
                    <p style={{fontWeight:"bold", color:"pink"}}>가격 : 2,500원</p>
                </div>
            </div>

        </>
    );


}