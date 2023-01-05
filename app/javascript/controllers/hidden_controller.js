import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hidden"
export default class extends Controller {
  connect() {
    const el = document.getElementsByClassName("james");
    const hiddenDiv = document.getElementsByClassName("hiddendiv");

      el.addEventListener('mouseover', function handleMouseOver() {
      hiddenDiv.style.display = 'block';
    });
  }
}
