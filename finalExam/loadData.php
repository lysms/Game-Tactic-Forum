<?php 
  include('resources/includes/init.inc.php'); // include the DOCTYPE and opening tags
  include('resources/includes/functions.inc.php'); // functions
?>
<title>Final Exam - ITWS</title>   

<?php 
  include('resources/includes/head.inc.php'); 
  // include global css, javascript, end the head and open the body
?>

<h1>Final Exam - Add Lab</h1>
 
<?php include('resources/includes/menubody.inc.php'); ?>

<?php

  $dbOk = false;
  
  @ $db = new mysqli('localhost', 'root', '', 'myintroprojects');
  
  if ($db->connect_error) {
    echo '<div class="messages">Could not connect to the database. Error: ';
    echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
  } else {
    $dbOk = true; 
  }

  // Now let's process our form:
  // Have we posted?
  $havePost = isset($_POST["save"]);
  
  // Let's do some basic validation
  $errors = '';
  if ($havePost) {
    

    $menu_name = htmlspecialchars(trim($_POST["menu_name"]));  
    $menu_desc = htmlspecialchars(trim($_POST["menu_desc"]));
    $menu_url = htmlspecialchars(trim($_POST["menu_url"]));
    
    
    $focusId = ''; 
    
    if ($menu_name == '') {
      $errors .= '<li>Menu name may not be blank</li>';
      if ($focusId == '') $focusId = '#menu_name';
    }
    if ($menu_desc == '') {
      $errors .= '<li>Menu desc may not be blank</li>';
      if ($focusId == '') $focusId = '#menu_desc';
    }
    if ($menu_url == '') {
      $errors .= '<li>Menu URL may not be blank</li>';
      if ($focusId == '') $focusId = '#menu_url';
    }
  
    if ($errors != '') {
      echo '<div class="messages"><h4>Please correct the following errors:</h4><ul>';
      echo $errors;
      echo '</ul></div>';
      echo '<script type="text/javascript">';
      echo '  $(document).ready(function() {';
      echo '    $("' . $focusId . '").focus();';
      echo '  });';
      echo '</script>';
    } else { 
      if ($dbOk) {

        $menuNameForDb = trim($_POST["menu_name"]);  
        $menuDescForDb = trim($_POST["menu_desc"]);
        $menuURLForDb = trim($_POST["menu_url"]);
        

        $insert = "insert into projectlist (`menu_name`,`menu_desc`,`menu_url`) values(?,?,?)";
        $statement = $db->prepare($insert);
        // bind our variables to the question marks
        $statement->bind_param("sss",$menuNameForDb,$menuDescForDb,$menuURLForDb);
        // make it so:
        $statement->execute();
        

        echo '<div class="messages"><h4>Success: ' . $statement->affected_rows . ' Lab added to database.</h4>';
        echo $menu_name . ' ' . $menu_desc . ' is located at ' . $menu_url . '</div>';
        
        $statement->close();
      }
    } 
  }
?>

<h3>Add Lab</h3>
<form id="addForm" name="addForm" action="loadData.php" method="post" onsubmit="return validate(this);">
  <fieldset> 
    <div class="formData">
                    
      <label class="field" for="menu_name">Menu Name(Lab name):</label>
      <div class="value"><input type="text" size="60" value="<?php if($havePost && $errors != '') { echo $menu_name; } ?>" name="menu_name" id="menu_name"/ autofocus></div>
      
      <label class="field" for="menu_desc">Menu description:</label>
      <div class="value"><input type="text" size="60" value="<?php if($havePost && $errors != '') { echo $menu_desc; } ?>" name="menu_desc" id="menu_desc"/></div>
      
      <label class="field" for="menu_url">Menu location(Lab location):</label>
      <div class="value"><input type="text" size="100" value="<?php if($havePost && $errors != '') { echo $menu_url; } ?>" name="menu_url" id="menu_url"/> <em>(../project/foldername/filename) Ex: ../project/lab10/index.php</em></div>
      
      <input type="submit" value="save" id="save" name="save"/>
    </div>
  </fieldset>
</form>


<h3>All Labs</h3>

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
        echo "\n".'<tr id="movie-' . $record['projectid'] . '"><td>';
      } else {
        echo "\n".'<tr class="odd" id="movie-' . $record['projectid'] . '"><td>';
      }
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

<?php include('resources/includes/foot.inc.php'); 

?>