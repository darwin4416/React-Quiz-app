import React from 'react';

const QuizNav = (props) => {
    const onNextClick = () => {
        props.next(1)
    }
    const onPrevClick = () => {
        props.next(0)
    }
    return (
        <div className="buttons">
            <button onClick={onPrevClick} disabled={!props.buttonStatus}>Prev</button>
            <button onClick={onNextClick} disabled={!props.buttonStatus}>Next</button>

        </div>
    )
}
export default QuizNav;