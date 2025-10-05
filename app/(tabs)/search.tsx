import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const func = async () => {
      if (searchQuery) {
        await loadMovies();
      } else {
        reset();
      }

      func();
    };
  }, [searchQuery]);
  return (
    <View className="flex-1 bg-primary ">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="flex flex-col items-center justify-center mt-20">
              <Image className="w-12 h-10   mb-2 mx-auto" source={icons.logo} />
              <View className="my-5 w-full">
                <SearchBar
                  placeholderText="Search for a move "
                  value={searchQuery}
                  onChangeText={(text: string) => setSearchQuery(text)}
                />
              </View>

              {moviesLoading && (
                <ActivityIndicator
                  size="large"
                  color="0000ff"
                  className="my-3"
                />
              )}

              {moviesError && (
                <Text className="text-red-500 px-5 my-3">
                  Error: {moviesError.message}
                </Text>
              )}

              {!moviesLoading &&
                !moviesError &&
                searchQuery.trim() &&
                movies?.length > 0 && (
                  <Text className="text-xl font-bold text-white">
                    Search results for {searchQuery}
                    <Text className="text-accent"></Text>{" "}
                  </Text>
                )}
            </View>
          </>
        }
      />
    </View>
  );
};

export default Search;
