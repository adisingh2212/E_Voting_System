<?php
// fetch_poll_data.php
// This script fetches poll results and displays them with percentage bars.

include('database_connection.php');

// List of poll options (Political Parties)
$parties = array("Party A", "Party B", "Party C", "Party D", "Other");

// Get total number of votes
$total_votes = get_total_votes($connect);

$output = '';

if ($total_votes > 0) {
    foreach ($parties as $party) {
        // Count votes for each party
        $query = "SELECT * FROM tbl_poll WHERE php_framework = :party";
        $statement = $connect->prepare($query);
        $statement->execute(['party' => $party]);
        $party_votes = $statement->rowCount();

        // Calculate percentage
        $percentage_vote = round(($party_votes / $total_votes) * 100);

        // Determine progress bar color
        if ($percentage_vote >= 40) {
            $progress_bar_class = 'progress-bar-success';
        } elseif ($percentage_vote >= 25 && $percentage_vote < 40) {
            $progress_bar_class = 'progress-bar-info';
        } elseif ($percentage_vote >= 10 && $percentage_vote < 25) {
            $progress_bar_class = 'progress-bar-warning';
        } else {
            $progress_bar_class = 'progress-bar-danger';
        }

        // Append HTML output
        $output .= '
        <div class="row" style="margin-bottom: 10px;">
            <div class="col-md-2 text-right">
                <label>' . htmlspecialchars($party) . '</label>
            </div>
            <div class="col-md-10">
                <div class="progress">
                    <div class="progress-bar ' . $progress_bar_class . '" 
                         role="progressbar" 
                         aria-valuenow="' . $percentage_vote . '" 
                         aria-valuemin="0" 
                         aria-valuemax="100" 
                         style="width:' . $percentage_vote . '%">
                        ' . $percentage_vote . '% votes for <b>' . htmlspecialchars($party) . '</b>
                    </div>
                </div>
            </div>
        </div>';
    }
} else {
    $output = '<h4 class="text-center text-muted">No votes recorded yet.</h4>';
}

// Output the generated HTML
echo $output;


/**
 * Function to get the total number of votes
 */
function get_total_votes($connect)
{
    $query = "SELECT * FROM tbl_poll";
    $statement = $connect->prepare($query);
    $statement->execute();
    return $statement->rowCount();
}
?>
