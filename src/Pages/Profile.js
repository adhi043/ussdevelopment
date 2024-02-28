import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'uss.db',
  location: 'default',
});

const Profile =()=>  {


  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    createTable();
    fetchData();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)',
        [],
        () => console.log('Table created successfully'),
        (error) => console.error('Error creating table:', error)
      );
    });
  };

  const fetchData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM items',
        [],
        (_, result) => {
          setData(result.rows.raw());
        },
        (error) => console.error('Error fetching data:', error)
      );
    });
  };




  // Inside the App component

const createItem = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO items (name) VALUES (?)',
      [inputText],
      (_, result) => {
        console.log('Item added successfully');
        setInputText('');
        fetchData();
      },
      (error) => console.error('Error adding item:', error)
    );
  });
};

const deleteItem = (id) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM items WHERE id = ?',
      [id],
      (_, result) => {
        console.log('Item deleted successfully');
        fetchData();
      },
      (error) => console.error('Error deleting item:', error)
    );
  });
};



    return (
      <View>
      <Text  style={{color:'black'}}>SQLite CRUD Example</Text>
      <TextInput
        placeholder="Enter item name"
        placeholderTextColor={'gray'}
        value={inputText}
        style={{color:'black'}}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Add Item" onPress={() => {createItem()}} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={{color:'black'}}>{item.name}</Text>
            <Button title="Delete" onPress={() => {deleteItem(item.id)}} />
          </View>
        )}
      />
    </View>
    )
}

export default Profile
