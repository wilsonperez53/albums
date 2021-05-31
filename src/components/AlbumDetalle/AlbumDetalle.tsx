import React, {Dispatch, SetStateAction} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import IAlbum from '../../models/Album';

interface AlbumDetalleProps {
  album: IAlbum;
  setAlbumSeleccionado: Dispatch<SetStateAction<IAlbum | null>>;
}

const AlbumDetalle: React.FC<AlbumDetalleProps> = ({
  album,
  setAlbumSeleccionado,
}) => {
  const imageURL = album.photos ? album.photos[0].url : '';
  return (
    <View>
      <Image style={styles.image} source={{uri: imageURL}} />
      <Text>{album.title}</Text>
      <Text>User: {album.users ? album.users[0].name: 'No User'}</Text>
      <Text>Web:  {album.users ? album.users[0].website: 'No URL'}</Text>
      <Button title="Ir Atrás" onPress={() => setAlbumSeleccionado(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});

export default AlbumDetalle;
