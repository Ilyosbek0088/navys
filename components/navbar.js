import { Link, Routes } from "react-router-dom";


function Nav()
{
    return(
        <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <Link className="nav-link" to={'/'}>Home</Link>
        <Link className="nav-link" to={'/about'}>About</Link>
        <Link className="nav-link" to={'/contact'}>Contact</Link>
        <Link className="nav-link" to={'/lessons'}>Lessons</Link>

        {/* <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li> */}
      </ul>
    </header>
  </div>
    )
}




export default Nav;

