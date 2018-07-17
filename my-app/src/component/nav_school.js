/**
 * Created by Administrator on 2018/6/26.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navschool extends Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[
                {
                    eng:"paihang",
                    ch:"排行"
                },
                {
                    eng:"juli",
                    ch:"距离"
                },
                {
                    eng:'koubei',
                    ch:'口碑'
                },
                {
                    eng:'price',
                    ch:'价格'
                }
            ]
        }
    }
    render(){
        // console.log(this.props);
        let {id,nav_arr} = this.props;
        let {arr} = this.state;
        let new_arr = arr.map((e,i)=>{
            let temp = "/school/"+e.eng;
            let classname = e.eng === id?"active":'';
            return  <Link key={i} to={temp}><li className={classname}>{e.ch}</li></Link>
        });
        return(
            <ul className="nav clear">
                {new_arr}
                <li className="li_more">更多</li>
            </ul>
        )
    }
}
export default Navschool;