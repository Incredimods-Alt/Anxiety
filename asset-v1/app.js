/** Why am I anxious~ **/
var app=new function(){this.name="Anxiety",this.version="1",this.date="2024",this.folder="asset-v1/",this.looptime=8350,this.bpm=115,this.totalframe=404,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=96,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#0f1521",this.col0="#9a4500",this.col1="#995c27",this.col2="#995c27",this.col3="#995c27",this.col4="#704727",this.animearray=[{name:"01poum",color:"d36642",uniqsnd:!0},{name:"02psycho",color:"d36642",uniqsnd:!0},{name:"03rotate",color:"d36642",uniqsnd:!0},{name:"04cursed",color:"d36642",uniqsnd:!0},{name:"05deceased",color:"d36642",uniqsnd:!0},{name:"06lead",color:"009a90",uniqsnd:!0},{name:"07happy",color:"009a90",uniqsnd:!0},{name:"08doctor",color:"009a90",uniqsnd:!0},{name:"09fighter",color:"009a90",uniqsnd:!0},{name:"10eyes",color:"009a90",uniqsnd:!0},{name:"11mask",color:"4b2587",uniqsnd:!0},{name:"12leaves",color:"4b2587",uniqsnd:!1},{name:"13organ",color:"4b2587",uniqsnd:!0},{name:"14rockstar",color:"4b2587",uniqsnd:!1},{name:"15void",color:"4b2587",uniqsnd:!0},{name:"16hallucinatory",color:"937dce",uniqsnd:!0},{name:"17blood",color:"937dce",uniqsnd:!1},{name:"18runner",color:"937dce",uniqsnd:!0},{name:"19death",color:"937dce",uniqsnd:!1},{name:"20freak",color:"937dce",uniqsnd:!0}],this.bonusarray=[],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};