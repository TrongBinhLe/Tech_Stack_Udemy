import React, {Component} from 'react';
import {Text,StyleSheet,TouchableWithoutFeedback,View} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component{

    renderContent(){
        const{expanded,library} = this.props
        console.log(library.description);
        if(expanded){
            return (
                <Text>{library.description}</Text>
            );
        }
    }
    render(){
        const {titleStyle} = styles;
        const {id,title,descript} = this.props.library;
        return(
            <TouchableWithoutFeedback onPress = {()=>this.props.selectLibrary(id)}>        
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderContent()} 
                </View>    
            </TouchableWithoutFeedback>
        );
    }
}

const styles =  StyleSheet.create({
    titleStyle : {
        fontSize : 18,
        paddingLeft: 15
    }
})
 const mapStateToProps = (state, ownProps) => {
     const expanded = state.selectedLibraryId === ownProps.library.id;
    return {       
        expanded : expanded
    }
}
export default connect(mapStateToProps,actions)(ListItem);