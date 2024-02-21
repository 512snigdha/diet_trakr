import React from "react";

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-info text-dark h-auto">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Diet Tracker Project</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
            <a class="nav-link" href="/routes">
              <i class="fas fa-route"></i> Routes 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vTza-VByYmeVN_sfN0TmhxUqBevoLPNoThBDt-9SJDnCfElms4xOLf3ADJPrGXUcqeFCEw4N-KBW356/pub" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-file"></i> Document 
            </a>
          </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">Blog</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
)

export default Navbar