// 해시
let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
//            0    1    2    3     4
//           c2,  p2,  c3,  c1,   p1
// return = [4, 1, 3, 0]

function solution(genres, plays) {
	let genresHash = {}; // 장르별 누적 재생 횟수를 저장할 객체
	let songs = []; // 노래 정보를 저장할 배열

	// 1. 장르별 총조회수 객체
	// 2. 노래 정보 객체 배열
	for (let i = 0; i < genres.length; i++) {
		const genre = genres[i];
		// 객체 : 장르별 합계
		genresHash[genre] = (genresHash[genre] || 0) + plays[i];
		// 배열(객체) :   idx       장르         재생수
		songs.push({ index: i, genre: genre, play: plays[i] });
	}

	// 장르별 총조회수 내림차순
	let descGenres = Object.keys(genresHash).sort(
		(a, b) => genresHash[b] - genresHash[a]
	);

	let result = [];

	// 장르별로 높은 횟수 2개 선택
	for (let genre of descGenres) {
		// 장르 우선순위 선택
		// 배열(객체) 필터링:장르
		let genreSongs = songs.filter((song) => song.genre === genre);
		// 장르송 내림차순
		genreSongs.sort((a, b) => b.play - a.play);

		// 2순위까지 idx → push
		// Math.min : 2곡이 안되는 경우
		for (let i = 0; i < Math.min(genreSongs.length, 2); i++) {
			result.push(genreSongs[i].index);
		}
	}

	return result;
}
