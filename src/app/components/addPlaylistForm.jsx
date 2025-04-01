import React, { useState } from 'react';

const AddPlaylistForm = ({onAdd}) => {
    const [artiste, setArtiste] = useState('');
    const [image, setImage] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (artiste.trim() && image.trim()) {
            onAdd(artiste, image); 
            setArtiste(""); 
            setImage("");
        }
    }

    return (
        <div className="border-2 border-black rounded-xl bg-white p-6 m-6">
            <label className="block mb-2 font-bold">Nom de l’artiste :</label>
            <input 
                type="text" 
                className="border p-2 w-full mb-2 rounded-xl" 
                placeholder="Entrez le nom de l'artiste" 
                value={artiste}
                onChange={(e)=>setArtiste(e.target.value)} />

            <label className="block mb-2 font-bold">L'image de la playlist :</label>
            <input 
            type="text" 
            className="border p-2 w-full mb-2 rounded-xl" 
            placeholder="Entrez l'URL de l'image"
            value={image}
            onChange={(e)=>setImage(e.target.value)}/>
            
            <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700 mt-4" onClick={handleSubmit}>
                Enregistrer
            </button>
        </div>
    );
}

export default AddPlaylistForm;

// MJ : https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1SVXaM-default.jpg
// Niska : https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO4w4Ubm-default.jpg
// Future : https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO133u6s-default.jpg
