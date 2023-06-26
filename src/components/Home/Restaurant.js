import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Restaurant = () => {
  const data = [
    {
      id: 8,
      image: 'https://cookwithrenu.com/wp-content/uploads/2020/09/Rajasthani-Thali_Featured-Image.jpg',
      name: 'Veggies',
      cuisines:'Rajasthani,Chinese,North-Indian',
      address:'Ghodbunder road',
      rating:4.6,


    },
    {
      id: 9,
      image: 'https://th.bing.com/th/id/OIP.RWxHHdgNaidR3t5IX6hkmAHaE8?pid=ImgDet&rs=1',
      name: 'ChineseFood',
      cuisines:'Chinese',
      address:'Manpada Road',
      rating:4.2,
    },
    {
      id: 10,
      image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=4000x3000:format=jpg/path/s5a2dee3a606a2f74/image/if2910502d44911fc/version/1527263949/image.jpg',
      name: 'Pizzataria',
      cuisines:'Italian,Mexicon',
      address:'Near Viviana Mall',
      rating:4.8,
    },
    {
      id: 11,
      image: 'https://th.bing.com/th/id/R.5b903cf15be6c226df356d84a83ca7c3?rik=m7JxwYDxk0csyg&riu=http%3a%2f%2fwww.readersdigest.ca%2fwp-content%2fuploads%2f2015%2f11%2fgourmet-burger.jpg&ehk=rkRu6XYjGWaKdF%2f%2fRax0o00Xt84b6WWZbYUQ1WT0ETw%3d&risl=&pid=ImgRaw&r=0',
      name: 'BurgerQueen',
      cuisines:'Italian,Indian',
      address:'M.G.road',
      rating:4.1,
    },
  ];
  return (
    <View>
      <FlatList data={data}
        renderItem={({ item }) => (
          <View style={{backgroundColor:'#f0f0f0'}}>
          <View style={{margin:10}}>
            <Image source={{ uri: item.image }} style={{width:'100%', aspectRatio: 6 / 4,borderTopLeftRadius:7,borderTopRightRadius:7 }} />
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{padding:8}}>
            <Text style={{fontSize:17,fontWeight:'600',color:'#000'}}>{item.name}</Text>
            <Text style={{fontSize:15,fontWeight:'600',color:'gray'}}>{item.cuisines}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text>{item.rating}</Text>
              <AntDesign name='star' size={18} color={'black'}/>
            </View>
            </View>
            </View>
          </View>
        )} />
    </View>
  )
}

export default Restaurant

const styles = StyleSheet.create({})