import Bloc from "./bloc"

const Suggestion =() => {
    const suggestion = [
        {
            nom:"Conçu pour Pravin Wijay", 
            description: "Werenoi, Kaaris, Post Malone et Drake", 
            image1:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2jUoD0-default.jpg",
            image2:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0KXyyQ-default.jpg",
            image3:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1aBeik-default.jpg",
            image4:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2h63Cw-default.jpg"
        },
        {
            nom:"Réécoutez vos ancien favoris", 
            description: "Eminem, Snoop Dogg, SCH et Gims", 
            image1:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO4gTUOY-default.jpg",
            image2:"https://www.cygnusmusic.net/wp-content/uploads/2023/06/This-Is-Playlist.jpg",
            image3:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1kKoc8-default.jpg",
            image4:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0lhGr6-default.jpg"
        },
        {
            nom:"A écouter en famille", 
            description: "Damso, Vald, Rim'K et Ninho", 
            image1:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1G9baM-default.jpg",
            image2:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO26xkaI-default.jpg",
            image3:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1gIYPS-default.jpg",
            image4:"https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO44Az3q-default.jpg"
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