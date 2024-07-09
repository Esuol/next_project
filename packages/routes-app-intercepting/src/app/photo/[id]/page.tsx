import { photos } from '../../data';

export default function PhotoPage(params: { params: { id: string } }) {
  const { id } = params.params;
  const photo = photos.find((p) => p.id === id);
  return <img className="block w-1/4 mx-auto mt-10" src={photo?.src} />;
}
