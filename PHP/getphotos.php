<?php
  $dir = 'Moments';

  if(is_dir($dir)) {
    foreach(glob($dir.'/*') as $file) {
      $result_array[] = $file;
    }
  }

  $result_JSON = json_encode($result_array);

  echo $result_JSON;
?>