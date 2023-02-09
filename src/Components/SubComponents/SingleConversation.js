import React from "react";
import userImg from '../../Assets/userimg.jpg';
import {Button} from 'antd';
import {LikeOutlined, StarOutlined} from '@ant-design/icons';

function SingleConversation(){
    return(
        <div className="scWrapper">
            <div className="userImg">
                <img src={userImg} />
            </div>
            <div className="userContent">
                <div className="usrName">
                    Alma Andrews
                </div>
                <div className="cnvTitle">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                </div>
                <div className="cnvBrief">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </div>
                <div className="cnvActions">
                    <div className="ctaBtn">
                        <Button>Reply</Button>
                    </div>
                    <div className="reactions">
                        <span className="like"><LikeOutlined className="icon" /> 62</span>
                        <span className="rate"><StarOutlined className="icon" /> 18</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleConversation;