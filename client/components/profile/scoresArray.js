var createScoresArray = function(scores){
		var difficultySort = function(a,b){
			if(a[1] < b[1]){
				return 1;
			}
			if(a[1] > b[1]){
				return -1;
			}
			return 0;
		};

		var songsWithScores = songList.slice();
		songsWithScores.forEach(function(song){
			song.easy = [];
			song.medium = [];
			song.hard = [];
		});

		scores.forEach(function(score, index, allScores){
			var username = score.username;
			if(score.songId === songsWithScores[0].id){
				if(score.difficulty === 'Easy'){
					songsWithScores[0].easy.push([username, score.points]);
				}
				else if(score.difficulty === 'Medium'){
					songsWithScores[0].medium.push([username, score.points]);
				}
				else if(score.difficulty === 'Hard'){
					songsWithScores[0].hard.push([username, score.points]);
				}
			}
			if(score.songId === songsWithScores[1].id){
				if(score.difficulty === 'Easy'){
					songsWithScores[1].easy.push([username, score.points]);
				}
				else if(score.difficulty === 'Medium'){
					songsWithScores[1].medium.push([username, score.points]);
				}
				else if(score.difficulty === 'Hard'){
					songsWithScores[1].hard.push([username, score.points]);
				}
			}
			if(score.songId === songsWithScores[2].id){
				if(score.difficulty === 'Easy'){
					songsWithScores[2].easy.push([username, score.points]);
				}
				else if(score.difficulty === 'Medium'){
					songsWithScores[2].medium.push([username, score.points]);
				}
				else if(score.difficulty === 'Hard'){
					songsWithScores[2].hard.push([username, score.points]);
				}
			}
			if(score.songId === songsWithScores[3].id){
				if(score.difficulty === 'Easy'){
					songsWithScores[3].easy.push([username, score.points]);
				}
				else if(score.difficulty === 'Medium'){
					songsWithScores[3].medium.push([username, score.points]);
				}
				else if(score.difficulty === 'Hard'){
					songsWithScores[3].hard.push([username, score.points]);
				}
			}
			if(score.songId === songsWithScores[4].id){
				if(score.difficulty === 'Easy'){
					songsWithScores[4].easy.push([username, score.points]);
				}
				else if(score.difficulty === 'Medium'){
					songsWithScores[4].medium.push([username, score.points]);
				}
				else if(score.difficulty === 'Hard'){
					songsWithScores[4].hard.push([username, score.points]);
				}
			}
			if(score.songId === songsWithScores[5].id){
				if(score.difficulty === 'Easy'){
					songsWithScores[5].easy.push([username, score.points]);
				}
				else if(score.difficulty === 'Medium'){
					songsWithScores[5].medium.push([username, score.points]);
				}
				else if(score.difficulty === 'Hard'){
					songsWithScores[5].hard.push([username, score.points]);
				}
			}
		});

		songsWithScores.forEach(function(song){
			song.easy.sort(difficultySort);
			song.medium.sort(difficultySort);
			song.hard.sort(difficultySort);
		});

		return songsWithScores;
	}
	
module.exports = createScoresArray;