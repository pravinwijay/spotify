const Bloc = ({bloc}) => {
    return (
        <div className="border-2 border-black rounded-xl bg-white p-6 m-6">
            <p className="text-2xl font-bold mb-3" >{bloc.nom}</p>
            <div className="flex space-x-4">
                <img src={bloc.image1} className="w-64 h-64 hover:scale-110 duration-300 rounded-xl"/>
                <img src={bloc.image2} className="w-64 h-64 hover:scale-110 duration-300 rounded-xl"/>
                <img src={bloc.image3} className="w-64 h-64 hover:scale-110 duration-300 rounded-xl"/>
                <img src={bloc.image4} className="w-64 h-64 hover:scale-110 duration-300 rounded-xl"/>
            </div>
            <p className="mt-4 font-bold">{bloc.description}</p>
        </div>
    )
}
export default Bloc;