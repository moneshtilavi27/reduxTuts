import React from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';


const ProductList = (props) => {
    const dispatch = useDispatch();
    const { products } = props;

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }

    const renderItem = ({ item }) => (
        <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Price: ${item.price}</Text>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
        </View>
    );

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    productCard: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    productImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
});

export default ProductList;
