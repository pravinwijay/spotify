import React, { useState } from 'react';
import AddPlaylistForm from './addPlaylistForm.jsx';

const Bloc = ({bloc}) => {
    const [showForm, setShowForm] = useState(false);
    const [artistes, setArtistes] = useState(bloc.artistes.split(','));
    const [images, setImage] = useState(bloc.images);

    const addToPlaylist = (newArtiste, newImage) => {
        setArtistes([...artistes, newArtiste]);
        setImage([...images, newImage]);
    }

    return (
        <div className="border-2 border-black rounded-xl bg-white p-6 m-6">
            <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full hover:bg-green-700 mb-2" 
                onClick={() => setShowForm(!showForm)}>
                    Ajouter une playlist
            </button>

            {showForm && <AddPlaylistForm onAdd={addToPlaylist} />}

            <p className="text-2xl font-bold mb-3" >{bloc.nom}</p>
            <div className="flex space-x-4">
            {images.map((image, index) => (
                <img key={index} src={image} className="w-64 h-64 hover:scale-110 duration-300 rounded-xl hover:opacity-40"/>
            ))}
            </div>
            <p className="mt-4 font-bold">{artistes.join(", ")}</p>
            <p>{bloc.description}</p>
        </div>
    )
}
export default Bloc;