"use client"
import Bloc from "./bloc"

const Suggestion =() => {
    const suggestion = [
        {
            nom:"Conçu pour Pravin Wijay", 
            artistes: "Werenoi, Kaaris, Post Malone, Drake", 
            images: [
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2jUoD0-default.jpg",
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0KXyyQ-default.jpg",
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1aBeik-default.jpg",
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2h63Cw-default.jpg"
            ],
            description:"Ces playlists sont conçues en fonction de vos goûts musicaux."
        },
        {
            nom:"Réécoutez vos ancien favoris", 
            artistes: "Eminem, Snoop Dogg, SCH, Gims", 
            images: [
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO4gTUOY-default.jpg",
                "https://www.cygnusmusic.net/wp-content/uploads/2023/06/This-Is-Playlist.jpg",
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1kKoc8-default.jpg",
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0lhGr6-default.jpg"
            ],
            description:"Retrouvez vos morceaux préférés de l'année dernière et d'avant."
        },
        {
            nom:"À écouter en famille", 
            artistes: "Damso, Vald, Rim'K, Ninho", 
            images: [
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1G9baM-default.jpg",
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO26xkaI-default.jpg",
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1gIYPS-default.jpg",
                "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO44Az3q-default.jpg"
            ],
            description:"Pour les moments de partage en famille, voici des playlists à écouter ensemble."
        },
    ]

    return (
        <div className="flex flex-col gap-2">
        {
            suggestion.map((value, index)=>{
                return <div key={index}>
                    <Bloc bloc={value}/>                   
                </div>
            })
        }
        </div>
    )
}

export default Suggestion;