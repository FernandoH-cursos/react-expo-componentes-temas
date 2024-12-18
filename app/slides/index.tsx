import { useRef, useState } from "react";
import {
  ImageSourcePropType,
  FlatList,
  Image,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { router } from "expo-router";

import {
  ThemedButton,
  ThemedText,
  ThemedView,
} from "@/presentation/components/shared";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../assets/images/slides/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../assets/images/slides/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../assets/images/slides/slide-3.png"),
  },
];

//* En un <FlatList> los siguientes props:
//* - 'onScroll' es un callback que se ejecuta cuando se hace scroll en la lista de items.
//* - 'pagingEnabled' permite que el usuario haga scroll de un item a la vez, es decir, no se puede hacer scroll a la mitad de un item
//*    o hacer scroll muy rápido para que se vean varios items a la vez.
//* - 'scrollEnabled' en false, es para que no se pueda hacer scroll en la lista de items.

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false)

  //* Se ejecuta cuando se hace scroll en la lista de items. Recibe un evento de scroll que contiene la información del scroll en ese 
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isScrollEnabled) return;

    //* 'contentOffset' es el punto de inicio del scroll, es decir, el punto donde se encuentra el scroll en ese momento. Contiene las
    //* siguientes propiedades:
    //* - x: la posición horizontal del scroll en ese momento.
    //* - y: la posición vertical del scroll en ese momento.
    //* - animated: un booleano que indica si el scroll fue animado o no.

    //* 'layoutMeasurement' es el tamaño de la pantalla, es decir, el tamaño de la pantalla en ese momento. Contiene las siguientes
    //* propiedades:
    //* - width: el ancho de la pantalla en ese momento.
    //* - height: el alto de la pantalla en ese momento.
    const { contentOffset, layoutMeasurement } = e.nativeEvent;
    //* 'currentIndex' es el índice del item actual en el que se encuentra el scroll. Se calcula dividiendo la posición horizontal del
    //* scroll entre el ancho de la pantalla y redondeando hacia abajo.
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    //* Si el índice del item actual es igual al índice del último item, se habilita el scroll.
    currentIndex === items.length - 1
      ? setIsScrollEnabled(true)
      : setIsScrollEnabled(false);
  };

  //* Se ejecuta cuando se hace click en el botón 'Siguiente'. Recibe un índice y hace scroll hasta el item con ese índice.
  const scrollToSlide = (index: number) => {
    //* Si no hay una referencia al <FlatList>, no se hace nada. 
    if (!flatListRef.current) return;
    
    //* 'scrollToIndex' es un método que hace scroll hasta el item con el índice que se le pasa como argumento. Recibe un objeto con las
    //* siguientes propiedades:
    //* - index: el índice del item al que se quiere hacer scroll.
    //* - animated: un booleano que indica si el scroll debe ser animado o no.
    flatListRef.current.scrollToIndex({ index, animated: true });
  }

  return (
    <ThemedView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        onScroll={onScroll}
        horizontal
        pagingEnabled
        scrollEnabled={isScrollEnabled}
      />

      {currentSlideIndex === items.length - 1 ? (
        <ThemedButton
          className="absolute bottom-10 right-5 w-[150px]"
          onPress={() => router.dismiss()}
        >
          Finalizar
        </ThemedButton>
      ) : (
        <ThemedButton
          className="absolute bottom-10 right-5 w-[150px]"
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
        >
          Siguiente
        </ThemedButton>
      )}
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

//* En <Image> los siguientes estilos:
//* - width: width * 0.7, para que la imagen ocupe el 70% del ancho de la pantalla
//* - height: width * 0.7, para que la imagen ocupe el 70% del alto de la pantalla
//* - resizeMode: "center", para que la imagen se centre en el contenedor de la imagen
//* - alignSelf: "center", para que la imagen se centre en el contenedor de la pantalla, es decir, en el centro de la pantalla. Se
//* diferencia de 'resizeMode', ya que este último centra la imagen en el contenedor de la imagen, no en la pantalla.
const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();

  const { title, desc, img } = item;

  return (
    <ThemedView
      className="flex-1 rounded p-10 justify-center bg-red-500"
      style={{ width }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />

      <ThemedText
        type="h1"
        className="text-light-primary dark:text-dark-primary"
      >
        {title}
      </ThemedText>

      <ThemedText className="mt-10">{desc}</ThemedText>
    </ThemedView>
  );
};
