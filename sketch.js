let points = [[-13, -6], [-14, -3], [-13, -1],[-12,0],[-12,3],[-10,5],[-5,7],[1,8],[5,8],[9,7],[12,5],[13,2],[14,0],[13,1],[14,-1],[13,0],[13,-2],[12,3],[12,-1],[13,-6],[11,-7],[10,-6],[11,-5],[9,-3],[8,-6],[5,-6],[6,-5],[5,-4],[1,-4],[0,-6],[-3,-6],[-2,-5],[-3,-4],[-5,-4],[-6,-5],[-7,-7],[-10,-7],[-10,-6],[-8,-5],[-8,-4],[-10,-4]]; //list資料，
let points_1 = [[-13, -6], [-14, -3], [-13, -1],[-12,0],[-12,3],[-10,5],[-5,7],[1,8],[5,8],[9,7],[12,5],[13,2],[14,0],[13,1],[14,-1],[13,0],[13,-2],[12,3],[12,-1],[13,-6],[11,-7],[10,-6],[11,-5],[9,-3],[8,-6],[5,-6],[6,-5],[5,-4],[1,-4],[0,-6],[-3,-6],[-2,-5],[-3,-4],[-5,-4],[-6,-5],[-7,-7],[-10,-7],[-10,-6],[-8,-5],[-8,-4],[-10,-4]];
let points_2 = [[-13, -6], [-14, -3], [-13, -1],[-12,0],[-12,3],[-10,5],[-5,7],[1,8],[5,8],[9,7],[12,5],[13,2],[14,0],[13,1],[14,-1],[13,0],[13,-2],[12,3],[12,-1],[13,-6],[11,-7],[10,-6],[11,-5],[9,-3],[8,-6],[5,-6],[6,-5],[5,-4],[1,-4],[0,-6],[-3,-6],[-2,-5],[-3,-4],[-5,-4],[-6,-5],[-7,-7],[-10,-7],[-10,-6],[-8,-5],[-8,-4],[-10,-4]];
let points_3 = [[-13, -6], [-14, -3], [-13, -1],[-12,0],[-12,3],[-10,5],[-5,7],[1,8],[5,8],[9,7],[12,5],[13,2],[14,0],[13,1],[14,-1],[13,0],[13,-2],[12,3],[12,-1],[13,-6],[11,-7],[10,-6],[11,-5],[9,-3],[8,-6],[5,-6],[6,-5],[5,-4],[1,-4],[0,-6],[-3,-6],[-2,-5],[-3,-4],[-5,-4],[-6,-5],[-7,-7],[-10,-7],[-10,-6],[-8,-5],[-8,-4],[-10,-4]];
let points_4 = [[-13, -6], [-14, -3], [-13, -1],[-12,0],[-12,3],[-10,5],[-5,7],[1,8],[5,8],[9,7],[12,5],[13,2],[14,0],[13,1],[14,-1],[13,0],[13,-2],[12,3],[12,-1],[13,-6],[11,-7],[10,-6],[11,-5],[9,-3],[8,-6],[5,-6],[6,-5],[5,-4],[1,-4],[0,-6],[-3,-6],[-2,-5],[-3,-4],[-5,-4],[-6,-5],[-7,-7],[-10,-7],[-10,-6],[-8,-5],[-8,-4],[-10,-4]];

let ctx;
let r= 0.1;
function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 10;
      
    }
  }

  for (let z = 0; z< points_1.length; z++) {
    for (let q = 0; q < points_1[z].length; q++) {
      points_1[z][q] = points_1[z][q] * 15;
      
    }
    }


  for (let s = 0; s < points_2.length; s++) {
    for (let w = 0; w < points_2[s].length; w++) {
      points_2[s][w] = points_2[s][w] * 20;
      
    }

  }
  for (let a = 0; a < points_3.length; a++) {
    for (let b = 0; b < points_3[a].length; b++) {
      points_3[a][b] = points_3[a][b] * 25;
      
    }
  }
  for (let e = 0; e < points_4.length; e++) {
    for (let f = 0; f < points_4[e].length; f++) {
      points_4[e][f] = points_4[e][f] * 30;
      
    }
  }
    
  

     
  ctx = canvas.getContext('2d');
	ctx.lineWidth = 8;
	ctx.lineCap = 'round'
	//------
	gradientLine(ctx, 82, 120, 120, 120, 'black', 'blue')
	gradientLine(ctx, 52, 120, 88, 120, 'brown', 'orange')
	gradientLine(ctx, 30, 120, 55, 120, 'lightblue', 'lime')
  
  //const num = 50
//or (let i = 0; i < num; i++) {
  //gradientLine(random(width), random(height), random(width), random(height), color(random(60), 50, 80), color(random(30, 90), 50, 100), 40)

}

function draw() {
  background(255);
  
  // scale(50)
  textSize(30)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text("教育科技學系",10,100)  //顯示文字

  gradientLine(ctx, 82, 120, 120, 120, 'black', 'blue')
	gradientLine(ctx, 52, 120, 88, 120, 'brown', 'orange')
	gradientLine(ctx, 30, 120, 55, 120, 'lightblue', 'lime')

  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(1, -1);  //上下翻轉

  //line(20, 40, 60, 40)

  
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
  translate(mouseX,0)
  

  for (let z = 0; z < points_1.length-1; z++) {
    line(points_1[z][0], points_1[z][1], points_1[z+1][0], points_1[z+1][1]);
  }
  line(points_1[points_1.length-1][0], points_1[points_1.length-1][1], points_1[0][0], points_1[0][1]); //把最後一點與第一點的連線
  translate(mouseX,0)
  map(mouseX,0,mouseY,0,100)
  for (let s = 0; s < points_2.length-1; s++) {
    line(points_2[s][0], points_2[s][1], points_2[s+1][0], points_2[s+1][1]);
  }
  line(points_2[points_2.length-1][0], points_2[points_2.length-1][1], points_2[0][0], points_2[0][1]); //把最後一點與第一點的連線
  translate(mouseX,0)

  for (let a = 0; a < points_3.length-1; a++) {
    line(points_3[a][0], points_3[a][1], points_3[a+1][0], points_3[a+1][1]);
  }
  line(points_3[points_3.length-1][0], points_3[points_3.length-1][1], points_3[0][0], points_3[0][1]); //把最後一點與第一點的連線
  translate(mouseX,0)

  for (let e = 0; e < points_4.length-1; e++) {
    line(points_4[e][0], points_4[e][1], points_4[e+1][0], points_4[e+1][1]);
  }
  line(points_4[points_4.length-1][0], points_4[points_4.length-1][1], points_4[0][0], points_4[0][1]); //把最後一點與第一點的連線
  translate(mouseX,0)




  
  

  

    
}

// 以下函數主要畫從(x1,y1)~(x2,y2)間，顏色為c1到c2的變化

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

