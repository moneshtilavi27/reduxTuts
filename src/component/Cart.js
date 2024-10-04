import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/action';

// Cart component to display the items in the cart
const Cart = ({ cart }) => {
    const dispatch = useDispatch();

    const remove = (productId) => {
        dispatch(removeFromCart(productId));
    };

  return (
    <View style={styles.cartContainer}>
      <Text style={styles.heading}>Shopping Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <View>
          {cart.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Text style={styles.cartItemText}>
                {item.name} - ${item.price}
              </Text>
              <Button
                title="Remove"
                color="#f4511e"
                onPress={() => remove(item.id)} // Call the remove function with item ID
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItemText: {
    fontSize: 18,
  },
});

export default Cart;
