import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Top from '../Top/Top';
import Footer from '../Footer/Footer';
import Food from '../Food/Food';
import grill from './Grill.json';
import hotpot from './Hotpot.json';

export class Menu extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            grill,
            hotpot
        };
    }

    deleteGrill = (id) => {
        var arrGrill = this.state.grill;
        arrGrill.splice(id,1);
        this.setState({grill : arrGrill});
    }

    deleteHotpot = (id) => {
        var arrHopot = this.state.hotpot;
        arrHopot.splice(id,1);
        this.setState({hotpot : arrHopot});
    }

    editGrill = (id,name) => {
        var arrGrill = this.state.grill;
        arrGrill[id].name = name;
        this.setState({grill : arrGrill});
    }

    editHotpot = (id,name) => {
        var arrHopot = this.state.hotpot;
        arrHopot[id].name = name;
        this.setState({hotpot : arrHopot});
    }


    show_grill = () => {
        const listGrill = this.state.grill.map((item,index) => 
        <Food key={index} index={index} images={item.images} price={item.price} edit={ (id,name) => {this.editGrill(id,name)} } delete={ (id) => {this.deleteGrill(id)} }><br />{item.name}</Food>
        );
    
    
    return listGrill;
    }

    show_hotpot = () => {
        const listHotpot = this.state.hotpot.map((item,index) => 
        <Food key={index} index={index} images={item.images} price={item.price} edit={ (id,name) => {this.editHotpot(id,name)} } delete={ (id) => {this.deleteHotpot(id)} }><br />{item.name}</Food>
        );

    return listHotpot;
    }

    render() {
        console.log(grill);
        return (
            
            <div className="wrapper">
                <header className="menu__header">
                    <Top />
                    <Nav />
                    <div className="carousel__content">
                        <h1 style={{fontFamily: 'cursive, sans-serif'}}>MENU</h1>
                    </div>
                </header>   

                <div className="menu">
                    <div className="menu_content">
                        <div className="grill">
                            <h2 style={{fontFamily: 'cursive, sans-serif'}}>Grill</h2>
                            <div className="row">

                                { this.show_grill() }
                                
                            </div>
                            <br /><center><div><button type="button" className="btn btn-outline-success btn-sm">ADD</button></div></center>
                        </div>
                        <div className="hotpot">
                            <h2 style={{fontFamily: 'cursive, sans-serif'}}>Hot Pot</h2>
                            <div className="row">
                                
                                { this.show_hotpot() }

                            </div>
                            <br /> <center><div><button type="button" className="btn btn-outline-success btn-sm">ADD</button></div></center>
                        </div>
                    </div>
                </div>
                <br />
                <Footer />
            </div>

        );
    }
}

export default Menu;
