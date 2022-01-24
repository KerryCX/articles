import {useState} from "react";
import {Button} from "./Button.jsx";
import "./Article.css";

const getClassExtension = (currentExtension) => currentExtension === "-bg" ? "-text" : "-bg"
export const Article = (props) => {
    const [articleStyle, changeStyle] = useState("-bg")

    return(
        <article className={"article " + ((props.color || "blue") + articleStyle)}>
                    <h2 className={"small-heading"}>{props.title}</h2>
                    <h4 className={"large-heading"}>{props.subtitle}</h4>
                    <p className="content-styling">{props.content}</p>
                        <div className={"button-container"}>
                            <Button clickHandler={() => {
                                console.log(props.title + " " + props.subtitle)
                                }}
                                buttonClasses={"button-styling " + ((props.color || "blue") + articleStyle)}
                                text={"Console.log title and subtitle"}
                            />
                            <Button clickHandler={() => {
                                const newStyle = getClassExtension(articleStyle)
                                changeStyle(newStyle)
                                }}
                                buttonClasses={"button-styling " + ((props.color || "blue") + articleStyle)}
                                text={"Toggle Colours!"}
                            />
                        </div>

                </article>
    );
}