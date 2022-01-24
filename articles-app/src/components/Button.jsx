import './Button.css';

export const Button = ({clickHandler, text}) => {
    return (
        <button className="button-color" onClick={clickHandler}>{text}</button>
    )
}