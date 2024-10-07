# HOW TO DISPLAY DETAIL PAGE OF ALBUM OR SONG BY CLICKING THEM

ans----sbse pehle ek DisplayHome.jsx banaaya jisme album or song ka data import kar liya assets vali file se 
<!-- <div>
{albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
</div> -->

fir map ki help se data ko extract kiya assests se or as a return kra diya "AlbumItem.jsx" me as a prop
fir hum "AlbumItem.jsx" me jaake destructure kra liya or ek div me display kra liya isse assets me  jittni bhi album hongi saari ajjayengi same songs ke saath bhi aisa kr liya. Div ko or navigate hook ki help se by according to thier id usi page pe bhej diya jitni us div id hai dynamically by the help of thier id and make a file name "DisplayAlbum.jsx" jo ki detail page hoga album ka.
isme id extrct kr li by the help of useParams.
<!-- const {id} = useParams();  
    const albumData = albumsData[id]; -->

ab simple ek div bna li or poori particular album ka data display kara liya

<!-- <div>
        <img src={albumData.image} alt="" />
        <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
        </div>
</div>         -->


# HOW TO ADD FUNCTIONALIY OF FORWARD AND BACKWARD BUTTON

sirf un images par usenavigate use karke backward vaale ke andar -1
<!-- onClick={()=>navigate(-1)} -->
similarly forward vaale ke andar +1 ka use karke inhe funcional bna sakte hai

# How To Play Song On Clicking it

just ek function bnayenge PlayWithId name ka PlayerContext me or usko export kr denge fir usko require kar lenge DisplayAlbum me 
or jo div se hum songs ko  map kara rhe the uspe onclick me PlayWithId ko call krke usme song ki id i.e item.id pass karne pr
song according to their id ke hsaab se chlne lgenge same direct song jo maine pe hai to usme SongItem.jsx me jaake bhi same work 
kr denge