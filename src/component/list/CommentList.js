import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    // &는 parent selector
    // >는 child selector *는 전체를 의미
    // 해당 부모 element의 모든 자식 스타일을 적용하기위한 select
    & > * {
        // 마지막이 아닌 element들에게만 하단에 margin을 16px주겠다는 뜻
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const { comments } = props;

    return (
        <Wrapper>
            {comments.map((comment, index) => {
                return <CommentListItem key={comment.id} comment={comment} />;
            })}
        </Wrapper>
    );
}

export default CommentList;