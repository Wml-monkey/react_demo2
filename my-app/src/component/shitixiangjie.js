/**
 * Created by Administrator on 2018/7/2.
 */
import React from 'react';
class Xiangjie extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }
    render(){
        let {cont} = this.props;
        return(
            <div className="ti_xiangqing">
                <p>试题详解：</p>
                <div className="ti_introduce">
                    <p dangerouslySetInnerHTML={{ __html: cont.explain }}  />
                </div>
            </div>
        )
    }
};
export default Xiangjie;