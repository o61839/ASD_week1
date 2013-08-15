//Jenney Grover
//ASD 1308
//Buddy Trainer
//August 2013

$("#homepage").on("click", function() 
{
	//don't think there are any functions needed for this page
});//end #homepage 

$('#info').on('pageinit', function()
{
	//don't think there are any functions needed for this page
});//end #info

$('#find').on('pageinit', function()
{
	//this is still under construction
});	//end #find 

$('#newChallenge').on('pageinit', function()
{
  var showWorkOut = function()
	{
			//shows Challenge #1
			//this creates the li
			var newLi1 = $('<li></li>'); 
			$("list").append(newLi1);  
			//this creates the heading and puts it into the li
			var heading1 = $('<h3>Challenge #1</h3>'); 
			newLi1.append(heading1); 
			//this puts the value into a <p>
			var work1 = $('liftingWorkout1').val();
			if (work1 != "placeHolder")
			{
				var pWork1 = $('<p></p>');
				pWork1.text(work1); 
				newLi1.append(pWork1); 
			}
			else
			{
				alert("You need to choose a workout!")
			}//ends Challenge #1
			
			//shows Challenge #2
			var work2 = $('liftingWorkout2').val();
			if (work2 != "nomore" || "placeHolder")
			{
				//this creates the li and puts in the heading
				var newLi2 = $('<li></li>'); 
				$("list").append(newLi2);  
				var heading2 = $('<h3>Challenge #2</h3>');
				newLi2.append(heading2); 
				//this puts the value into a <p>
				var pWork2 = $('<p></p>');
				pWork2text.(work2); 
				newLi2.append(pWork2); 
			}//ends Challenge #2
			
			//shows Challenge #3
			var work3 = $('liftingWorkout3').val();
			if (work3 != "nomore" || "placeHolder")
			{
				//this creates the li and puts in the heading
				var newLi3 = $('<li></li>'); 
				$("list").append(newLi3);  
				var heading3 = $('<h3>Challenge #3</h3>');
				newLi3.append(heading2); 
				//this puts the value into a <p>
				var pWork3 = $('<p></p>');
				pWork3text.(work3); 
				newLi3.append(pWork3); 	
			}//ends Challenge #3
			
			//shows Level
				//id = reps 
				//value = 1, 2, 3
			
			//shows WarmUp and CoolDown
				//id = warmCool
				//value = on (yes) OR off (no) 
			
			//shows Challenge Start Date
				//id = dateAdded
				//value should be the date 
			
			
	} //end showWorkOut()
	
	var saveWorkOut()
	{
		
	}// end saveWorkOut () 
	
	var goWorkOut()
	{
		//this function is from button click. It will take user to the showWorkout
		//need to get to the "day" workout
		//function to mark "day" workout completed 
		
		
		
	}// end goWorkOut()

	
});	//end #newChallenge 

$('#newAerobic').on('pageinit', function()
{
	var showAerobics = function()
	{
		//shows Challenge Start Date
			//id = dateAdded
			//value should be the date 	
			
		//shows Aerobics
		//this creates the li and puts in the heading
		var newLi4 = $('<li></li>'); 
		$("list").append(newLi4);  
		var heading4 = $('<h3>Aerobics</h3>');
		newLi4.append(heading4); 
		//this puts the value into a <p>
		var pWork4 = $('<p></p>');
		pWork4text.(work4); 
		newLi4.append(pWork4); 
		//ends Aerobics
		
		//shows aerobic time 
			//id = speedTime 
			//value = 1, 2, 3, 4, 5 
			
		//shows rest time 
			//id = restTime 
			//value = 1, 2, 3, 4, 5 
			
		//shows how many sets of aerobic/rest time
			//id = sets
			//value = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 
		
		//shows WarmUp and CoolDown
			//id = warmCool
			//value = on (yes) OR off (no) 
					
	} //end showAerobics()
	
	var saveAerobics()
	{
		
	}// end saveAerobics () 
	
	var goAerobics()
	{
		//this function is from button click. It will take user to the saveAerobics
		//need to get to the "day" workout -- show what was saved above
		//function to mark "day" workout completed 
		
		
		
	}// end goAerobics()
	
});	//end #newAerobic

$('#lifting').on('pageinit', function()
{
	//code needed for home page goes here
	
});	//end #lifting 



