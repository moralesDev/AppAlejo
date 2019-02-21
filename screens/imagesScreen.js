import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import MenuButton from '../components/MenuButton'
import Category from '../components/explore/category'
const {height,width} = Dimensions.get('window')
export default class ImageScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation} />
        
        <ScrollView
		scrollEventThrottle={16}
        >
        <View style={{flez: 1, backgroungColor: 'white',paddingTop: 50}}>
        	<Text style={{fontSize:24,fontWeight: '700',paddingHorizontal:20}}>
        		See all the categories we have for you
        	</Text>

        	<View style={{height: 130, marginTop: 20}}>
        		<ScrollView
        		horizontal={true}
        		showsHorizontalScrollIndicator={false}
        		>
        			<Category imageUri={require('../assets/img/img1.jpg')}
        			name='Geometric decoration'/>
        			<Category imageUri={require('../assets/img/img2.jpg')}
        			name='Working in a group'/>
        			<Category imageUri={require('../assets/img/img3.jpeg')}
        			name='Two Person Drawing'/>
        		</ScrollView>
        	</View>

        	<View style={{ marginTop: 40, paddingHorizontal:20}}>
        		<Text style={{ fontSize: 24, fontWeight: '700'}}>
        			Geometric decoration
        		</Text>
        		<Text style={{ fontWeight: '100', marginTop: 10}}>
        			art  creative  creativity  design  geometric  line  yellow
        		</Text>

        		<View style={{width:width-40, height: 200, marginTop: 20}}>
        		<Image source={require('../assets/img/img1.jpg')} 
        		style={{flex:1, height:null,width:null,resizeMode:'cover',
        		borderRadius:5, borderWidth:1, borderColor: '#dddddd'}}/>
        	</View>
        	</View>

        	


        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    marginTop: 24,
  },
  text: {
    fontSize: 30
  } 
});
