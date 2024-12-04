import { useNavigate, useParams } from "react-router-dom";


function PlanPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className='ptcrNav'>  {/* 네비바 */}
                <div onClick={() => navigate('/planpage')}>프로젝트 계획</div>
                <div onClick={() => navigate('/updatepage')}>업데이트</div>
                <div onClick={() => navigate('/commupage')}>커뮤니티</div>
                <div onClick={() => navigate('/reviewpage')}>후기</div>
            </div>
            <h1 style={{textAlign:'center'}}>프로젝트계획페이지입니다.</h1>
        </>
    )
}

export default PlanPage;