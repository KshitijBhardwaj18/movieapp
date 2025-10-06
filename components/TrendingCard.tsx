import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`}>
      <View>
        <Text>TrendingCard</Text>
      </View>
    </Link>
  );
};

export default TrendingCard;
