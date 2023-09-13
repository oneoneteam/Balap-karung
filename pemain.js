class Pemain {
  constructor(x, y, nama) {
    this.d = 50
    this.x = x
    this.y = y
    this.nama = nama
    this.loncat = 30
  }
  
  tampilkan() {
    image(imgpemain, this.x, this.y)
  }
  
  maju() {
    this.x += this.loncat
  }
  
  cekfinish() {
    if(this.x > width-100) {
      fill(255)
      stroke(0)
      strokeWeight(7)
      textSize(50)
      textAlign(CENTER)
      text(this.nama + "Finish!", width/2, height/2)
      noLoop()
    }
  }
}