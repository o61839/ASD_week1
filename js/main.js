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
			//this creates the li and puts in the heading
			var newLi1 = document.createElement('li'); 
			document.getElementById('list').appendChild(newLi1); 
			var heading1 = document.createElement('h3'); 
			heading1.innerHTML = ("Challenge #1"); 
			newLi1.appendChild(heading1); 
			//this puts the value into a <p>
			var work1 = document.getElementById('liftingWorkout1').value;
			var pWork1 = document.createElement('p');
			pWork1.innerHTML = work1; 
			newLi1.appendChild(pWork1); 
			//ends Challenge #1
			
			//shows Challenge #2
			var work2 = document.getElementById('liftingWorkout2').value;
			if (work2 != "nomore")
			{
				//this creates the li and puts in the heading
				var newLi2 = document.createElement('li'); 
				document.getElementById('list').appendChild(newLi2); 
				var heading2 = document.createElement('h3'); 
				heading2.innerHTML = ("Challenge #2"); 
				newLi2.appendChild(heading2); 
				//this puts the value into a <p>
				var pWork2 = document.createElement('p');
				pWork2.innerHTML = work2; 
				newLi2.appendChild(pWork2); 
				//ends Challenge #2
			}
			
			//shows Challenge #3
			var work3 = document.getElementById('liftingWorkout3').value;
			if (work3 != "nomore")
			{
				//this creates the li and puts in the heading
				var newLi3 = document.createElement('li'); 
				document.getElementById('list').appendChild(newLi3); 
				var heading3 = document.createElement('h3'); 
				heading3.innerHTML = ("Challenge #3"); 
				newLi3.appendChild(heading3); 
				//this puts the value into a <p>
				var pWork3 = document.createElement('p');
				pWork3.innerHTML = work3; 
				newLi3.appendChild(pWork3); 
				//ends Challenge #3
			}	
			
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
		var newLi4 = document.createElement('li'); 
		document.getElementById('list').appendChild(newLi1); 
		var heading4 = document.createElement('h3'); 
		heading4.innerHTML = ("Aerobics"); 
		newLi4.appendChild(heading1); 
		//this puts the value into a <p>
		var work4 = document.getElementById('aerobicWorkout').value;
		var pWork4 = document.createElement('p');
		pWork4.innerHTML = work4; 
		newLi4.appendChild(pWork4); 
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



