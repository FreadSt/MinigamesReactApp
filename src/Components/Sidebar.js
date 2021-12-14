import React from "react";
import "../App.css";
import {SidebarData} from "./SidebarData"


function Sidebar () {
    return (
        <div className="Sidebar"> 
            <ul>
                {SidebarData.map((val, key) => {
                    return (<li 
                               key={key} 
                               onCkick={()=> {window.location.pathname = val.link}}
                            > 
                                {" "}
                                <div>{val.tittle}</div>{" "}
                            </li>
                            )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;