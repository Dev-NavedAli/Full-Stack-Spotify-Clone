Making admin panel

step -1--------making a folder name admin in root directory 
step2-----------install react-router-dom,axios,react-toastify.

step4-----install tailwind,and make two folders component and pages 

step-5------- In pages folder make four files  AddAlbum.jsx , AddSong.jsx , ListAlbum.jsx , ListSong.jsx and in component make Sidebar.jsx.For react-router-dom  go to sideBar.jsx and in "Navlink" tag there is a property name to to="/add" then give the links as per need and Mount the SideBar in app.jsx And give ROutes and Route in App.jsx our react router dom will work succesfully

step6----desinged SideBar and configure it for React-router-dom

step-7 make Navbar.jsx in components Folder and mount the navbar into app.jsx

step8----design the AddSong.jsx and getting all form data using this
<!-- onChange={(e) => setName(e.target.value)} value={name} -->

step 9--------------- make a variable name <!-- export const url = 'http://localhost:4000' -->
now import it on AddSong.jsx and send the data using axios  <!--const response = await axios.post(`${url}/api/song/add`,formData) --->

# Displaying the Song Data in Admin panel from database 
 step10----<!-- const response = await axios.get(`${url}/api/song/list`)  --> is url ki help se data nikal jaayega or jo data ayyega use ek state varaible me save kra lenge or use map ki help se display kra denge

 step11------same aise hi album ko display kra lenge

 # last step - how to integrate frontend for getting data from the backend

step1-----install axios in frontend

step2------ Go to "PlayerContext" make a variable name "url" jisme backend ka url hoga or do 2 "statevariable" bna liye 

step3----- uske baad jo data hum direct assets se le the us import ko hta ke axios ki import likh denge 

step4---- or uske baad do async func bnayege getSongsData or getAlbumsData name se  jinki help se hum songs,albums ka data fetch kar skein with the help of axios uske baad jo data aaye unhe state variable me daal denge

step5-----  uske baad in dono func ko use effect me call kar liya or unko "Contextvalue" me daal diya 


step6-------