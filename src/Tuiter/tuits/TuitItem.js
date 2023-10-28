import React from "react";
import Reactions from "./TuitStats"

import {deleteTuit} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const TuitItem = ({ post }) => {

    const dispatch = useDispatch();

    const deletet = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="wd-tweet">
                <div className="profile">
                    <img src={`${post.image}`} alt="profile_pic"/>
                </div>
                <div className="content">
                    <div>
                        <i className="bi bi-x-lg float-end" onClick={() => deletet(post._id)}></i>
                    </div>
                    <span className="wd-name">
                        {post.userName} <span><i className="bi bi-patch-check-fill" style={{color : 'blue'}}></i></span>
                        &nbsp;
                        <span className="wd-username">{post.handle}</span>&nbsp;
                        &middot;
                        <span className="wd-time"> {post.time}</span>
                    </span>
                    <div className="wd-para">
                        <p>{post.tuit}</p>
                    </div>
                    <Reactions tweet={post}/>
                </div>
            </div>
        </li>
    );
}

export default TuitItem;