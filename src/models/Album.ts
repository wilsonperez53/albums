import Photos from "./Photos";
import IUsers from "./Usuario";

export default interface IAlbum {
  id: number;
  userId: number;
  title: string;
  photos?: Photos[];
  users?: IUsers[];
}
