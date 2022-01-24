import "./Article.css";

export const Button = ({clickHandler, text, buttonClasses}) => {
    return (
        <button className={buttonClasses} onClick={clickHandler}>{text}</button>
    );
}