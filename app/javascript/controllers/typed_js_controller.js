import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';


// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Hi,"],
      typeSpeed: 65,
      loop: false,
      loopCount: 1,
    })
    
  }
}
