$(document).ready(function(){
    
    $("#form").submit(function(e){
        e.preventDefault();

        const inputtedName = $("#name").val();
        const inputtedProduct = $("#product").val();
        const inputtedDescription = $("#description").val();
        const inputtedAmount = $("#amount").val();
        const inputtedAddress = $("#address").val();
        const inputtedEmail = $("#email").val();
        const inputtedCountry = $("#country").val();
        const inputtedState = $("#state").val();
        const inputtedDate = $("#date").val();

        $(".name").text(inputtedName);
        $(".product").text(inputtedProduct);
        $(".description").text(inputtedDescription);
        $(".amount").text(inputtedAmount);
        $(".address").text(inputtedAddress);
        $(".email").text(inputtedEmail);
        $(".country").text(inputtedCountry);
        $(".state").text(inputtedState);
        $(".date").text(inputtedDate);

        $("#print-area").show();
        $("#form").hide();

    });
});

function printInvoice(){
    window.print();
}

function downloadInvoice(){
    window.download();
}