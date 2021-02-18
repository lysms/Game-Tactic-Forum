<?php 
  include('resources/includes/init.inc.php'); // include the DOCTYPE and opening tags
  include('resources/includes/functions.inc.php'); // functions
?>
<title>Final Exam - ITWS</title>   

<?php include('resources/includes/head.inc.php'); ?>

<h1>Final Exam - All labs</h1>



<?php include('resources/includes/menubody.inc.php'); ?>

<p class="project">All the projects in this course will be base on web development, we will be learn Javascript, MySQL, PHP, Github, etc. We will be apply these language to the web in order to make the professional website and projects. </p>

<div class="about">
        <h2>About the Site</h2>
        <p>This is my Introduction to Information Technology and Web Science website. All my Intro to ITWS's classwork, homework, and projects will be available in the <span>Projects</span> menu. Please go check it out.</p>

        <h2>About me</h2>
        <p>My name is Yanshen Lin. I am an Information Technology and Web Science student in Rensselaer Polytechnic Institute. I am a freshman right now.</p>
</div>

<?php

  $dbOk = false;

  @ $db = new mysqli('localhost', 'root', '', 'myintroprojects');
  
  if ($db->connect_error) {
    echo '<div class="messages">Could not connect to the database. Error: ';
    echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
  } else {
    $dbOk = true; 
  }

?>


<h2 class="all">All Labs</h2>
<table align="center">
<?php
  if ($dbOk) {

    $query = 'select * from projectlist order by projectid';
    $result = $db->query($query);
    $numRecords = $result->num_rows;
    
    echo '<tr><th>Lab Name</th><th>Lab description</th><th>Link:</th></tr>';
    for ($i=0; $i < $numRecords; $i++) {
      $record = $result->fetch_assoc();
      if ($i % 2 == 0) {
        echo "\n".'<tr id="project-' . $record['projectid'] . '"><td>';
      } else {
        echo "\n".'<tr class="odd" id="project-' . $record['projectid'] . '"><td>';
      }
      //echo htmlspecialchars($record['last_name']) . ', ';
      echo htmlspecialchars($record['menu_name']);
      echo '</td><td>';
      echo htmlspecialchars($record['menu_desc']);
      echo '</td><td>';
      echo '<a href=' . $record['menu_url'] . '>Click to view the lab</a></td></tr>';
    }
    
    $result->free();
    
    $db->close();
  }
  
?>
</table>

<?php include('resources/includes/foot.inc.php'); ?>
