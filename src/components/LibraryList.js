import  React, { Component } from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props)
        return (
            <Text>Trong Binh </Text>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        libraries: state.libraries,
    };
}

export default connect(mapStateToProps)(LibraryList);