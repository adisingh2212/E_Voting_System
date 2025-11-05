<?php
// index.php
// Electronic Voting System - Poll Page
?>

<!DOCTYPE html>
<html lang="en"> 
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poll - Electronic Voting System</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />

    <!-- jQuery & Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 
</head> 

<body> 
    <div class="container"> 
        <br><br><br>
        <h2 class="text-center">Current Poll Results</h2>
        <br>

        <div class="row">
            <!-- Left Side: Poll Form -->
            <div class="col-md-6">
                <form method="post" id="poll_form">
                    <h3>Which of these parties deserves to govern the country?</h3>
                    <br>

                    <div class="radio">
                        <label><h4><input type="radio" name="poll_option" class="poll_option" value="Party A" /> Party A</h4></label> 
                    </div>

                    <div class="radio">
                        <label><h4><input type="radio" name="poll_option" class="poll_option" value="Party B" /> Party B</h4></label> 
                    </div>

                    <div class="radio">
                        <label><h4><input type="radio" name="poll_option" class="poll_option" value="Party C" /> Party C</h4></label> 
                    </div>

                    <div class="radio">
                        <label><h4><input type="radio" name="poll_option" class="poll_option" value="Party D" /> Party D</h4></label> 
                    </div>

                    <div class="radio">
                        <label><h4><input type="radio" name="poll_option" class="poll_option" value="Other" /> Other</h4></label> 
                    </div>

                    <br>
                    <input type="submit" name="poll_button" id="poll_button" class="btn btn-primary" value="Submit Vote" />
                </form>
                <br>
            </div>

            <!-- Right Side: Live Poll Result -->
            <div class="col-md-6">
                <br><br><br>
                <h4>Live Poll Results</h4>
                <br>
                <div id="poll_result"></div>
            </div>
        </div>

        <br><br><br>
    </div>

    <!-- Poll AJAX Script -->
    <script> 
    $(document).ready(function() {
        
        // Fetch poll data initially
        fetch_poll_data();

        // Function to fetch live poll results
        function fetch_poll_data() {
            $.ajax({
                url: "fetch_poll_data.php",
                method: "POST",
                success: function(data) {
                    $('#poll_result').html(data);
                }
            });
        }

        // When user submits vote
        $('#poll_form').on('submit', function(event) {
            event.preventDefault();
            let poll_option = '';

            $('.poll_option').each(function() {
                if ($(this).prop("checked")) {
                    poll_option = $(this).val();
                }
            });

            if (poll_option !== '') {
                $('#poll_button').attr('disabled', 'disabled');
                const form_data = $(this).serialize();

                $.ajax({
                    url: "poll.php",
                    method: "POST",
                    data: form_data,
                    success: function() {
                        $('#poll_form')[0].reset();
                        $('#poll_button').attr('disabled', false);
                        fetch_poll_data();
                        alert("Your vote has been submitted successfully!");
                    }
                });
            } 
            else {
                alert("Please select one of the options before submitting.");
            }
        });

    }); 
    </script>
</body> 
</html>
