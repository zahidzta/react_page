function PopUpCard(){
    let infos =[
        {img: "https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg", title: "Gato 1", text: "Gato 1 ipsum, dolor sit amet consectetur adipisicing elit. Velit quia cupiditate commodi fugiat! Quos, sed!", id: "gato_pop_card_"},
        {img: "https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png", title: "Gato 2", text: "Gato 2 ipsum, dolor sit amet consectetur adipisicing elit. Velit quia cupiditate commodi fugiat! Quos, sed!", id: "gato_pop_card_"},
        {img: "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067", title: "Gato 3", text: "Gato 3 ipsum, dolor sit amet consectetur adipisicing elit. Velit quia cupiditate commodi fugiat! Quos, sed!", id: "gato_pop_card_"},
        
    ];
    
    document.querySelectorAll(".card-pop").forEach(element => {
        element.addEventListener("click", function(ev){
            ev.stopPropagation();
            this.parentNode.classList.add("active");
        })
    });

    document.querySelectorAll(".modal-pop").forEach(element => {
        element.addEventListener("click", function(){
            this.classList.remove("active");
        })
    });

    return(

        infos.map( (info, index) =>{
            return (
                <div className="modal-pop" key={index}>
                    <div className="card-pop">
                        <img src={info.img} alt="" className="card-pop-img" />
                        <h2 className="card-title">{info.title}</h2>
                        <p className="card-text">{info.text}</p>
                    </div>
                </div>
            )
        })
        
    );
}

export default PopUpCard