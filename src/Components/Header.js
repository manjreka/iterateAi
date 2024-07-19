import React from 'react'
import './styles.css';

const Header = () => {
  return (
    <navbar style = {{display: 'flex', justifyContent: 'space-around' }}>
        <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1721377389/image_8_nrwpuh.svg" alt="temple" />
        <ul style = {{listStyleType: 'none', display: 'flex', justifyContent: 'space-around'}}>
            <li>Home</li>
            <li>Puja</li>
            <li>Panchang</li>
            <li>Temples</li>
            <li>Library</li>
        </ul>
        <div>
            <p>hello</p>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">        <img src="https://res.cloudinary.com/dtzajnril/image/upload/v1721377389/image_8_nrwpuh.svg" alt="temple" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

    </navbar>
  )
}

export default Header