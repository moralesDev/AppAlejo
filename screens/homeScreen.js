import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import MenuButton from '../components/MenuButton'

export default class HomeScreen extends React.Component {

constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.container}>
      	<MenuButton navigation={this.props.navigation} />
        <View style={{flez: 1, backgroungColor: 'white',paddingTop: 50}}>
        	<Text style={{fontSize:24,fontWeight: '700',paddingHorizontal:20}}>
        		Create new idea
        	</Text>
        	 <TextInput
		        style={{height: 60, borderColor: 'gray', borderWidth: 1}}
		        onChangeText={(text) => this.setState({text})}
		        value={this.state.text}
		      />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 24,
  },
  text: {
    fontSize: 30
  } 
});
