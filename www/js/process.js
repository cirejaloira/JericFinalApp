let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Dota 2 Hero Guide</div>
              </div>
            </div>

    <div className="list-group">
      <ul>
        <li className="list-group-title">Str</li>
        <li><a href='#' onClick={process.pudge}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Pudge</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.huskar}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Huskar</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
        <div className="list-group">
      <ul>
        <li className="list-group-title">Agi</li>
        <li><a href='#' onClick={process.zues}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Zues</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.razor}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Razor</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
      <div className="list-group">
      <ul>
        <li className="list-group-title">Int</li>
        <li><a href='#' onClick={process.lion}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Lion</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.arc}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Arc Warden</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
       
     
      </ul>
    </div>
        

</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  pudge:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Dota 2</div>
              </div>
            </div>
            <center><img src={"img/pudge.jpg"}/>
            <p>Pudge
(The Butcher)
is a melee strength hero feared for his incredible ganking prowess and risky,yet potentially rewarding playstyle.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
   huskar:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Dota 2</div>
              </div>
            </div>
            <center><img src={"img/huskar.png"}/>
            <p>Huskar
(the Sacred Warrior)
is a ranged strength hero who is an effective ganker and carry,with both great benefits and risks offered.

https://www.youtube.com/watch?v=fjImkK1xAZI


</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  zues:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Dota 2</div>
              </div>
            </div>
            <center><img src={"img/zues.jpg"}/>
            <p>Zues
(the lord of heaven)
is a ranged agility hero who function almost solely as a nuker.He is usaully played as a semi carry ganker type hero.

</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  razor:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Dota 2</div>
              </div>
            </div>
            <center><img src={"img/razor.jpg"}/>
            <p>Razor
(the lightning revenant)
is a ranged position-based agility tank that employs his abilities to deal massive damage in a relatively  short amount of time.
https://www.youtube.com/watch?v=DFH18x-xqYQ


</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
 
  arc:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Dota 2</div>
              </div>
            </div>
            <center><img src={"img/arc warden.jpg"}/>
            <p>Arc Warden
(Zet)
is a ranged intelligence hero that requires micromanagement and farm to spiral out of control.In the early stages of the game,it is very powerful nuker. 


</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  lion:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">Dota 2</div>
              </div>
            </div>
            <center><img src={"img/lion.jpg"}/>
            <p>Lion
(the Demon Witch)intelligence hero ,most commonly played as a support  who serves  as a powerful offensive spellcaster.
is a ranged 



</p></center>
            <br/><a href='#' onClick={process.menu}>back</a>

</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},3000);
