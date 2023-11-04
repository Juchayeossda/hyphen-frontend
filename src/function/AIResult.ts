// 인공지능 디텍션 값 -> 결과값(현재 심리 상태) 도출

// names: ['나무전체', '기둥', '수관', '가지', '뿌리', '나뭇잎', '꽃', '열매', '그네', '새', '다람쥐'(10), '구름', '달', '별', '사람전체', '머리', '얼굴', '눈', '코', '입', '귀'(20), '머리카락', '목', '상체', '팔', '손', '다리', '발', '단추', '주머니', '운동화'(30), '남자구두', '여자구두', '집전체', '지붕', '집벽', '문', '창문', '굴뚝', '연기', '울타리'(40), '길', '연못', '산', '나무', '잔디', '태양']
const AIResult = (detectObject:any) => {
    // 나무 그리라고 했을 때

    // 죽은 나무
    if(
        // 나무전체
        detectObject.includes("0") &&
        // 기둥
        detectObject.includes("1") &&
        // 가지
        detectObject.includes("2") &&
        // 나뭇잎 없음
        !detectObject.includes("5") &&
        // 꽃 없음
        !detectObject.includes("6") &&
        // 열매 없음
        !detectObject.includes("7")
    ){
        return RESULTTEXT[0]
    }

    //열매 나무
    if(
        // 나무전체
        detectObject.includes("0") &&
        // 기둥
        detectObject.includes("1") &&
        // 가지
        detectObject.includes("2") &&
        // 열매
        detectObject.includes("7")
    ){
        return RESULTTEXT[1]
    }

    // 뿌리 있는 나무
    if(
        // 나무전체
        detectObject.includes("0") &&
        // 기둥
        detectObject.includes("1") &&
        // 가지
        detectObject.includes("2") &&
        // 뿌리
        detectObject.includes("4") &&
        // 열매 없음
        detectObject.includes("7")
    ){
        return RESULTTEXT[2]
    }

    // 내 뇌피셜
    return RESULTTEXT[3]
}

export default AIResult

/*
기둥, 가지 0
나머지 X
=> 죽은 나무
힘드신가요?

공허함, 좌절감이 가득하시군요.
의욕이 모두 상실된 상태이네요.
치료가 필요해 보여요.
--------
기둥, 가지, 열매 0
=> 사과 나무(열매 나무의 스테레오 타입)
번아웃을 조심하세요

욕심이 많아요.
항상 완벽하고 싶어해요.
현실적인 목표를 세워보세요.
--------
기둥, 가지, 나뭇잎, 뿌리 0
=> 뿌리를 강조한 나무
과거의 자신에게 얽매이지 마세요

스스에 대한 확신이 없어요.
자신이 어떤 존재인지 알아내고자 해요.
미성숙하거나 불안했던 과거가 마음 한 켠에 머물러 있어요.
*/

const RESULTTEXT =[
    [
        "sad",
        "힘드신가요?",
        "공허함, 좌절감이 가득하시군요.\n의욕이 모두 상실된 상태이네요.\n치료가 필요해 보여요."
    ],[
        "perfect",
        "번아웃을 조심하세요",
        "욕심이 많아요.\n항상 완벽하고 싶어해요.\n현실적인 목표를 세워보세요."
    ],[
        "anxietyPast",
        "과거의 자신에게 얽매이지 마세요",
        "스스에 대한 확신이 없어요.\n자신이 어떤 존재인지 알아내고자 해요.\n미성숙하거나 불안했던 과거가 마음 한 켠에 머물러 있어요."
    ],[
        "good",
        "자신의 인생을 잘 살아나가고 있어요.",
        "스트레스를 해소하는 방법을 알아요.\n조금 외로울 수 있어요.\n자신이 나아가고자 하는 방향을 알고 있어요."
    ]
]
