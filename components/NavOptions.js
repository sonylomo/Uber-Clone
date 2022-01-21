import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "456",
    title: "Get a ride",
    image: "../assets/ubercarblack.png",
    screen: "Map",
  },
  {
    id: "123",
    title: "Order food",
    image: "../assets/wasabi.png",
    screen: "Eat",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={!origin}
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          {console.log(item.image)}
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color={"white"}
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
