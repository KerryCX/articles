import {useState} from "react";
import {Button} from "./Button.jsx";
import "./Button.css"

import "./Article.css";

const getClassExtension = (currentExtension) => currentExtension === "-bg" ? "-text" : "-bg"
export const Article = (props) => {
    const [articleStyle, changeStyle] = useState("-bg")

    return(
    // eslint-disable-next-line
        <article className={"article" + " " + ((props.color || "blue") + articleStyle)}>

                    <h2 className={"small-heading"}>{props.title}</h2>
                    <h4 className={"large-heading"}>{props.subtitle}</h4>
                    <p className="content-styling">{props.content}</p>
                    <section className="buttons-box">
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
                    </section>
                </article>
    );
}