import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useRef } from "react";
import ListItem from "../listitem/ListItem";
import "./list.scss";

const List = ({list}) => {

    const title = list.title;

    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setisMoved] = useState(false);

    const handleClick = (dir) => {

        let dist = listRef.current.getBoundingClientRect().x - 50;

        if(dir === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${235 + dist}px)`;
        }

        else if(dir === "right" && slideNumber < 1){
            if(!isMoved)
                setisMoved(true);
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-235 + dist}px)`;
        }
    }

    console.log(list);

    return (
        <div className="list">
            <span className="listtitle">
                {title}
            </span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderarrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
                <div className="container" ref={listRef}>
                    {list.content.map((movie, index) => {
                        return <ListItem listitem={movie} key={index}/>
                    })}
                </div>
                <ArrowForwardIosOutlined className="sliderarrow right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
