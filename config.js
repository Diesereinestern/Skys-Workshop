// Main Config File //
const configuration = {
    SiteName: "Sky's Workshop",   //Name der Seite (Deklariert Letter Render und co)
    Use2DTextOver3D: false,       // true {2D} false {3D}
    SiteNameSize: 0.6,          // 0.5-0.6 {Tiny}, 0.7-0.9 {Medium},1+ {Large}    
    NumberOfVerticalLines: 30, // 20 {Low} 30 {Medium} 40+ {High}
    NumberOfDots: 10000,      // 5k {Low} 10k {Medium} 15k+ {High}
    colors: {                //Deklariert die Farben der einzelnen Render Elemente
        CanvasBackgroundColor: "#141414",                 // Hintergrundfarbe
        LettersColor: "#8F00FF",                         // Farbe der 3D oder 2D Logo Schrift 
        LinesColors: ["#8F00FF", "#8F00FF", "#5e00a8"], // Farbe der oberen Linien-Objects
        LowerLinesColors: ["#8F00FF"],                 // Farbe der unteren Linien-Objects
        DotsColor: "#8F00FF"                          // Farbe der über die Seite verteilten Punkte
    }
  }
  export { configuration };




