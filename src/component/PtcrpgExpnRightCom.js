import '../particularpage/Ptcrpg2.css';




function PtcrpgExpnRightCom(props) {    //오른쪽 가격옵션 선택창 내부에 있는 작은 박스

    

    return (
        <div className='innerExpnRight'>
            <p className='pakagePrice'>{props.userPrice}원</p>
            <p>{props.userPriceText[props.index]}</p>
        </div>
    )
}


export default PtcrpgExpnRightCom;