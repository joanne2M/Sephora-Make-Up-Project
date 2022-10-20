import React from "react";
function MovieDisplay({MakeUp}) {
  const loaded = () => {
    return (
<> 

<h3> Welcome to Sephora </h3>

<div class="logo">
<img src= "https://media.istockphoto.com/photos/portrait-of-young-afro-woman-with-bright-makeup-picture-id1331637318?b=1&k=20&m=1331637318&s=170667a&w=0&h=0i4Viz3mAqNm9Pz1b6tnUKqpp6zHQb_OvPFsnHSOUh4=" /> </div>


<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Brands</a>
  <a href="#contact">MakeUp</a>
  <a href="#about">Skincare</a>
  </div>


<div className ="MakeUpItems "> 
        <h1 className="title">{MakeUp.name}</h1>
        <h2 className="genre">{MakeUp.productname}</h2>
        <img className="pic"src={MakeUp.image} alt={""} />
</div>

<p class = "DEI"> Commitment to Diversity and Inclusion

At Sephora, our diversity and inclusion mission is simple: To never stop championing all beauty fearlessly and building inclusive environments for our employees, consumers, and communities. In 2019, Sephora announced a new tagline and manifesto, “We Belong to Something Beautiful,” to reinforce our dedication to fostering belonging among all clients and employees and to publicly strive for a more inclusive vision for retail in the Americas. In 2020 Sephora launched our Diversity and Inclusion Heart Journey to support our vision of becoming the Diversity, Inclusion, and Equity Champion in the retail industry.</p>

</>


    
    );
  };

  const loading = ()=>{
      return <h1>No Make Up To Display</h1>
  }
  return MakeUp? loaded() : loading();
}

export default MovieDisplay;