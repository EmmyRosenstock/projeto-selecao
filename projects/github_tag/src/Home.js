import "./Home.css";
import modal from "./modal"
const Home=()=>{
    function toggle() {
        let modal= document.querySelector('#modal')
        if (modal){
           modal.classList.toggle('active')
        } 
    }
    return (
        <div id="page-home">
        <div className="content">
            <header>
                <img className="logo" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" ></img>
                <h1>Bem-Vindo ao Organizer Linkedin</h1>
                <button className="btn" onClick={toggle}>Entrar</button>
            </header>
        </div>
        </div>
    )

}
export default Home;