import {useState} from "react";
import {Button} from "./Button.jsx";
import "./Article.css";

const getClassExtension = (currentExtension) => currentExtension === "-bg" ? "-text" : "-bg"
export const Article = (props) => {
    const [articleStyle, changeStyle] = useState("-bg")

    return(
    // eslint-disable-next-line
        <article className={"article" + " " + ((props.color || "blue") + articleStyle)}>

                    <h2 className={"small"}>{props.title}</h2>
                    <h4 className={"big"}>{props.subtitle}</h4>
                    <p>{props.content}</p>
                    <div className={"button-container"}>
                        <button className={"button-color"} onClick={() => {
                            console.log(props.title + " " + props.subtitle)
                            }}>Console.log title and subtitle
                        </button>
                        <button className={"button-color"} onClick={() => {
                            const newStyle = getClassExtension(articleStyle)
                            changeStyle(newStyle)
                             }}>Toggle Colours!
                        </button>
                        <Button clickHandler={()=>{
                            const newStyle = getClassExtension(articleStyle)
                            changeStyle(newStyle)
                            }}
                            text={"Toggle Colours!"}
                        />
                    </div>
                </article>
    );
}