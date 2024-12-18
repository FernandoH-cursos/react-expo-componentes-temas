import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

import { ThemedView } from '@/presentation/components/shared';
import { FadeInImage } from '@/presentation/components/images';


//* Para el Infinite Scroll hay 2 props importantes que se usa en el FlatList, que son:
//* onEndReached -> se dispara cuando el usuario llega al final de la lista y se le pasa una función que se ejecutará 
//* cuando llegue al final de la lista.
//* onEndReachedThreshold -> es un valor entre 0 y 1 que indica que tan cerca del final de la lista se debe disparar el evento.
//* ListFooterComponent -> es un componente que se renderiza al final de la lista, en este caso se renderiza un ActivityIndicator
//* para indicar que se están cargando más elementos al hacer scroll.
const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const primaryColor = useThemeColor({}, 'primary');

  const loadMore = () => {
    const newArray = Array.from({ length: 10 }, (_, i) => i + numbers.length + 1);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    },3000);
  }

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: "center"}}>
            <ActivityIndicator
              size={40}
              color={primaryColor}
            />
          </View>
        )}
      />
    </ThemedView>
  );
};

export default InfiniteScrollScreen;

interface ListItemProps { 
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        width: "100%",
        height: 400,
      }}
    />
  );
};
