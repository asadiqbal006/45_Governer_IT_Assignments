function sandwitch_order(...items:string[]){
    console.log("You have orderd a sandwitch with following ingredients",items.join(", "));
    
}
sandwitch_order("chicken","cheese");
sandwitch_order("beef","cheese","onion");
sandwitch_order("tomato sauce","pickles","onion");
