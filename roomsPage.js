// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Room Price Calculator</title>
// </head>
// <body>

//     <h1>Room Price Calculator</h1>

//     <form id="calculatorForm">
//         <label for="numberOfPersons">Number of Persons:</label>
//         <input type="number" id="numberOfPersons" min="1" required>

//         <br>

//         <label for="numberOfDays">Number of Days:</label>
//         <input type="number" id="numberOfDays" min="1" required>

//         <br>

//         <button type="button" onclick="calculatePrice()">Calculate Price</button>
//     </form>

//     <h2>Result:</h2>
//     <p id="result"></p>

//     <script>
//         function calculatePrice() {
//             // Get input values
//             var numberOfPersons = parseInt(document.getElementById('numberOfPersons').value);
//             var numberOfDays = parseInt(document.getElementById('numberOfDays').value);

//             // Calculate room price
//             var roomPrice = numberOfPersons * numberOfDays * 1000;

//             // Display the result
//             document.getElementById('result').innerText = 'Total Price: $' + roomPrice;
//         }
function checkPrice()
{
    var numberOfPersons=parseInt(document.getElementById('persons').value)
    var numberOfDays=parseInt(document.getElementById('days').value)

    var numberOfPersons1=parseInt(document.getElementById('persons1').value)
    var numberOfDays1=parseInt(document.getElementById('days1').value)

    var numberOfPersons2=parseInt(document.getElementById('persons2').value)
    var numberOfDays2=parseInt(document.getElementById('days2').value)



    var roomPriceSingle = numberOfPersons *numberOfDays * 1050;
    var roomPriceDouble=numberOfPersons1 *numberOfDays1 * 1650;
    var roomPriceTwin=numberOfPersons2 *numberOfDays2 * 1550;


    document.getElementById('result').innerText = 'Total Price: $' + roomPriceSingle;
    document.getElementById('result1').innerText = 'Total Price: $' + roomPriceDouble;
    document.getElementById('result2').innerText = 'Total Price: $' + roomPriceTwin;
  





}