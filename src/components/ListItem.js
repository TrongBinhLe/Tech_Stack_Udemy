import React, {Component} from 'react';
import {Text,StyleSheet,TouchableWithoutFeedback,View} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component{

    renderContent(){
        const{selectedLibraryId,library} = this.props
        console.log(this.props.library.description);
        if(selectedLibraryId === library.id){
            return (
                <Text>{library.description}</Text>
            );
        }
    }
    render(){
        const {titleStyle} = styles;
        const {id,title,descript} = this.props.library;
        console.log();
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
    return {       
        selectedLibraryId : state.selectedLibraryId
    }
}
export default connect(mapStateToProps,actions)(ListItem);