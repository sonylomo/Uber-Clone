import { GOOGLE_MAPS_APIKEY } from "@env";
import { Image, SafeAreaView, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import NavFavourites from "../components/NavFavourites";
import NavOptions from "../components/NavOptions";
import { setDestination, setOrigin } from "../slices/navSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View style={tw`p-5`}>
        <Image
          source={require("../assets/uberlogo.png")}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
        />
      </View>
      <GooglePlacesAutocomplete
        placeholder="Where From?"
        nearbyPlacesAPI="GooglePlacesSearch"
        enablePoweredByContainer={false}
        fetchDetails={true}
        debounce={400}
        minLength={2}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: details.description,
            })
          );
          dispatch(setDestination(null));
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
      />
      <NavOptions />
      <NavFavourites />
    </SafeAreaView>
  );
};

export default Home;
