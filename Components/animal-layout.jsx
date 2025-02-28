

import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import Header from "./header";
import {CardAnimal} from "./cards";
import AnimalModal from "./UI/animal-modal";
import SearchBar from "./UI/search-bar";
import DownloadsDropdown from "./UI/filter-dropdown";
import FilterDropdown from "./UI/filter-dropdown";
export default function AnimalLayout(){
    const farms = [
        { name: 'Cordillera',  },
        { name: 'Paraiso' },

    ];
    const divitions = [
        {name:"Selva"},
        {name:"Sabana"},
        {name:"arroyo"}
    ];


    return (
        <ScrollView className="bg-white flex-1">
            <View>
                <Header />

                <Text
                    className="text-center text-[#314D4D] text-4xl my-6"
                    style={{ fontFamily: "Roboto_900Black" }}
                >
                    Animales
                </Text>
                <View className="flex flex-col justify-center  mb-5">
                    <SearchBar/>
                </View>

                <View className="flex flex-row justify-between mx-6 mb-5">

                    <FilterDropdown files={
                        farms

                    } placeHolder="Finca"



                    />
                    <FilterDropdown files={divitions} placeHolder="división" />
                </View>

                <CardAnimal />
                <AnimalModal />

            </View>
        </ScrollView>
    );
}