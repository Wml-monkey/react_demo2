/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
class Ads extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return(
            <section>
                <div className="ads">
                <img src={require('../images/ads_img.jpeg')} alt="" />
                </div>
            </section>
       )
    }
}

export default Ads;