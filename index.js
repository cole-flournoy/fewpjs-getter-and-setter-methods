// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius
  }
  
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return this.radius * Math.PI * 2
  }
  get area(){
    return (this.radius * this.radius) * Math.PI 
  }

  set diameter(d){
    this.radius = d / 2
    return d
  }
  set circumference(c){
    this.radius = (c / Math.PI) / 2
    return c
  }
  set area(a){
    this.radius = Math.sqrt(a / Math.PI)
    return area
  }
}