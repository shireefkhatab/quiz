/**************************************** Global variables ****************************************************/
		var counter = 0;
		var score = 0;
		var answer = "";
		var check = "";
		var final_score = 0;
		var finalPage = 11;
		var audio1 = new Audio('audio/correct.mp3');
		var audio2 = new Audio('audio/incorrect.mp3');
		
/*************************************************** Layout ******************************************************************/

/***************************************** when next btn is clicked *****************************/
		$('#next').click(function(){
			if(counter <1){$('.start').hide();}
			$('.form').hide();
			counter++;	console.log(counter);
			$('#form'+counter+', #back').slideDown(1500);
			// last page/
			if(counter >= finalPage){
				$('#next').hide();
				$('.your-result').css('color','lightgreen').slideDown('slow');
				counter = finalPage;
			// result/
				if(final_score < 100){
					$('.mess').css('color','red').slideDown(1500);
				}else{
					$('.mess').hide();
					if (score < 50){
						$('.fail').slideDown(1500);
						$('.total').css('color','red').text(' '+score);
						$('.final-score').css('color','pink').text(' '+final_score);
					}else{
						$('.congrats').slideDown(1500);
						$('.review').css('color','yellow').slideDown(1500);
						$('.or').css('color','white').slideDown(1500);
						$('.total').css('color','lightblue').text(' '+score);
						$('.final-score').css('color','pink').text(' '+final_score);
					} // end of last else/		
				} // end of first else/
			} // end of first if/
		}); // end of next btn click/
/*********************************************** when back btn is clicked ***************************/
		$('#back').click(function(){
			$('.form').hide();
			counter--;	console.log(counter);
			$('#form'+counter+',#next ').slideDown(1500);
			$('.final-title, .col-md-12').children().hide();
			if(counter <= 1){
				$('#back').hide();
				$('.start').hide();
				$('#next').slideDown(1500);
			}
		});
/***************************************************** On submit *****************************************************************************************************/
		$('.form').on('click','button',function(event){
			event.preventDefault();
			event.stopPropagation();
			var clicked=$(this).attr('id');
			var answer= $(this).closest('.form').find('.correct').text();
			// when answer is correct/
			if(answer === clicked){
				score += 10;
				check_counter = 'Correct';
				$('.result-'+counter).css('color','lightblue').text(check_counter);
				$('#your-answer-'+counter).css('color','lightblue').html($(this).text());
				audio1.play();
			}else{
			// when answer is incorrect/
				check_counter = 'Incorrect!'
				$('.result-'+counter).css('color','red').text(check_counter);
				$('#your-answer-'+counter).css('color','red').html($(this).text());
				audio2.play();
			}
			// disable btns after first click/
			$(this).closest('.form').find('button').prop('disabled',true);
			final_score += 10;
			// printing score and correct answer/
			$('#score-'+counter).css('color','pink').text(score);
			$('#correct-answer-'+counter).css('color','lightgreen').text(answer);
		});
/**************************************** wnen try again btn is clicked ************************************************/
		$('.try-again').click(function(){
			$('.final-title, .col-md-12').children().hide();
			$('button').prop('disabled',false);
			$('#back').hide();
			$('#next').slideDown(1500);
			$('.start').slideDown(1500);
			$('.empty').text(' ');
			counter = 0;
			score = 0;
			final_score = 0;
		});