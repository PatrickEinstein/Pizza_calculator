import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import Stackscreen from "../components/stackscreen";
import { useRouter } from "expo-router";
function Open() {
    const router = useRouter();
  
  const savedstuffs = useSelector((state) => state.recipe.saved);
  return (
    <View>
        <Stackscreen title="Open Recipee" icon="home" onPress={() => router.push('/')}/>
        <TouchableOpacity onPress={() =>router.push('/')}>
      {savedstuffs?.map(({ setvalues, recipe }) => (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 100,
              width: "100%",
              padding: 20,
              borderWidth: 3,
              flexDirection: "row",
              justifyContent:"space-between"
              
            }}
          >
             <Icon
              name="folder"
              
              size={30}
              color="white"
            style={{
                width:70,
                height:60,
                borderRadius: 50,
                backgroundColor: "green",
                paddingTop:9,
                paddingLeft:20
              
            }}
            />
            <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
               
            }}
            >
              <Text>{setvalues}</Text>
              <Text>{recipe}</Text>
            </View>
          </View>
        </View>
      ))}
      </TouchableOpacity>
    </View>
  );
}

export default Open;