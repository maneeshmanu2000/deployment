
$("#image-selector").change(function () {
    let reader = new FileReader();
    reader.onload = function () {
        let dataURL = reader.result;
        $("#selected-image").attr("src", dataURL);
        $("#prediction-list").empty();
    }
    let file = $("#image-selector").prop("files")[0];
    reader.readAsDataURL(file);
}); 


let model;
(async function () {
    model = await tf.loadModel("http://127.0.0.1:2020/tfjs/model.json");
    $(".progress-bar").hide();
})();

let image = $("#selected-image").get(0);


