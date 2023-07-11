const Movie_row = ({item}) => {
    return (
        <div className='row1_movie_row'>
            <div className='image'>
            	<img src={item.image} className="image" />
            </div>

            <div className='Discription'>
            	<div className="d">
                <h1 className="size">{item.movieName}</h1>
                <div className="d2">{item.movieYear + "|" + item.duration + "|" + item.gender}</div>
                </div>
                <div className="d1">
                <div className="sixe">Discription</div>
                <p>{item.discription}</p>
                <div className="action-row">
               
                   <img className="icon_like" src="like.png"/>
                           <img  className="icon_like ic_dislike" src="dislike.png"/>
                           <img className="icon_like ic1_delete" src="delete.png"/>
			</div>
               </div>
            </div>
               
        </div>
       
    );
};

export default Movie_row;
