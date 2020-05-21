import React, { Component } from 'react';
import './css/home.css';
import './css/grid.css';




window.onload = () =>{




    let all_skill = document.querySelectorAll('.label');
    let par = document.querySelectorAll('.par');
    let ps = document.querySelector('.ps');;
    let warap = document.querySelector(".toggler");
    let nc = document.querySelector(".nc");
    let box1Card = document.querySelectorAll('.box1-container div');
    let productCard = document.querySelectorAll(".card");



    warap.onclick = () => {
        if (warap.classList.contains("toggler_warap1")) {
            warap.classList.replace("toggler_warap1", "toggler_warap");
        }else{
            warap.classList.replace("toggler_warap", "toggler_warap1");
        }
        nc.classList.toggle("nav_phone");
    }

    let o=null;
    let skill_arr = [90, 80, 60, 60, 70, 30]

    

    let runs = () => {

        
        let y=1;


        let updateSkill = () => {
            y++;

            for (let i = 0; i < skill_arr.length; i++) { 

                if (y < skill_arr[i]) {
                    all_skill[i].style.width = y+1 + "%";
                    par[i].innerHTML = y+1 + "%"; 

                }

            }

            if (y > 100) {
                clearInterval(skill_time);

                console.log("time clear");
                
            }
            
        }

        let skill_time = setInterval(updateSkill, 30);

    }



    window.onscroll = function() {
        let ws = window.pageYOffset;
        if (window.innerHeight + 20 > (ps.offsetTop + ps.offsetHeight/2) - ws) {

            if (o === null) {
                runs();
            }
            o =1;
        }


        for (let i = 0; i < box1Card.length; i++) {
            if (window.innerHeight - 70 > (box1Card[i].offsetTop + box1Card[i].offsetHeight/2) - ws) {
                box1Card[i].style.left = 0
                box1Card[i].style.opacity = 1
            }else{
                if (i % 2) {
                    box1Card[i].style.left = -100+"vw"
                    box1Card[i].style.opacity = 0
                }else{
                    box1Card[i].style.left = 100+"vw"
                    box1Card[i].style.opacity = 0
                }
            }
        }

        for (let i = 0; i < productCard.length; i++) {
            if (window.innerHeight - 70 > (productCard[i].offsetTop + productCard[i].offsetHeight/2) - ws) {
                productCard[i].style.transform = "scale(1)"
            }else{
                productCard[i].style.transform = "scale(0)"
            }
        }










    }

}





// React component start here

class Tggler extends Component {
    render() {
        return (
            <div className="sm-12">
                <div style={{marginRight: 10+"px", border: 1+"px solid rgba(255, 255, 255, 0.5)"}} className="toggler toggler_warap">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}







class Header extends Component {
    render() {
        return (
            <div>
                <nav className="nav grid-b nav_color">
                    <img src={process.env.PUBLIC_URL + "/img/logo ahad.png"} className="sm-1-3"/>
                    <div className="nc lg-7-11 sm-1-12 nav_desktop nav_phone">
                        <a href="#Home">HOME</a>
                        <a href="#my">SKILL</a>
                        <a href="#product">PRODUCT</a>
                        <a href="#contact">CONTACT</a>
                    </div>
                    <Tggler/>
                </nav>
            </div>
        )
    }
}

class Box1Card extends Component {
    render() {
        return (
            <div className={this.props.cls}>
                    <h2 className="headL">{this.props.title}</h2>
                    <h3 className="titleL" style={{color:'RGB(134, 142, 150)', marginBottom: '1rem'}}>iste ex provident voluptas maiores quis</h3>
                    <p>
                    maxime, saepe, nesciunt Ipsum sequi, possimus delectus voluptates molestias
                    </p>
                
            </div>
        )
    }
}

class Skill extends Component {

    render() {

        return (
            <div>
                <h4 style={{color: "white", marginBottom: "5px", fontFamily: "boldfont"}}>{this.props.title}</h4>
                <div className="parent_label">
                    <div className="label">
                        <span title="my skill" className="par">0%</span>
                    </div>
                </div>
            </div>
        )
    }
}





class Box2 extends Component {

    render() {

        return (
            <div id="my" className="Box2 grid-b">

                <div className="sm-1-12 lg-1-5">
                    <h1 style={{fontFamily: "boldfont"}}>My Skill</h1>
                    <h2 style={{fontFamily: "lightfont"}}>title here</h2>
                    <p>
                    Nemo, soluta aliquam repudiandae, animi, voluptates tempora quisquam natus dolores libero ut earum rem repellat dolore doloribus delectus enim aspernatur? Quos illum doloremque eaque vitae expedita et cupiditate eos consequatur.
                    Voluptatum ex est consequatur quas neque velit necessitatibus optio autem ipsam perspiciatis ratione, amet, aspernatur culpa perferendis sapiente libero ab! Ea a eius facere consequuntur quasi dolor molestiae voluptates. Sequi!
                    </p>
                </div>
                
                <div className="sm-1-12 lg-7-12 ps">
                    <Skill title={"HTML"}/>
                    <Skill title={"CSS"}/>
                    <Skill title={"JS"}/>
                    <Skill title={"python"}/>
                    <Skill title={"Python Django"}/>
                    <Skill title={"PHP"}/>
                </div>

            </div>
        )
    }
}






class Body extends Component {
    render() {

        return (
            <div className="box1">
                <div id="Home" className="box1-img">
                    <div>
                        <h3 className="headL">We Are Wunderkind</h3>
                        <p>something You Love</p>
                        <p>
                            We are digital agency that loves crafting 
                        </p>
                        <p>website with greate functionality</p>
                        <a className="m1-t" href="#my">WE'RE CREATIVE</a>
                    </div>
                </div>

                <div className="box1-container grid-b">
                    <Box1Card title={"quasirepellat beatae!"} cls={"box1-card1 sm-1-12 lg-4-8"}/>
                    <Box1Card title={"quasirepellat beatae!"} cls={"box1-card1 sm-1-12 lg-1-5"}/>
                    <Box1Card title={"Quidem quam repellendus"} cls={"box1-card2 sm-1-12 lg-8-12"}/>
                    <Box1Card title={"provident voluptas maiore"} cls={"box1-card3 sm-1-12 lg-1-5"}/>
                    <Box1Card title={"eveniet blanditiis inventore"} cls={"box1-card4 sm-1-12 lg-8-12"}/>


                </div>



            </div>
        )
    }
}


class Card extends Component {

    render() {

        return (
            <div className="card">
                <img src={this.props.image} alt=""/>

                <div className="card_show">
                    <span>Having Fun</span><br/>
                    <span>diam nonummy nibh</span>
                </div>
            </div>
        )
    }
}




class Box3 extends Component {
    render() {
        return (
            <div id="product" className="box3">
                <p>Take look at</p>
                <p>Some of our work</p>
                <p>wide range of <span style={{color: "blue"}}>successful</span> digital and print projects</p>

                <div className="box3_button">
                    <button>SHOW ALL</button>
                    <button>BRANDING</button>
                    <button>DIGITAL</button>
                    <button>PRINT</button>
                </div>

                <div className="box3_card_warap">
                    <Card image={process.env.PUBLIC_URL + "/img/1(1).jpg"}/>
                    <Card image={process.env.PUBLIC_URL + "/img/4(1).jpg"}/>
                    <Card image={process.env.PUBLIC_URL + "/img/5(1).jpg"}/>
                    <Card image={process.env.PUBLIC_URL + "/img/6(1).jpg"}/>
                    <Card image={process.env.PUBLIC_URL + "/img/7(1).jpg"}/>
                    <Card image={process.env.PUBLIC_URL + "/img/8.jpg"}/>
                    <Card image={process.env.PUBLIC_URL + "/img/9.jpg"}/>
                    <Card image={process.env.PUBLIC_URL + "/img/1(1).jpg"}/>
                    <Card image={process.env.PUBLIC_URL + "/img/1(1).jpg"}/>


                </div>

            </div>
        )
    }
}

class Contact extends Component {

    render() {

        return (
            <div className="contact">

                <div id="contact" className="cont">
                    
                    <form action="" method="POST" style={{gridGap: 20+"px"}} className="grid-b">

                        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}} className="lg-5-7 sm-1-12">
                            <p style={{fontFamily: "lightfont", fontSize: 33+'px'}}>Get In Touch</p>
                            <p style={{fontFamily: "boldfont", fontSize: 33+'px'}}>Contact Us</p>
                            <p style={{fontSize: 22+'px', color: '#868e96'}}>wide range of <span style={{color: "blue"}}>successful</span></p>
                        </div>


                        <input placeholder="Your name *" type="text" name="name" className="lg-1-12 sm-1-12 inp"/>
                        <input placeholder="Your email *" type="email" name="email" className="lg-1-6 sm-1-12 inp"/>
                        <input placeholder="Your phone *" type="text" name="number" className="lg-7-12 sm-1-12 inp"/>
                        <textarea placeholder="Your message *" className="lg-1-12 inp" rows="7"></textarea>
                        <input type="submit" className="submit_btn lg-1-2 sm-1-12" value="submit"/>
                    </form>
                </div>

            </div>
        )
    }
}






class Footer extends Component {

    render() {

        return (
            <footer className="footer">

            </footer>
        )
    }
}



export default class Home extends Component {


    render() {
        

        return (
            <div>
                <Header/>
                <Body/>
                <Box2/>
                <Box3/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

