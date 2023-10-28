import React from "react";
import './index.css';

import {updatecou} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const Reaction = ({
        tweet = {}
    }) => {

    const dispatch = useDispatch();

    const likes = (id) => {
        dispatch(updatecou(id))
    }

    return (
        <div className="wd-icons row" style={{ paddingTop: "10px" }}>
            <div className="col-3">
                <i className="bi bi-chat"></i> {tweet.replies}
            </div>
            <div className="col-3">
              <i className="bi bi-arrow-bar-up"></i> {tweet.retuits}
            </div>
            <div className="col-3">
                <a  onClick={() => likes(tweet._id)}>
                    {tweet.liked && <i className="bi bi-heart-fill" style={{color: "red"}}></i>}
                    {!tweet.liked && <i className="bi bi-heart"></i>}
                </a> {tweet.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
}

export default Reaction;