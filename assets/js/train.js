$(document).ready(function () {

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyC4QZvGyVmwvdASmYQoEVn0PmOEV5zP0_I",
    authDomain: "bc-train-schedule-5b9d1.firebaseapp.com",
    databaseURL: "https://bc-train-schedule-5b9d1.firebaseio.com",
    projectId: "bc-train-schedule-5b9d1",
    storageBucket: "",
    messagingSenderId: "376947519387",
    appId: "1:376947519387:web:617a6cb82a2c98789dfb3e"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  // Create a variable to reference the database
  var database = firebase.database();

  // Variables about time
  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

  // Let's grab the user input
  $("#addTrainBtn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#trainNameInput").val().trim();
    var trainDesitnation = $("#trainDestinationInput").val().trim();
    var firstTrainDeparture = moment($("#firstTrainDepartureInput").val().trim(), "MM/DD/YYYY").format("X");
    var trainFrequency = $("#trainFrequencyInput").val().trim();
    var trainMinutes = "";

    // Creates local "temporary" object for holding train data
    var trainInfo = {
      train: trainName,
      destination: trainDesitnation,
      departure: firstTrainDeparture,
      frequency: trainFrequency
    };

    // Uploads train data to the database
    database.ref().push(trainInfo);

    // Logs everything to console
    console.log(trainInfo.train);
    console.log(trainInfo.destination);
    console.log(trainInfo.departure);
    console.log(trainInfo.frequency);

    alert("Train successfully added");
  });

  // Clears all of the text-boxes
  $("#trainNameInput").val("");
  $("#trainDestinationInput").val("");
  $("#firstTrainDepartureInput").val("");
  $("#trainFrequencyInput").val("");
});

// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());
}
  // Store everything into a variable.
  var train = childSnapshot.val().train;
  var destination = childSnapshot.val().destination;
  var departure = childSnapshot.val().departure;
  var frequency = childSnapshot.val().frequency;

  // Train Info
  console.log(trainName);
  console.log(trainDesitnation);
  console.log(firstTrainDeparture);
  console.log(trainFrequency);

  // Calculate the time between 





  // Close Doc Ready
});