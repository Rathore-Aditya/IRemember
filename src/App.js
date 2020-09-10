import React from 'react';
import './App.css';

class App extends React.Component{

  constructor()
  {
    super();
    this.state={
      colorCode:[
        [
          {color1: "#ACBDAA"},
          {color2: "#1E2D4C"},
          {color3: "#858585"},
          {color4: "#CEC0BB"}
        ],
       ]
    }
  }
  submitHandler=(colorcode)=>
  {
    var pos =this.state.colorCode;
    this.setState({[pos] : pos.push(colorcode)})
  }
 
  handleCode=(event)=>
  {
      var data = [
        {color1: document.getElementById("color1").value},
        {color2: document.getElementById("color2").value},
        {color3: document.getElementById("color3").value},
        {color4: document.getElementById("color4").value}
      ]
      event.preventDefault();
      if(data[0].color1 !== "" && data[0].color2 !== "" && data[0].color3 !== "" &&  data[0].color4!=="")
           this.submitHandler(data)
      else
         alert("Please Fill All The HEX Box")     
  }

  handleDelete=(index)=>
  {
    const {colorCode} = this.state;
    var res = [...colorCode]
    res.splice(index,1);
    this.setState({colorCode: res});
    // var res = colorCode.filter((i,index)=> {return index != event.target.id})
    // this.setState({colorCode: res});
  }
  render()
  {
    let {colorCode} =this.state;
    var res = null;
    if(colorCode.length>0)
    {
      
      res=<div className="container">
            {colorCode.map((i,index)=>{
               return <div className="box" key={index}>
                          <p className="dlt" onClick={()=>this.handleDelete(index)} style={{width: "20px" , height: "20px" , textAlign: "center"}}>X</p> 
                          <p style={{backgroundColor: `${i[0].color1}`, borderRadius: "5px 5px 0px 0px"}}><span>{i[0].color1}</span></p>
                          <p style={{backgroundColor: `${i[1].color2}`}}><span>{i[1].color2}</span></p>
                          <p style={{backgroundColor: `${i[2].color3}`}}><span>{i[2].color3}</span></p>
                          <p style={{backgroundColor: `${i[3].color4}` , borderRadius: "0px 0px 5px 5px"}}><span>{i[3].color4}</span></p>           
                      </div>
            })}
         </div>
      
    }
    return (
      <div className="App">
          <div className="colorFeed">
               <form onSubmit={this.handleCode}>
                  <input type="text" id="color1" placeholder="Color1 hex"/>
                  <input type="text" id="color2" placeholder="Color2 hex"/>
                  <input type="text" id="color3" placeholder="Color3 hex"/>
                  <input type="text" id="color4" placeholder="Color4 hex"/>
                  <input type="submit" value="Add Colors"/>
               </form> 
          </div>
          {res}
         
      </div>
    );
  }
  
}

export default App;
