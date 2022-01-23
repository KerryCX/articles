import './Button.css';

export const Button = ({clickHandler, text}) => {
    return (
        <button className="button-container" onClick={clickHandler}>{text}</button>
    )
}