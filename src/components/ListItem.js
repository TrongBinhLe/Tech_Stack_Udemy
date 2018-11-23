import React, {Component} from 'react';
import {Text,
        StyleSheet,
        TouchableWithoutFeedback,
        View,
        LayoutAnimation,
        NativeModules
    } from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component{
    
    componentWillUpdate(){
    LayoutAnimation.spring();
    }
    renderContent(){
        const {descriptStyle} = styles;
        const{expanded,library} = this.props;
        console.log(library.description);
        if(expanded){
            return (
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
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
    },
    descriptStyle:{
      flex: 1,  
    }
})
 const mapStateToProps = (state, ownProps) => {
     const expanded = state.selectedLibraryId === ownProps.library.id;
    return {       
        expanded : expanded
    }
}
export default connect(mapStateToProps,actions)(ListItem);