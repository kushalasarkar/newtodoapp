import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

export default function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const addTodo = (text) => {
    setTodo(text);
  }
  const updateTodos = (e) => {
    setTodos((a) => [
      ...a, todo,
    ]);
    // e.preventDefault();
    // setTodos((e)=>[...e,todo]);
    // setTodos([...todos,todo]);

  }

  return (
    <View style={styles.container}>
      <View style={styles.iptextview}>
        <TextInput style={styles.iptext} placeholder='Enter text'
          onChangeText={addTodo}
        // onKeyPress={(e) => { e.preventDefault() }}
        ></TextInput>
        <View style={styles.addbuttonview}>
          <Button title='Add'
            style={styles.addbutton}
            onPress={updateTodos}
          />
        </View>
      </View>


      <View style={styles.todolistcontainer}>
        <View>
          {/* <Text>asda adada</Text> */}
          <View >
            <ScrollView>
              {todos.map((tod, index) =>
                <Text style={styles.todoitem} key={index}>{tod}</Text>
              )}
            </ScrollView>

          </View>
        </View>
        <StatusBar style="auto" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:"30",
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  iptextview: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#A79277",

  },
  iptext: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
    height: 50,
    color: "white",
    borderColor: "white",

  },
  
  todolistcontainer: {
    flex: 3,
    backgroundColor: "#FFF2E1",
    color: "#A79277",
    width: "30"
  },
  todoitem:{
    // borderWidth:1,
    margin:5,
    padding: 15,
    backgroundColor:"#EAD8C0",
    // color:"#A79277",
  }

});
