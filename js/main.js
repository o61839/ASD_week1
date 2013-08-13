//Jenney Grover
//ASD 1308
//Buddy Trainer
//August 2013

$("#homepage").on("click", function() 
{
	//don't think there are any functions needed for this page
});

$('#info').on('pageinit', function()
{
	//don't think there are any functions needed for this page
});	

$('#find').on('pageinit', function()
{
	//this is still under construction
});	

$('#newChallenge').on('pageinit', function()
{
	//code needed for home page goes here
});	

$('#newAerobic').on('pageinit', function()
{
	//code needed for home page goes here
});	

$('#lifting').on('pageinit', function()
{
	var showWorkOut = function()
	{
			//this creates the li and puts in the heading
			var newLi1 = document.createElement('li'); 
			document.getElementById('list').appendChild(newLi1); 
			var heading1 = document.createElement('h3'); 
			heading1.innerHTML = ("Challenge #1"); 
			newLi1.appendChild(heading1); 
			//this puts the value into a <p>
			var work1 = document.getElementById('liftingWorkout1').value
			var pWork1 = document.createElement('p');
			pWork1.innerHTML = work1; 
			newLi1.appendChild(pWork1); 
			//ends Challenge #1
			
		
			var work2 = document.getElementById('liftingWorkout2').value
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
			
			var work3 = document.getElementById('liftingWorkout3').value
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
	}
});	



