import React from 'react';
import * as S from "./style"
// import TestVideo from "../../../assets/testVideo.mp4"

const PsyTest = () => {
    return (
        <S.PsyTestLayout>
            <h1>심리검사 페이지 입니다.</h1>
            <strong>현재 구현된 인공지능 시연 영상입니다.</strong>
            {/*<video width="320" height="240">
                <source src="../../../assets/testVideo.mp4" type="video/mp4"/>
                이 문장은 비디오가 재생되지 않을 때 표시됩니다.
            </video>
            
        */}
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/lIrExpEYLqg?si=KoFwQudP-uToYAhP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </S.PsyTestLayout>
    );
};

export default PsyTest;