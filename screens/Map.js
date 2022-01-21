import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import MapDisplay from "../components/MapDisplay";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideOptionsCard from "../components/RideOptionsCard";
import NavigateCard from "../components/NavigateCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Map = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <MapDisplay />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default Map;
