import React, { Component } from 'react'; 
import FavoriteItem from '../FavoriteItem/FavoriteItem'; 
import {connect} from 'react-redux'; 


export class FavoritesList extends Component {
    componentDidMount(){
        console.log(this.props.reduxState)
        this.props.dispatch({type:'GET_ALL_FAVORITES'})
    }
    
    render() {
        return (
            <div>
                <ul>
                {this.props.reduxState.giphyFavorites.map((gif, i) =>{
                    return(
                        <FavoriteItem key={i} gif={gif}/>
                        
                    );
                })}
                </ul> 
                
            </div>
        );//end return
    }//end render
}//end class

const mapReduxStateToProps = (reduxState) => ({reduxState}); 

export default connect(mapReduxStateToProps)(FavoritesList);