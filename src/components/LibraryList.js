import  React, { Component } from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import ListItem from './ListItem';
import {connect} from 'react-redux';

class LibraryList extends Component {
    
    renderItem=({item})=>(
            <ListItem library = {item}/>
    )
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data = {this.props.libraries}
                    keyExtractor = {(item)=>item.key}
                    renderItem = {this.renderItem}
                />
            </View>   
        );     
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        libraries: state.libraries,
    };
}
export default connect(mapStateToProps)(LibraryList);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 150,
      marginBottom: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#5fff',
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 100,
      borderRadius: 2,
    },
    email: {
      color: 'red'
    }
});