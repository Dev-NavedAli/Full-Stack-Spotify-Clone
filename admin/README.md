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