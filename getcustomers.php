<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
    header('Access-Control-Max-Age: 86400');
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header("Access-Control-Allow-Headers: *");

$connection = mysqli_connect('localhost' ,'root' ,'' ,'customer_db');

$query="SELECT * FROM customer";
$result=mysqli_query($connection, $query);
$data=[];
if($result)
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
     $data[$i]['id']    = $row['id'];
     $data[$i]['name'] = $row['name'];
     $data[$i]['brand'] = $row['brand'];
     $data[$i]['quantity'] = $row['quantity'];
     $data[$i]['packetrate'] = $row['packetrate'];
     $data[$i]['days'] = ['day1'=>$row['day1'],'day2'=>$row['day2'],'day3'=>$row['day3'],'day4'=>$row['day4'],'day5'=>$row['day5'],
      'day6'=>$row['day6'],'day7'=>$row['day7'],'day8'=>$row['day8'],'day9'=>$row['day9'],'day10'=>$row['day10'],
                         'day11'=>$row['day11'],'day12'=>$row['day12'],'day13'=>$row['day13'],'day14'=>$row['day14'],'day15'=>$row['day15'],
      'day16'=>$row['day16'],'day17'=>$row['day17'],'day18'=>$row['day18'],'day19'=>$row['day19'],'day20'=>$row['day20'],
                         'day21'=>$row['day21'],'day22'=>$row['day22'],'day23'=>$row['day23'],'day24'=>$row['day24'],'day25'=>$row['day25'],
      'day26'=>$row['day26'],'day27'=>$row['day27'],'day28'=>$row['day28'],'day29'=>$row['day29'],'day30'=>$row['day30'],'day31'=>$row['day31']];
//     $data[$i]['day2'] = $row['day2'];
//     $data[$i]['day3'] = $row['day3'];
//     $data[$i]['day4'] = $row['day4'];
//     $data[$i]['day5'] = $row['day5'];
//     $data[$i]['day6'] = $row['day6'];
//     $data[$i]['day7'] = $row['day7'];
//     $data[$i]['day8'] = $row['day8'];
//     $data[$i]['day9'] = $row['day9'];
//     $data[$i]['day10'] = $row['day10'];
     $data[$i]['total'] = $row['total'];
     $data[$i]['milkconsumed']=$row['milkconsumed'];
     $data[$i]['status'] = $row['status'];
     $data[$i]['dueorextra'] = $row['dueorextra'];
    
   $i++;
  }
    
  echo json_encode($data);
}
else{
   http_response_code(404); 
}
?>