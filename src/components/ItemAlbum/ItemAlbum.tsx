import React, {Dispatch, SetStateAction} from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import IAlbum from '../../models/Album';

interface ItemAlbumProps {
  album: IAlbum;
  setAlbumSeleccionado: Dispatch<SetStateAction<IAlbum | null>>;
}

const ItemAlbum: React.FC<ItemAlbumProps> = ({album, setAlbumSeleccionado}) => {
  const manejarPress = () => {
    setAlbumSeleccionado(album);
  };

  const imageURL = album.photos ? album.photos[0].thumbnailUrl : '';
  return (
    <TouchableOpacity onPress={manejarPress} style={styles.contenedor}>
      <Image style={styles.image} source={{uri: imageURL}} />
      <Text style={styles.text}>{album.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 8,
    backgroundColor: '#52B788',
    marginVertical: 4,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ItemAlbum;
