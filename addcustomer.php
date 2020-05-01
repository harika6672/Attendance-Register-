<?php
 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, POST, DELETE, OPTIONS");
    header('Access-Control-Max-Age: 86400');
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header("Access-Control-Allow-Headers: *");

$connection = mysqli_connect('localhost' ,'root' ,'' ,'customer_db');

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
//  print_r($request);
  $id=$request->id;
  $name=$request->name;
  $brand = $request->brand;
  $quantity=$request->quantity;
  $rate=$request->rate;
    $day1=$request->days->day1;
    $day2=$request->days->day2;
    $day3=$request->days->day3;
    $day4=$request->days->day4;
    $day5=$request->days->day5;
    $day6=$request->days->day6;
    $day7=$request->days->day7;
    $day8=$request->days->day8;
    $day9=$request->days->day9;
    $day10=$request->days->day10;
    $day11=$request->days->day11;
    $day12=$request->days->day12;
    $day13=$request->days->day13;
    $day14=$request->days->day14;
    $day15=$request->days->day15;
    $day16=$request->days->day16;
    $day17=$request->days->day17;
    $day18=$request->days->day18;
    $day19=$request->days->day19;
    $day20=$request->days->day20;
    $day21=$request->days->day21;
    $day22=$request->days->day22;
    $day23=$request->days->day23;
    $day24=$request->days->day24;
    $day25=$request->days->day25;
    $day26=$request->days->day26;
    $day27=$request->days->day27;
    $day28=$request->days->day28;
    $day29=$request->days->day29;
    $day30=$request->days->day30;
    $day31=$request->days->day31;
    $total=$request->total;
    $milkconsumed=$request->milkconsumed;
    $status=$request->status;
    $dueorextra=$request->dueorextra;


  //Store..SQL Query To insert data into table in database
  $query = "INSERT INTO customer(id,name,brand,quantity,packetrate,day1,day2,day3,day4,day5,day6,day7,day8,day9,day10,
  day11,day12,day13,day14,day15,day16,day17,day18,day19,day20,
  day21,day22,day23,day24,day25,day26,day27,day28,day29,day30,day31,total,milkconsumed,status,dueorextra) VALUES (null,'{$name}','{$brand}',{$quantity},{$rate},
  {$day1}, {$day2},{$day3},{$day4},{$day5},{$day6},{$day7},{$day8},{$day9},{$day10},
  {$day11}, {$day12},{$day13},{$day14},{$day15},{$day16},{$day17},{$day18},{$day19},{$day20},
  {$day21}, {$day22},{$day23},{$day24},{$day25},{$day26},{$day27},{$day28},{$day29},{$day30},{$day31},{$total}, {$milkconsumed},'{$status}',{$dueorextra})";
   
  if(mysqli_query($connection,$query)){
        echo "Data inserted";
}
  else {
      echo "Data not inserted" . mysqli_error($connection);
  }

}
 
?>