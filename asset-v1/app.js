/* Finally, some good fucking food */
var app=new function(){this.name="Undead",this.version="Undead v1",this.date="2024",this.folder="asset-v1/",this.looptime=16700,this.bpm=160,this.totalframe=460,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=96,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#400000",this.col0="#400000",this.col1="#890000",this.col2="#894646",this.col3="#D90000",this.col4="#400000",this.animearray=[
{name:"01kick",color:"828282",uniqsnd:!0},
{name:"02snare",color:"828282",uniqsnd:!0},
{name:"03Fragment",color:"828282",uniqsnd:!0},
{name:"04klop",color:"828282",uniqsnd:!0},
    {name:"05clock",color:"828282",uniqsnd:!0},
    
    
{name:"06bass",color:"828282",uniqsnd:!0},
{name:"07mmmhah",color:"828282",uniqsnd:!0},
{name:"08tututoung",color:"",uniqsnd:!0},
{name:"09boowop",color:"828282",uniqsnd:!0},
    {name:"10woah",color:"828282",uniqsnd:!0},
    
    
{name:"11nugununugu",color:"828282",uniqsnd:!0},
{name:"12string",color:"828282",uniqsnd:!0},
{name:"13lowarp",color:"828282",uniqsnd:!0},
{name:"14settoarp",color:"828282",uniqsnd:!0},
    {name:"15duuduuduu",color:"828282",uniqsnd:!0},
    
    
{name:"16somuch",color:"828282",uniqsnd:!0},
{name:"17casting",color:"828282",uniqsnd:!0},
{name:"18ahwoo",color:"828282",uniqsnd:!0},
{name:"19lastday",color:"828282",uniqsnd:!0},
    {name:"20mind",color:"828282",uniqsnd:!0},
    
    
{name:"21nugununugu",color:"828282",uniqsnd:!1},
{name:"22beat_calamity",color:"3352FF",uniqsnd:!0}
],this.bonusarray=[/*No bonuses?*/];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};