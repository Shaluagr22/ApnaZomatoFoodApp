import { Pressable, StyleSheet, Text, View ,Image, FlatList} from 'react-native'
import React from 'react';

const FoodCategories = () => {
    const data = [
        {
            id:1,
            image: 'https://th.bing.com/th/id/R.0be90d84e2ab6f8a8b12224e96166072?rik=mxaA6xfJx6ziEg&riu=http%3a%2f%2ftastyk-4ec7.kxcdn.com%2fwp-content%2fuploads%2f2016%2f07%2fHealthy-Vegan-Pizza.jpg&ehk=%2bEPqP%2bcThpnmFRGacgGGoy0ya3GWbMb7%2f%2fp0WPXrHbY%3d&risl=&pid=ImgRaw&r=0',
            name: 'Pizza',
        },
        {
            id:2,
            image: 'https://www.cityam.com/wp-content/uploads/2020/01/Screenshot-2020-01-06-at-10.55.39.png',
            name: 'Burger',
        },
        {
            id:3,
            image: 'https://th.bing.com/th/id/R.a7429a3a97f3c3ff160173ef34a86687?rik=PFeVCP2fNLU0Qg&riu=http%3a%2f%2fwww.relishthebite.com%2fwp-content%2fuploads%2f2015%2f01%2fVegbiryani.jpg3_.jpg&ehk=%2bgOFPRke9SCo1XnHVQGHqjNha%2fj%2fUACEiSA1gg7zQyQ%3d&risl=&pid=ImgRaw&r=0',
            name: 'Biryani',
        },
        {
            id:4,
            image: 'https://th.bing.com/th/id/OIP.XSCo5S6kP3o-7-jVqH4vGgHaE8?pid=ImgDet&rs=1',
            name: 'Dosa',
        },
        {
            id:5,
            image: 'https://recipes.timesofindia.com/photo/52416693.cms?imgsize=53280',
            name: 'Pav-Bhaji',
        },
        {
            id:4,
            image: 'https://www.samtell.com/hubfs/Blogs/Four-Scrumptous-Tacos-Lined-up-with-ingredients-around-them-1.jpg#keepProtocol',
            name: 'Tacos',
        },
    ]
  return (
    <View>
      <Text style={{color:'#000',fontSize:24,fontWeight:'bold',marginLeft:10}}>Eat what makes you happy</Text>
<FlatList data={data}
showsHorizontalScrollIndicator={false}
horizontal
renderItem={({item})=>(
    <Pressable style={{margin:6}}>
        <View style={{width:100,height:100,backgroundColor:'gray',borderRadius:100}}>
        <Image
        source={{uri:item.image}}
        style={{width:100,height:100,borderRadius:100}}
        />
        </View>
        <Text style={{fontSize:16,color:'#000',fontWeight:'bold',textAlign:'center'}}>{item.name}</Text>
    </Pressable>
)}
/>
    </View>
  )
}

export default FoodCategories

const styles = StyleSheet.create({})