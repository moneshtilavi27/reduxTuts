import { StyleSheet, Text, View } from "react-native";
import ProductList from "../component/product";
import Cart from "../component/Cart";
import { useSelector } from "react-redux";

const DetailsScreen = (props) => {

    const cartData = useSelector((state) => state.reducer);

    const products = [
        { id: 1, name: 'Product 1', price: 29.99, image: 'https://m.media-amazon.com/images/I/71aiqeP-APL._AC_UF1000,1000_QL80_.jpg' },
        { id: 2, name: 'Product 2', price: 49.99, image: 'https://i03.appmifile.com/973_item_in/12/07/2024/ed87cc37fd5bfa5f2a852f166e40c865.png' },
        { id: 3, name: 'Product 3', price: 19.99, image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/303514632/QY/QW/IV/188256935/xiaomi-redmi-note-12-pro-5g-256gb-8gb-ram-gsm-unlocked-global-version-new--500x500.jpg' },
    ];

    


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Product Listing</Text>
            <ProductList products={products} />
            {(cartData.length > 0) && <Cart cart={cartData} />}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    cartItem: {
        fontSize: 18,
        marginVertical: 5,
    },
});


export default DetailsScreen;
