import React from 'react'

const Navbar = () => {
   
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">MicroLearn</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
 
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>


                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Latest</a></li>
                        <li><a class="dropdown-item" href="#">Top posts</a></li>
                        
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Latest Launch</a></li>
                        <li><a class="dropdown-item" href="#">Books</a></li>
                         
                    </ul>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Contacts
                    </a>
                </li>




            </ul>
            <button class="btn btn-outline-success apt-btn" type="submit">Appointment</button>
            <button class="btn btn-outline-success lgn-btn" type="submit">Login</button>
        </div>
    </div>








</nav>
  )
}

export default Navbar
