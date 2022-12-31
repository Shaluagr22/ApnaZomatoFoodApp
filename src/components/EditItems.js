import { StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View, PermissionsAndroid, Image } from 'react-native'
import React, { useDeferredValue, useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { useRoute,useNavigation } from '@react-navigation/native';



const EditItems = () => {
    const route = useRoute();
    const navigation= useNavigation();
    const [imageData, setImageData] = useState({
        assets: [{ uri: route.params.data.imageURL }]
    });
    const [name, setName] = useState(route.params.data.name);
    const [price, setPrice] = useState(route.params.data.price);
    const [discountPrice, setDiscountPrice] = useState(route.params.data.discountPrice);
    const [description, setDescription] = useState(route.params.data.description);
    const [imageURL, setImageURL] = useState('');
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
                openGallery();
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    const openGallery = async () => {
        const result = await launchCamera({ mediaType: 'photo' });
        if (result.didCancel) {
        }
        else {
            console.log(result);
            setImageData(result);
        }
    };
    const uploadImage = async () => {
        const reference = storage().ref(imageData.assets[0].fileName);
        const pathToFile = imageData.assets[0].uri;
        // uploads file
        await reference.putFile(pathToFile);
        const url = await storage()
            .ref(imageData.assets[0].fileName).getDownloadURL();
        console.log(url);
        uploadItem(url);
    };
    const uploadItem = () => {
        firestore()
            .collection('items')
            .doc(route.params.id)
            .update({
                name: name,
                price: price,
                discountPrice: discountPrice,
                description: description,
                imageURL: route.params.data.imageURL + '',

            })
            .then(() => {
                console.log('User added!');
                navigation.goBack();
            });
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>EDIT ITEMS</Text>
                </View>
                {imageData !== null ? (
                    <Image source={{ uri: imageData.assets[0].uri }} style={styles.imageStyle} />
                ) : null}
                <TextInput
                    placeholder='Enter Item Name'
                    style={styles.inputStyle}
                    value={name}
                    onChangeText={text => setName(text)} />
                <TextInput
                    placeholder='Enter Item Price'
                    style={styles.inputStyle}
                    value={price}
                    onChangeText={text => setPrice(text)} />
                <TextInput
                    placeholder='Enter Item Discount Price'
                    style={styles.inputStyle}
                    value={discountPrice}
                    onChangeText={text => setDiscountPrice(text)} />
                <TextInput
                    placeholder='Enter Item Description'
                    style={styles.inputStyle}
                    value={description}
                    onChangeText={text => setDescription(text)} />
                <TextInput
                    placeholder='Enter Item Image URL'
                    style={styles.inputStyle}
                    value={imageURL}
                    onChangeText={text => setImageURL(text)} />
                <Text style={{ marginTop: 20, alignSelf: 'center' }}>Or</Text>
                <TouchableOpacity style={styles.pickBtn}
                    onPress={() => {
                        requestCameraPermission();
                    }}>
                    <Text style={{ fontSize: 18, }}>Pick Image from Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.uploadBtn}
                    onPress={() => {
                        uploadItem();
                    }}>
                    <Text style={{ color: '#fff', fontSize: 18, }}>Upload Item</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default EditItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 60,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '700',
    },
    inputStyle: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1.5,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        alignSelf: 'center',
        fontSize: 18,
    },
    pickBtn: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    uploadBtn: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#5246f2',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: 'center',
        marginBottom: 80,
    },
    imageStyle: {
        marginTop: 20,
        alignSelf: 'center',
        height: 200,
        width: '90%',
        borderRadius: 10,
    },
})