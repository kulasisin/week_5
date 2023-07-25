import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

ClassicEditor.create(document.querySelector("#editor"))
  .then((editor) => {
    console.log(editor);
  })
  .catch((error) => {
    console.error(error);
  });
