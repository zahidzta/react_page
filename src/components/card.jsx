function Card(){
    let infos = [
        {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymJQQtLOL5I7deClYWZfp7txWwo1zxoLnQxaDsQ26fw&s", title: "Perro 1", text: "Perro 1 ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem ipsa, reprehenderit id quos minus."},
        {img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=0.665xw:0.998xh;0.0641xw,0&resize=1200:*", title: "Perro 2", text: "Perro 2 ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem ipsa, reprehenderit id quos minus."},
        {img: "https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg", title: "Perro 3", text: "Perro 3 ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem ipsa, reprehenderit id quos minus."},
        {img: "https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg", title: "Perro 4", text: "Perro 4 ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem ipsa, reprehenderit id quos minus."},
    ];
    return(
        infos.map ( (info, index) =>{
            return (
                <div className="card" key={index}>
                    <img className="card-image" src={info.img} alt="" />
                    <h2 className="card-title">{info.title}</h2>
                    <p className="card-text">{info.text}</p>
                </div>
            )
        })
        
    );
}

export default Card